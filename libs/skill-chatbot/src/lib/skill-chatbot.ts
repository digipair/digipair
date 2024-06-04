/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings, executePinsList, preparePinsSettings } from '@digipair/engine';
import { PromptTemplate } from '@langchain/core/prompts';
import { RunnableSequence } from '@langchain/core/runnables';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { v4 } from 'uuid';

const VESPA_SERVER = process.env['VESPA_SERVER'] ?? 'http://localhost:8080';

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

    const messages = ((await response.json()).root.children || []).map(
      (child: any) => child.fields,
    );
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

    const chunksPromises = parents.map(async parent => {
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
    const documents = [...parents, ...chunks.flat()];

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

  private async pushDocuments(
    modelEmbeddings: any,
    baseUrl: string,
    session: string,
    documents: any[],
  ) {
    const results = [];

    for (const document of documents) {
      const content_embedding =
        document.role === 'system' ? undefined : await modelEmbeddings.embedQuery(document.content);

      const response = await fetch(
        `${baseUrl}/document/v1/Digipair_default/history/docid/${document.uuid}`,
        {
          method: 'POST',
          body: JSON.stringify({ fields: { ...document, content_embedding, session } }),
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

  private async updateSummary(
    model: any,
    baseUrl: string,
    prompt: string,
    session: string,
    messages: any[],
  ): Promise<void> {
    const [summary] = await this.searchDocuments(
      baseUrl,
      session,
      `is_parent = true and userQuery() order by date desc limit 1`,
      {
        query: 'role:"system"',
      },
    );
    const history = messages
      .sort((a, b) => a - b)
      .map(({ role, content }) => `${role}: ${content}`)
      .join('\n');
    const date = messages.reduce((acc, { date }) => Math.max(acc, date), 0);
    const chain = RunnableSequence.from([PromptTemplate.fromTemplate(prompt), model]);
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

  private async updateHistory(
    model: any,
    modelEmbeddings: any,
    baseUrl: string,
    promptSummary: string,
    session: string,
    memory: any[],
  ): Promise<void> {
    // add new messages
    const documents = await this.prepareHistory(memory);
    await this.pushDocuments(modelEmbeddings, baseUrl, session, documents);

    // update summary
    await this.updateSummary(model, baseUrl, promptSummary, session, memory);
  }

  async history(params: any, _pins: PinsSettings[], context: any) {
    const session = `${context.request.digipair}-${context.request.body.userId}`;
    const {
      embeddings = context.privates.MODEL_EMBEDDINGS,
      baseUrl = context.private?.VESPA_SERVER ?? VESPA_SERVER,
      maxHistory = 100,
      system = `You are a useful assistant, capable of explaining concepts in an easy-to-understand manner. If you're not sure of an answer, you can say "I don't know" or "I'm not sure."`,
      question = 'Hello, how can I help you?',
    } = params;

    let messages: any[] = [];

    const history = await this.searchDocuments(
      baseUrl,
      session,
      `is_parent = true and (role contains "assistant" or role contains "user") order by date desc limit ${maxHistory}`,
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
      const modelEmbeddings = await executePinsList(embeddings, context);
      await this.pushDocuments(modelEmbeddings, baseUrl, session, documents);
    }

    return messages;
  }

  async find(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const session = `${context.request.digipair}-${context.request.body.userId}`;
    const {
      baseUrl = context.private?.VESPA_SERVER ?? VESPA_SERVER,
      limit = 100,
      orderby = '',
      query,
    } = params;

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
    const {
      embeddings = context.privates.MODEL_EMBEDDINGS,
      baseUrl = context.private?.VESPA_SERVER ?? VESPA_SERVER,
      limit = 100,
      orderby = '',
      targetHits = 50,
      language = 'fr',
      filter = 'true',
      query,
    } = params;

    if (
      orderby !== '' &&
      !/^([a-zA-Z0-9_-]+)(,\s*[a-zA-Z0-9_-]+)*(\s+(asc|desc))?$/.test(orderby)
    ) {
      throw new Error('vespa:find - Invalid orderby parameter');
    }

    const orderbySecured = orderby === '' ? '' : `order by ${orderby}`;
    const modelEmbeddings = await executePinsList(embeddings, context);
    const queryEmbedding = await modelEmbeddings.embedQuery(query);
    const results = await this.searchParentDocuments(
      baseUrl,
      session,
      `((userQuery()) or ({targetHits:${targetHits}}nearestNeighbor(content_embedding,q))) and (${filter}) ${orderbySecured} limit ${parseInt(
        limit,
      )}`,
      {
        'ranking.profile': 'fusion',
        'input.query(q)': queryEmbedding,
        query,
        language,
      },
    );

    return results;
  }

  async chatbot(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const session = `${context.request.digipair}-${context.request.body.userId}`;
    const {
      embeddings = context.privates.MODEL_EMBEDDINGS,
      model = context.privates.MODEL_LLM,
      baseUrlVespa = context.private?.VESPA_SERVER ?? VESPA_SERVER,
      promptSummary = `
Summary of conversation history:
{summary}

New messages:
{history}

Summarize the conversation history in a short, clear and concise text, taking into account the new messages.`,
      command = [],
      boosts = [],
      minBoostSemanticScore = 0.65,
      assistant,
      sources,
      logs,
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
    const modelEmbeddings = await executePinsList(embeddings, context);
    const modelInstance = await executePinsList(model, context);
    this.updateHistory(
      modelInstance,
      modelEmbeddings,
      baseUrlVespa,
      promptSummary,
      session,
      memory,
    );

    const filteredBoosts = [];
    let i = boosts.length - 1;
    while (i >= 0) {
      if (boosts[i].matchfeatures.semantic_score >= minBoostSemanticScore) {
        while (i >= 0) {
          filteredBoosts.push(JSON.parse(boosts[i].trigger));
          i--;
        }
      }

      i--;
    }

    return {
      assistant,
      command: await Promise.all(
        command.map((settings: PinsSettings) => preparePinsSettings(settings, context)),
      ),
      boosts: filteredBoosts,
      sources,
      logs,
    };
  }

  // SCENES
  async boost(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    if (context.request.method !== 'POST') {
      return { error: 'Method not allowed' };
    }

    const { execute } = params;
    const result = await executePinsList(execute, context);
    return result;
  }

  async getRole(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const session = `${context.request.digipair}-${context.request.body.userId}`;
    const { baseUrl = context.private?.VESPA_SERVER ?? VESPA_SERVER, role } = params;

    const [document] = await this.searchDocuments(
      baseUrl,
      session,
      `is_parent = true and userQuery() order by date desc limit 1`,
      {
        query: `role:"${role}"`,
      },
    );

    return document;
  }

  async setRole(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const session = `${context.request.digipair}-${context.request.body.userId}`;
    const { baseUrl = context.private?.VESPA_SERVER ?? VESPA_SERVER, role, value } = params;

    const [previous] = await this.searchDocuments(
      baseUrl,
      session,
      `is_parent = true and userQuery() order by date desc limit 1`,
      {
        query: `role:"${role}"`,
      },
    );

    const document = {
      session,
      date: Date.now(),
      role,
      ...value,
      uuid: previous?.uuid ?? v4(),
      is_parent: true,
    };
    await this.updateDocuments(baseUrl, [document]);
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

export const getRole = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new ChatbotService().getRole(params, pinsSettingsList, context);

export const setRole = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new ChatbotService().setRole(params, pinsSettingsList, context);
