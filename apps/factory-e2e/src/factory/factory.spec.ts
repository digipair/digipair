import axios from 'axios';

describe('POST /common/boosts', () => {
  it('should return a message', async () => {
    const res = await axios.post(`/common/boosts`);

    expect(res.status).toBe(200);
    expect(res.data).toEqual({ message: 'Hello API' });
  });
});
