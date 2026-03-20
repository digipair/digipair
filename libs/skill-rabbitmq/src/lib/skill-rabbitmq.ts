/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { executePinsList, PinsSettings } from '@digipair/engine';

const amqplib = require('amqplib');

class RabbitMqService {
  async rabbit(params: any, _pins: PinsSettings[], context: any) {
    const {
      url = context.privates.RABBITMQ_URL ?? params?.RABBITMQ_URL ?? process.env['RABBITMQ_URL'],
    } = params;

    return await amqplib.connect(url);
  }

  async produce(params: any, _pins: PinsSettings[], context: any): Promise<any> {
    const { client = context.privates.CLIENT_RABBITMQ, queue, message } = params;

    const connection = await executePinsList(client, context, `${context.__PATH__}.client`);
    const channel = await connection.createChannel();

    channel.sendToQueue(queue, Buffer.from(message));

    channel.close();
    connection.close();
  }

  async consume(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.privates.CLIENT_RABBITMQ, execute, queue } = params;

    const connection = await executePinsList(client, context, `${context.__PATH__}.client`);
    const channel = await connection.createChannel();

    channel.consume(queue, async (message) => {
      if (message !== null) {
        await executePinsList(execute, { ...context, message }, `${context.__PATH__}.execute`);
        channel.ack(message);
      }
    });

    return { connection, channel };
  }

  async consumerDisconnect(params: any, _pinsSettingsList: PinsSettings[], context: any) {
    const { connection, channel } = params;

    channel.close();
    connection.close();
  }
}

export const rabbit = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new RabbitMqService().rabbit(params, pinsSettingsList, context);

export const produce = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new RabbitMqService().produce(params, pinsSettingsList, context);

export const consume = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new RabbitMqService().consume(params, pinsSettingsList, context);

export const consumerDisconnect = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new RabbitMqService().consumerDisconnect(params, pinsSettingsList, context);
