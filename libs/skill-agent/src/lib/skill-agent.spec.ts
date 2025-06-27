import { skillTool } from './skill-agent';

describe('skillTool', () => {
  it('should tool', () => {
    expect(skillTool()).toEqual('skill-agent');
  });
});
