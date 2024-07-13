import { skillFactory } from './skill-factory';

describe('skillFactory', () => {
  it('should work', () => {
    expect(skillFactory()).toEqual('skill-factory');
  });
});
