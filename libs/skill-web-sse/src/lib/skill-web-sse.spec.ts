import { skillSseWeb } from './skill-web-sse';

describe('skillSseWeb', () => {
  it('should work', () => {
    expect(skillSseWeb()).toEqual('skill-web-sse');
  });
});
