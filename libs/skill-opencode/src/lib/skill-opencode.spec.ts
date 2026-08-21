import { runPrompt } from './skill-opencode';

describe('skillOpencode', () => {
  it('should expose runPrompt', () => {
    expect(typeof runPrompt).toEqual('function');
  });
});
