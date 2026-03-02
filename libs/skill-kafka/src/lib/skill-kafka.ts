/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings } from '@digipair/engine';

const { Kafka } = require('kafkajs');

class KafkaService {
  async kafka(params: any, _pins: PinsSettings[], context: any) {
    const {
      brokers = context.privates.KAFKA_BROKERS ?? params?.KAFKA_BROKERS ?? process.env['KAFKA_BROKERS'],
      clientId = context.privates.KAFKA_CLIENT_ID ??
        params?.KAFKA_CLIENT_ID ??
        process.env['KAFKA_CLIENT_ID'],
    } = params;

    return new Kafka({ clientId, brokers });
  }

  async produce(params: any, _pins: PinsSettings[], context: any) {
    const { client = context.privates.CLIENT_KAFKA, topic, messages } = params;
    const kafkaInstance = await executePinsList(client, context, `${context.__PATH__}.client`);

    await producer.connect();
    await producer.send({ topic, messages });v
    await producer.disconnect();
  }
}
