import { skillWebsocket } from './skill-client-websocket';

describe('skillWebsocket', () => {
  it('should work', () => {
    expect(skillWebsocket()).toEqual('skill-client-websocket');
  });
});
