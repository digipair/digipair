import { boosts } from './skill-common';

describe('boosts', () => {
  it('should return an array of boosts', async () => {
    const params = {};
    const pinsSettingsList = [] as any[];
    const context = { request: { digipair: 'example' } };

    const result = await boosts(params, pinsSettingsList, context);

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    result.forEach(boost => {
      expect(boost).toHaveProperty('name');
      expect(boost).toHaveProperty('description');
      expect(boost).toHaveProperty('metadata');
    });
  });
});
