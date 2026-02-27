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
    const { kafkaClient = context.privates.CLIENT_KAFKA, topic, messages } = params;
    const kafkaInstance = await executePinsList(kafkaClient, context, `${context.__PATH__}.kafkaClient`);

    await producer.connect();
    await producer.send({ topic, messages });
    await producer.disconnect();
  }
}
