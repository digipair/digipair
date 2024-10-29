import { skillSseWeb } from './skill-client-sse';

describe('skillSseWeb', () => {
  it('should work', () => {
    expect(skillSseWeb()).toEqual('skill-client-sse');
  });
});
