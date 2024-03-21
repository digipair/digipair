/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChatOllama } from '@langchain/community/chat_models/ollama';
import { RunnableSequence } from '@langchain/core/runnables';
import { v4 } from 'uuid';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { StringOutputParser } from '@langchain/core/output_parsers';
import * as engine from '@digipair/engine';

type PinsSettings = any;
const { executePinsList } = engine as any;

const OLLAMA_SERVER = process.env['OLLAMA_SERVER'] ?? 'http://localhost:11434';
const VESPA_SERVER = process.env['VESPA_SERVER'] ?? 'http://localhost:8080';

class ChatbotService {
  async conversation(
    params: any,
    _pins: PinsSettings[],
    context: any
  ) {
    const session = `${context.request.digipair}-${context.request.body.userId}`;
    const { question, baseOllamaUrl = context.private?.OLLAMA_SERVER ?? OLLAMA_SERVER, baseVespaUrl = context.private?.VESPA_SERVER ?? VESPA_SERVER, modelName = 'mistral', system = `Vous êtes un assistant utile, capable d'expliquer des concepts de manière simple à comprendre. Si vous n'êtes pas sûr d'une réponse, vous pouvez dire "Je ne sais pas" ou "Je ne suis pas sûr".` } = params;
    const model = new ChatOllama({
      model: modelName,
      baseUrl: baseOllamaUrl,
    });

    const runnable = RunnableSequence.from([
      {
        history: async () => {
          const messages = await this.getDocuments(baseVespaUrl, 'history', `session contains "${session}" and !(role contains "system") and is_parent = true order by date desc limit 5`);
          const summary = await this.getDocuments(baseVespaUrl, 'history', `session contains "${session}" and role contains "system" and is_parent = true order by date desc limit 1`);

          return { messages: messages.map(({ role, content }) => ({ role, content })), summary: { content: summary[0].content }};
        },
        question: ({ question }) => question,
      },
      {
        history: async ({ history }) => history,
        question: ({ question }) => question,
        messages: async ({ question }) => {
          const limit = 5, targetHits = 50;
          const queryEmbedding = await this.embedding(question);
          const messages = await this.getRootDocuments(
            baseVespaUrl,
            'history', 
            `session contains "${session}" and !(role contains "system") and ((userQuery()) or ({targetHits:${targetHits}}nearestNeighbor(content_embedding,q))) limit ${limit}`,
            { 
              'ranking.profile': 'fusion',
              'input.query(q)': queryEmbedding,
              'query': question,
            },
          );

          return messages;
        },
        documents: async ({ question }) => {
          // const collection = await zepClient.document.getCollection(collectionName);
          // const embeddings = new OpenAIEmbeddings();
          // const embedding = new Float32Array(await embeddings.embedQuery(query));
          // const documents = await collection.search({ embedding }, 2);
          // return documents;
          return [];
        },
      },
      {
        // query: ({ query }) => query,
        logs: ({ history, question, messages, documents }) => ({
          history,
          question,
          messages,
          documents,
        }),
        sources: ({ documents, messages }) =>
          [
            ...documents.map(({ uuid, metadata }: any) => ({
              uuid,
              source: metadata.source,
              type: 'web',
            })),
            ...messages.map(({ uuid }: any) => ({
              uuid,
              type: 'chat',
            })),
          ] as any,
        assistant: ({ question, history, messages, documents }) =>
          ChatPromptTemplate.fromMessages([
            [
              'system',
              system,
            ],
            [
              'human',
              `
    Résumé de votre conversation :
    ${history.summary.content}
    ${messages.map(({ content }: any) => content).join('\n')}
    ${history.messages.map(({ role, content }: any) => `${role.toLowerCase()} : ${content}`).join('\n')}

    Votre base de connaissances contient les informations suivantes :
    ${documents.map(({ content }: any) => content).join('\n')}
  
    Ma question : 
    ${question}
    
    Donner une réponse courte, précise et en français à l'utilisateur en utilisant uniquement votre base de connaissances.`,
            ],
          ])
            .pipe(model as any)
            .pipe(new StringOutputParser()),
      },
    ]);
    const result = await runnable.invoke({
      question,
    });

    return result;
  }

  async history(
    params: any,
    _pins: PinsSettings[],
    context: any
  ) {
    const MAX_HISTORY = 100;
    const session = `${context.request.digipair}-${context.request.body.userId}`;
    const {
      system = `Vous êtes un assistant utile, capable d'expliquer des concepts de manière simple à comprendre. Si vous n'êtes pas sûr d'une réponse, vous pouvez dire "Je ne sais pas" ou "Je ne suis pas sûr".`,
      question = 'Bonjour, comment puis-je vous aider ?',
      baseUrl = context.private?.VESPA_SERVER ?? VESPA_SERVER,
    } = params;

    let messages: any[] = [];

    const history = await this.getDocuments(baseUrl, 'history', `is_parent = true and session contains "${session}" and !(role contains "system") order by date desc limit ${MAX_HISTORY}`);
    messages = history
      .sort((a, b) => a.date - b.date)
      .map((document) => ({ role: document.role, content: document.content }));

    if (messages.length === 0) {
      messages = [{ role: 'assistant', content: question }];
      const date = Date.now();
      const source = 'chat';

      const history = [
        { session, date, role: 'system', content: system, source: source },
        { session, date, role: 'assistant', content: question, source: source }
      ];

      const documents =  await this.prepareHistory(history);
      await this.pushDocuments('history', documents);
    }

    return messages;
  }

  private async getDocuments(baseUrl: string, collection: string, query: string, options: any = {}): Promise<any[]> {
    const response = await fetch(`${baseUrl}/search/`, {
      method: 'POST',
      body: JSON.stringify({ yql: `select * from ${collection} Digipair_default where ${query}`, ...options }),
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!response.ok) {
      console.error('chatbot:getDocuments error', await response.json());
      throw new Error('Error fetching history');
    }

    const messages = ((await response.json()).root.children || []).map((child: any) => child.fields);
    return messages;
  }

  private async getRootDocuments(baseUrl: string, collection: string, query: string, options: any = {}): Promise<any[]> {
    const documents = [];
    const uuids = [];
    const queryUuids = [];
    const chunks = await this.getDocuments(baseUrl, collection, query, options);

    documents.push(...chunks.filter(({ is_parent }) => is_parent));
    uuids.push(...chunks.filter(({ is_parent }) => is_parent).map(({ uuid }) => uuid));
    for (const chunk of chunks) {
      if (uuids.indexOf(chunk.parent_uuid) < 0 && queryUuids.indexOf(chunk.parent_uuid) < 0) {
        queryUuids.push(chunk.parent_uuid);
      }
    }

    if (queryUuids.length > 0) {
      documents.push(...(await this.getDocuments(baseUrl, collection, `uuid in (${queryUuids.map((uuid) => `"${uuid}"`).join(',')})`, options)));
    }

    return documents;
  }

  private async prepareHistory(history: any[]) {
    const parents = history.filter(({ role }) => role !== 'system').map((document) => {
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

      const output = [...(text.length > 128 ? await v128.createDocuments([text]) : []), ...(text.length > 256 ? await v256.createDocuments([text]) : []), ...(text.length > 512 ? await v512.createDocuments([text]) : [])];

      return output.map(({ pageContent }) => ({ ...parent, content: pageContent, uuid: v4(), is_parent: false }));
    });

    const chunks = await Promise.all(chunksPromises);

    const result = [...parents, ...chunks.flat()];

    const embeddings = await this.embeddings(result.map((document) => document.content));
    const documents = result.map((document, index) => ({ ...document, content_embedding: embeddings[index] }));

    return [
      ...history.filter(({ role }) => role === 'system').map((document) => {
        const uuid = v4();
        return { ...document, uuid, parent_uuid: uuid, is_parent: true };
      }),
      ...documents
    ];
  }

  private async embedding(text: string) {
    const { HuggingFaceTransformersEmbeddings } = (await eval(`import('@langchain/community/embeddings/hf_transformers')`));
    const model = new HuggingFaceTransformersEmbeddings({
      modelName: 'Xenova/multilingual-e5-large', 
    });

    return await model.embedQuery(text);
  }

  private async embeddings(texts: string[]) {
    const { HuggingFaceTransformersEmbeddings } = (await eval(`import('@langchain/community/embeddings/hf_transformers')`));
    const model = new HuggingFaceTransformersEmbeddings({
      modelName: 'Xenova/multilingual-e5-large', 
    });

    return Promise.all(texts.map((text) => model.embedQuery(text)));
  }

  private async pushDocuments(collection: string, documents: any[], context: any = {}) {
    const SERVER = context.VESPA_SERVER ?? VESPA_SERVER;
    const results = [];

    for (const document of documents) {
      const response = await fetch(`${SERVER}/document/v1/Digipair_default/${collection}/docid/${document.uuid}`, {
        method: 'POST',
        body: JSON.stringify({ fields: document }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      results.push(await response.json());
    }

    return results;
  }

  async chatbot(
    params: any,
    _pinsSettingsList: PinsSettings[],
    context: any
  ) {
    const { assistant, command, sources, logs } = params;
    const session = `${context.request.digipair}-${context.request.body.userId}`;
    const input = context.request.body;
    const date = Date.now();

    const memory = [
      ...(input.boost
        ? [{
            role: 'user',
            content: input.boost.name,
          }]
        : []),
      ...(input.boost?.text
        ? [{
            role: 'assistant',
            content: input.boost.text,
          }]
        : []),
      ...(input.inputs ?? [])
        .filter(({ content }: any) => content)
        .map(
          ({ content }: any) => ({
            role: 'user',
            content,
          }),
        ),
      ...(input.prompt
        ? [{
            role: 'user',
            content: input.prompt,
          }]
        : []),
      {
        role: 'assistant',
        content: assistant,
      },
    ];

    const documents = await this.prepareHistory(memory.map(({ role, content }, index) => ({ role, content, source: 'chat', session, date: date + index })));
    await this.pushDocuments('history', documents);

    return {
      assistant,
      command,
      sources,
      logs,
    };
  }

  // SCENES
  async boost(
    _params: any,
    pinsSettingsList: PinsSettings[],
    context: any
  ) {
    const result = await executePinsList(pinsSettingsList, context);
    return result;
  }
}

export const conversation = (
  params: any,
  pinsSettingsList: PinsSettings[],
  context: any
) => new ChatbotService().conversation(params, pinsSettingsList, context);

export const history = (
  params: any,
  pinsSettingsList: PinsSettings[],
  context: any
) => new ChatbotService().history(params, pinsSettingsList, context);

export const chatbot = (
  params: any,
  pinsSettingsList: PinsSettings[],
  context: any
) => new ChatbotService().chatbot(params, pinsSettingsList, context);

export const boost = (
  params: any,
  pinsSettingsList: PinsSettings[],
  context: any
) => new ChatbotService().boost(params, pinsSettingsList, context);
