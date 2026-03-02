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
    const producer = kafkaInstance.producer();

    await producer.connect();
    await producer.send({ topic, messages });

    await producer.disconnect();
  }

  // Est-ce que cette partie la (sauf l'intérieur du run) il faut la traiter comme les reqûetes https dans le controller + skill-process?
  async consume(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { client = context.privates.CLIENT_KAFKA, execute, groupId, topic } = params;
    const kafkaInstance = await executePinsList(client, context, `${context.__PATH__}.client`);
    const consumer = kafkaInstance.consumer({ groupId });

    await consumer.connect();
    await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        // Comment on rend accessible par l'utilisateur du studio les paramètres ci-dessus?
        await executePinsList(execute, context, `${context.__PATH__}.execute`);
      },
    });
  }
}
