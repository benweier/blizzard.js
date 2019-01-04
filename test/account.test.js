const blizzard = require('./initialize');

const args = {
  headers: {
    Authorization: 'Bearer token',
    'User-Agent': expect.stringMatching(/Node.js\/\d{1,2}.\d{1,2}.\d{1,2} Blizzard\.js\/\d{1,2}.\d{1,2}.\d{1,2}/),
  },
  params: {
    locale: 'en_US',
  },
};

describe('lib/account.js', () => {
  beforeEach(() => {
    blizzard.axios.get.mockClear();
  });

  test('should have all API methods', () => {
    expect(blizzard.account).toEqual(
      expect.objectContaining({
        userInfo: expect.any(Function),
      }),
    );
  });

  describe('#userInfo()', () => {
    test('should be called with the correct parameters', () => {
      blizzard.account.userInfo();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.battle.net/oauth/userinfo',
        expect.objectContaining(args),
      );
    });
  });
});
