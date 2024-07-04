import { skillCron } from './skill-cron';

describe('skillCron', () => {
  it('should work', () => {
    expect(skillCron()).toEqual('skill-cron');
  });
});
