import { skillTool } from './skill-tool';

describe('skillTool', () => {
  it('should tool', () => {
    expect(skillTool()).toEqual('skill-tool');
  });
});
