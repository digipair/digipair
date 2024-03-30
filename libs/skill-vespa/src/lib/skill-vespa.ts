/* eslint-disable @typescript-eslint/no-unused-vars */
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { v4 } from 'uuid';

type PinsSettings = any;

const VESPA_SERVER = process.env['VESPA_SERVER'] ?? 'http://localhost:8080';

class VespaService {
  private embeddingsModel: any = null;

  private async searchDocuments(
    baseUrl: string,
    collection: string,
    query: string,
    options: any = {},
  ): Promise<any[]> {
    const response = await fetch(`${baseUrl}/search/`, {
      method: 'POST',
      body: JSON.stringify({
        yql: `select * from ${collection} where ${query}`,
        ...options,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Error - VespaService:getDocuments - fetching', error.root?.errors ?? error);
      throw new Error(`Error - VespaService:getDocuments - fetching ${collection}`);
    }

    const messages = ((await response.json()).root.children || []).map((child: any) => child.fields);
    return messages;
  }

  private async searchParentDocuments(
    baseUrl: string,
    collection: string,
    query: string,
    options: any = {},
  ): Promise<any[]> {
    const documents = [];
    const uuids = [];
    const queryUuids = [];
    const chunks = await this.searchDocuments(baseUrl, collection, query, options);

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
          collection,
          `uuid in (${queryUuids.map(uuid => `"${uuid}"`).join(',')})`,
          options,
        )),
      );
    }

    return documents;
  }

  private async prepareDocuments(documents: any[]) {
    const parents = documents.map(document => {
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
    const result = [...parents, ...chunks.flat()];

    return result;
  }

  private async embedding(text: string) {
    if (this.embeddingsModel === null) {      
      const { HuggingFaceTransformersEmbeddings } = await eval(
        `import('@langchain/community/embeddings/hf_transformers')`,
      );
      this.embeddingsModel = new HuggingFaceTransformersEmbeddings({
        modelName: 'Xenova/multilingual-e5-large',
      });
    }

    return await this.embeddingsModel.embedQuery(text);
  }

  private async pushDocuments(baseUrl: string, collection: string, documents: any[]) {
    const results = [];

    for (const document of documents) {
      const content_embedding = await this.embedding(document.content);

      const response = await fetch(
        `${baseUrl}/document/v1/Digipair_default/${collection}/docid/${document.uuid}`,
        {
          method: 'POST',
          body: JSON.stringify({ fields: { ...document, content_embedding } }),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      results.push(await response.json());
    }

    return results;
  }

  async find(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { baseUrl = context.private?.VESPA_SERVER ?? VESPA_SERVER, collection = 'knowledge', limit = 100, orderby = '', query } = params;

    if (
      orderby !== '' &&
      !/^([a-zA-Z0-9_-]+)(,\s*[a-zA-Z0-9_-]+)*(\s+(asc|desc))?$/.test(orderby)
    ) {
      throw new Error('vespa:find - Invalid orderby parameter');
    }

    const orderbySecured = orderby === '' ? '' : `order by ${orderby}`;
    const results = await this.searchDocuments(
      baseUrl,
      collection,
      `is_parent = true and userQuery() ${orderbySecured} limit ${parseInt(limit)}`,
      {
        query,
      },
    );

    return results;
  }

  async search(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const {
      baseUrl = context.private?.VESPA_SERVER ?? VESPA_SERVER,
      collection = 'knowledge',
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
    const queryEmbedding = await this.embedding(query);
    const results = await this.searchParentDocuments(
      baseUrl,
      collection,
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

  async textSplitter(params: any, _pinsSettingsList: PinsSettings[], _context: any): Promise<any> {
    const { size = 1024, overlap = 102, source, text } = params;
    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: size,
      chunkOverlap: overlap,
    });

    return (await splitter.createDocuments([text])).map(({ pageContent }) => ({
      source,
      content: pageContent,
    }));
  }

  async push(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { baseUrl = context.private?.VESPA_SERVER ?? VESPA_SERVER, collection = 'knowledge', documents } = params;
    const results = await this.prepareDocuments(documents);

    return await this.pushDocuments(baseUrl, collection, results);
  }

  async remove(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { baseUrl = context.private?.VESPA_SERVER ?? VESPA_SERVER, collection = 'knowledge', selection } = params;
    const response = await fetch(`${baseUrl}/document/v1/Digipair_default/${collection}/docid?selection=${encodeURI(selection)}&cluster=Digipair_default`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Error - VespaService:remove - fetching', error.root?.errors ?? error);
      throw new Error(`Error - VespaService:remove - fetching ${collection}`);
    }

    return await response.json();
  }
}

export const find = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new VespaService().find(params, pinsSettingsList, context);

export const search = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new VespaService().search(params, pinsSettingsList, context);

export const textSplitter = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new VespaService().textSplitter(params, pinsSettingsList, context);

export const push = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new VespaService().push(params, pinsSettingsList, context);

export const remove = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new VespaService().remove(params, pinsSettingsList, context);
