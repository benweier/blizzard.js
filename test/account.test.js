const blizzard = require('./initialize');

const args = {
  headers: {
    Authorization: 'Bearer token',
  },
  params: {
    locale: 'en_US',
  },
};

describe('lib/account.js', () => {
  beforeEach(() => {
    blizzard.axios.get.mockClear();
  });

  test('should have a API methods', () => {
    expect(blizzard.account).toEqual(
      expect.objectContaining({
        user: expect.any(Function),
        wow: expect.any(Function),
        sc2: expect.any(Function),
      }),
    );
  });

  describe('#user()', () => {
    test('should be called with the correct parameters', () => {
      blizzard.account.user();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/account/user',
        expect.objectContaining(args),
      );
    });
  });

  describe('#wow()', () => {
    test('should be called with the correct parameters', () => {
      blizzard.account.wow();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.battle.net/wow/user/characters',
        expect.objectContaining(args),
      );
    });
  });

  describe('#sc2()', () => {
    test('should be called with the correct parameters', () => {
      blizzard.account.sc2();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/sc2/profile/user',
        expect.objectContaining(args),
      );
    });
  });
});
