import { skillKafka } from './skill-rabbitmq.js';

describe('skillRabbitMq', () => {
  it('should work', () => {
    expect(skillRabbitMq()).toEqual('skill-rabbitmq');
  });
});
