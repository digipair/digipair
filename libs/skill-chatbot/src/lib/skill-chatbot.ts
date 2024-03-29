/* eslint-disable @typescript-eslint/no-unused-vars */
import * as engine from '@digipair/engine';
import { Ollama } from '@langchain/community/llms/ollama';
import { PromptTemplate } from '@langchain/core/prompts';
import { RunnableSequence } from '@langchain/core/runnables';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { v4 } from 'uuid';

type PinsSettings = any;
const { executePinsList } = engine as any;

const VESPA_SERVER = process.env['VESPA_SERVER'] ?? 'http://localhost:8080';
const OLLAMA_SERVER = process.env['OLLAMA_SERVER'] ?? 'http://localhost:11434';

class ChatbotService {
  private async searchDocuments(
    baseUrl: string,
    session: string,
    query: string,
    options: any = {},
  ): Promise<any[]> {
    const response = await fetch(`${baseUrl}/search/`, {
      method: 'POST',
      body: JSON.stringify({
        yql: `select * from history where session contains "${session}" and ${query}`,
        ...options,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const error = await response.json();

      console.log('Error - VespaService:searchDocuments - fetching', error.root?.errors ?? error);
      throw new Error(`Error - VespaService:searchDocuments - fetching history`);
    }

    const messages = ((await response.json()).root.children || []).map((child: any) => child.fields);
    return messages;
  }

  private async searchParentDocuments(
    baseUrl: string,
    session: string,
    query: string,
    options: any = {},
  ): Promise<any[]> {
    const documents = [];
    const uuids = [];
    const queryUuids = [];
    const chunks = await this.searchDocuments(baseUrl, session, query, options);

    documents.push(...chunks.filter(({ is_parent }) => is_parent));
    uuids.push(...chunks.filter(({ is_parent }) => is_parent).map(({ uuid }) => uuid));
    for (const chunk of chunks) {
      if (uuids.indexOf(chunk.parent_uuid) < 0 && queryUuids.indexOf(chunk.parent_uuid) < 0) {
        queryUuids.push(chunk.parent_uuid);
      }
    }

    if (queryUuids.length > 0) {
      documents.push(
        ...(await this.searchDocuments(
          baseUrl,
          session,
          `uuid in (${queryUuids.map(uuid => `"${uuid}"`).join(',')})`,
          options,
        )),
      );
    }

    return documents;
  }

  private async prepareHistory(history: any[]) {
    const parents = history
      .filter(({ role }) => role !== 'system')
      .map(document => {
        const uuid = v4();
        return { ...document, uuid, parent_uuid: uuid, is_parent: true };
      });

    const chunksPromises = parents.map(async (parent) => {
      const text = parent.content;
      const v128 = new RecursiveCharacterTextSplitter({
        chunkSize: 128,
        chunkOverlap: 12,
      });
      const v256 = new RecursiveCharacterTextSplitter({
        chunkSize: 256,
        chunkOverlap: 25,
      });
      const v512 = new RecursiveCharacterTextSplitter({
        chunkSize: 512,
        chunkOverlap: 51,
      });

      const output = [
        ...(text.length > 128 ? await v128.createDocuments([text]) : []),
        ...(text.length > 256 ? await v256.createDocuments([text]) : []),
        ...(text.length > 512 ? await v512.createDocuments([text]) : []),
      ];

      return output.map(({ pageContent }) => ({
        ...parent,
        content: pageContent,
        uuid: v4(),
        is_parent: false,
      }));
    });

    const chunks = await Promise.all(chunksPromises);

    const result = [...parents, ...chunks.flat()];

    const embeddings = await this.embeddings(result.map(document => document.content));
    const documents = result.map((document, index) => ({
      ...document,
      content_embedding: embeddings[index],
    }));

    return [
      ...history
        .filter(({ role }) => role === 'system')
        .map(document => {
          const uuid = v4();
          return { ...document, uuid, parent_uuid: uuid, is_parent: true };
        }),
      ...documents,
    ];
  }

  private async embedding(text: string) {
    const { HuggingFaceTransformersEmbeddings } = await eval(
      `import('@langchain/community/embeddings/hf_transformers')`,
    );
    const model = new HuggingFaceTransformersEmbeddings({
      modelName: 'Xenova/multilingual-e5-large',
    });

    return await model.embedQuery(text);
  }

  private async embeddings(texts: string[]) {
    return Promise.all(texts.map(text => this.embedding(text)));
  }

  private async pushDocuments(baseUrl: string, session: string, documents: any[]) {
    const results = [];

    for (const document of documents) {
      const response = await fetch(
        `${baseUrl}/document/v1/Digipair_default/history/docid/${document.uuid}`,
        {
          method: 'POST',
          body: JSON.stringify({ fields: { ...document, session } }),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      results.push(await response.json());
    }

    return results;
  }

  private async updateDocuments(baseUrl: string, documents: any[]) {
    const results = [];

    for (const document of documents) {
      const response = await fetch(
        `${baseUrl}/document/v1/Digipair_default/history/docid/${document.uuid}`,
        {
          method: 'POST',
          body: JSON.stringify({ fields: { ...document } }),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      results.push(await response.json());
    }

    return results;
  }

  private async updateSummary(baseUrl: string, session: string, messages: any[], options: { modelName: string, temperature: number, baseUrl: string }): Promise<void> {
    const [summary] = await this.searchDocuments(
      baseUrl,
      session,
      `is_parent = true and userQuery() order by date desc limit 1`,
      {
        query: 'role:"system"',
      },
    );
    const model = new Ollama({ model: options.modelName, temperature: options.temperature, baseUrl: options.baseUrl });
    const history = messages
      .sort((a, b) => a - b)
      .map(({ role, content }) => `${role}: ${content}`)
      .join('\n');
    const date = messages.reduce((acc, { date }) => Math.max(acc, date), 0);
    const prompt = `
      Résumé de l'historique la conversation:
      ${summary.content}

      Nouveaux messages:
      ${history}

      Résumer dans un texte court, précis et concis l'historique de la conversation en prenant en compte les nouveaux messages.
    `;

    const chain = RunnableSequence.from([PromptTemplate.fromTemplate(prompt), model as any]);
    const content = await chain.invoke({ summary: summary.content, history });
    const document = {
      session,
      date,
      role: 'system',
      content,
      source: summary.source,
      uuid: summary.uuid,
      is_parent: true,
    };
    await this.updateDocuments(baseUrl, [document]);
  }

  private async updateHistory(baseUrl: string, session: string, memory: any[], options: { modelName: string, temperature: number, baseUrl: string }): Promise<void> {
    // add new messages
    const documents = await this.prepareHistory(memory);
    await this.pushDocuments(baseUrl, session, documents);

    // update summary
    await this.updateSummary(baseUrl, session, memory, options);
  }

  async history(params: any, _pins: PinsSettings[], context: any) {
    const MAX_HISTORY = 100;
    const session = `${context.request.digipair}-${context.request.body.userId}`;
    const {
      baseUrl = context.private?.VESPA_SERVER ?? VESPA_SERVER,
      system = `Vous êtes un assistant utile, capable d'expliquer des concepts de manière simple à comprendre. Si vous n'êtes pas sûr d'une réponse, vous pouvez dire "Je ne sais pas" ou "Je ne suis pas sûr".`,
      question = 'Bonjour, comment puis-je vous aider ?',
    } = params;

    let messages: any[] = [];

    const history = await this.searchDocuments(
      baseUrl,
      session,
      `is_parent = true and session contains "${session}" and !(role contains "system") order by date desc limit ${MAX_HISTORY}`,
    );
    messages = history
      .sort((a, b) => a.date - b.date)
      .map(document => ({ role: document.role, content: document.content }));

    if (messages.length === 0) {
      messages = [{ role: 'assistant', content: question }];
      const date = Date.now();
      const source = 'chat';

      const history = [
        { session, date, role: 'system', content: system, source: source },
        { session, date, role: 'assistant', content: question, source: source },
      ];

      const documents = await this.prepareHistory(history);
      await this.pushDocuments(baseUrl, session, documents);
    }

    return messages;
  }

  async find(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const session = `${context.request.digipair}-${context.request.body.userId}`;
    const { baseUrl = context.private?.VESPA_SERVER ?? VESPA_SERVER, limit = 100, orderby = '', query } = params;

    if (
      orderby !== '' &&
      !/^([a-zA-Z0-9_-]+)(,\s*[a-zA-Z0-9_-]+)*(\s+(asc|desc))?$/.test(orderby)
    ) {
      throw new Error('vespa:find - Invalid orderby parameter');
    }

    const orderbySecured = orderby === '' ? '' : `order by ${orderby}`;
    const results = await this.searchDocuments(
      baseUrl,
      session,
      `is_parent = true and userQuery() ${orderbySecured} limit ${parseInt(limit)}`,
      {
        query,
      },
    );

    return results;
  }

  async search(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const session = `${context.request.digipair}-${context.request.body.userId}`;
    const { baseUrl = context.private?.VESPA_SERVER ?? VESPA_SERVER, limit = 100, orderby = '', targetHits = 50, language = 'fr', query } = params;

    if (
      orderby !== '' &&
      !/^([a-zA-Z0-9_-]+)(,\s*[a-zA-Z0-9_-]+)*(\s+(asc|desc))?$/.test(orderby)
    ) {
      throw new Error('vespa:find - Invalid orderby parameter');
    }

    const orderbySecured = orderby === '' ? '' : `order by ${orderby}`;
    const queryEmbedding = await this.embedding(query);
    const results = await this.searchParentDocuments(
      baseUrl,
      session,
      `((userQuery()) or ({targetHits:${targetHits}}nearestNeighbor(content_embedding,q))) ${orderbySecured} limit ${parseInt(
        limit,
      )}`,
      {
        'ranking.profile': 'fusion',
        'input.query(q)': queryEmbedding,
        query: query,
        language,
      },
    );

    return results;
  }

  async chatbot(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const session = `${context.request.digipair}-${context.request.body.userId}`;
    const { 
      modelName = 'mistral', 
      temperature = 0, 
      baseUrlOllama = context.private?.OLLAMA_SERVER ?? OLLAMA_SERVER, 
      baseUrlVespa = context.private?.VESPA_SERVER ?? VESPA_SERVER,
      assistant, 
      command, 
      sources, 
      logs 
    } = params;
    const input = context.request.body;
    const date = Date.now();

    const memory = [
      ...(input.boost
        ? [
            {
              role: 'user',
              content: input.boost.name,
            },
          ]
        : []),
      ...(input.boost?.text
        ? [
            {
              role: 'assistant',
              content: input.boost.text,
            },
          ]
        : []),
      ...(input.inputs ?? [])
        .filter(({ content }: any) => content)
        .map(({ content }: any) => ({
          role: 'user',
          content,
        })),
      ...(input.prompt
        ? [
            {
              role: 'user',
              content: input.prompt,
            },
          ]
        : []),
      {
        role: 'assistant',
        content: assistant,
      },
    ].map(({ role, content }, index) => ({
      role,
      content,
      source: 'chat',
      date: date + index,
    }));

    // Asynchronous history update
    this.updateHistory(baseUrlVespa, session, memory, { modelName, temperature, baseUrl: baseUrlOllama });

    return {
      assistant,
      command,
      sources,
      logs,
    };
  }

  // SCENES
  async boost(_params: any, pinsSettingsList: PinsSettings[], context: any) {
    const result = await executePinsList(pinsSettingsList, context);
    return result;
  }
}

export const history = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new ChatbotService().history(params, pinsSettingsList, context);

export const find = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new ChatbotService().find(params, pinsSettingsList, context);

export const search = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new ChatbotService().search(params, pinsSettingsList, context);

export const chatbot = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new ChatbotService().chatbot(params, pinsSettingsList, context);

export const boost = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new ChatbotService().boost(params, pinsSettingsList, context);
