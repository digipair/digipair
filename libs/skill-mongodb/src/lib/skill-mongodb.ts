/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings, executePinsList } from '@digipair/engine';
import { MongoClient, ObjectId } from 'mongodb';

class MongoDBService {
  async database(params: any, _pins: PinsSettings[], context: any) {
    const {
      url = context.privates.MONGODB_URL ?? params?.MONGODB_URL ?? process.env['MONGODB_URL'],
      database = context.privates.MONGODB_DATABASE ??
        params?.MONGODB_DATABASE ??
        process.env['MONGODB_DATABASE'],
    } = params;
    const client = new MongoClient(url);
    await client.connect();

    return { client, database: client.db(database) };
  }

  async find(params: any, _pins: PinsSettings[], context: any) {
    const { client = context.privates.CLIENT_MONGODB, options = {}, collection, filter } = params;
    const clientInstance = await executePinsList(client, context);
    const instance = clientInstance.database.collection(collection);
    const values = await instance.find(filter, options).toArray();

    await clientInstance.client.close();

    return values;
  }

  async findOne(params: any, _pins: PinsSettings[], context: any) {
    const { client = context.privates.CLIENT_MONGODB, options = {}, collection, filter } = params;
    const clientInstance = await executePinsList(client, context);
    const instance = clientInstance.database.collection(collection);
    const value = await instance.findOne(filter, options);

    await clientInstance.client.close();

    return value;
  }

  async findById(params: any, _pins: PinsSettings[], context: any) {
    const { client = context.privates.CLIENT_MONGODB, options = {}, collection, id } = params;
    const clientInstance = await executePinsList(client, context);
    const instance = clientInstance.database.collection(collection);
    const value = await instance.findOne({ _id: new ObjectId(id as string) }, options);

    await clientInstance.client.close();

    return value;
  }

  async insertOne(params: any, _pins: PinsSettings[], context: any) {
    const { client = context.privates.CLIENT_MONGODB, options = {}, collection, document } = params;
    const clientInstance = await executePinsList(client, context);
    const instance = clientInstance.database.collection(collection);
    const value = await instance.insertOne(document, options);

    await clientInstance.client.close();

    return value;
  }

  async updateOne(params: any, _pins: PinsSettings[], context: any) {
    const {
      client = context.privates.CLIENT_MONGODB,
      options = {},
      collection,
      filter,
      update,
    } = params;
    const clientInstance = await executePinsList(client, context);
    const instance = clientInstance.database.collection(collection);
    const value = await instance.updateOne(filter, update, options);

    await clientInstance.client.close();

    return value;
  }

  async updateById(params: any, _pins: PinsSettings[], context: any) {
    const {
      client = context.privates.CLIENT_MONGODB,
      options = {},
      id,
      collection,
      update,
    } = params;
    const clientInstance = await executePinsList(client, context);
    const instance = clientInstance.database.collection(collection);
    const value = await instance.updateOne({ _id: new ObjectId(id as string) }, update, options);

    await clientInstance.client.close();

    return value;
  }
}

export const database = (params: any, pins: PinsSettings[], context: any) =>
  new MongoDBService().database(params, pins, context);
export const find = (params: any, pins: PinsSettings[], context: any) =>
  new MongoDBService().find(params, pins, context);
export const findOne = (params: any, pins: PinsSettings[], context: any) =>
  new MongoDBService().findOne(params, pins, context);
export const findById = (params: any, pins: PinsSettings[], context: any) =>
  new MongoDBService().findById(params, pins, context);
export const insertOne = (params: any, pins: PinsSettings[], context: any) =>
  new MongoDBService().insertOne(params, pins, context);
export const updateOne = (params: any, pins: PinsSettings[], context: any) =>
  new MongoDBService().updateOne(params, pins, context);
export const updateById = (params: any, pins: PinsSettings[], context: any) =>
  new MongoDBService().updateById(params, pins, context);
