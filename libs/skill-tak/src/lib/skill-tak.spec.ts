import * as skillTak from './skill-tak.js';

describe('skillTak', () => {
  it('should expose TAK capabilities', () => {
    expect(typeof skillTak.enroll).toBe('function');
    expect(typeof skillTak.tak).toBe('function');
    expect(typeof skillTak.send).toBe('function');
    expect(typeof skillTak.listen).toBe('function');
    expect(typeof skillTak.disconnect).toBe('function');
    expect(typeof skillTak.api).toBe('function');
    expect(typeof skillTak.request).toBe('function');
  });
});
