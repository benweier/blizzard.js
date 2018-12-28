const blizzard = require('./initialize');

const args = {
  headers: {
    Authorization: 'Bearer token',
  },
  params: {
    locale: 'en_US',
  },
};

describe('lib/sc2.js', () => {
  beforeEach(() => {
    blizzard.axios.get.mockClear();
  });

  test('should have the correct API methods', () => {
    expect(blizzard.sc2).toEqual(
      expect.objectContaining({
        data: expect.any(Function),
        ladder: expect.any(Function),
        profile: expect.any(Function),
      }),
    );
  });

  describe('#data()', () => {
    test('should request achievements data', () => {
      blizzard.sc2.data('achievements');

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/sc2/data/achievements',
        expect.objectContaining(args),
      );
    });

    test('should request rewards data', () => {
      blizzard.sc2.data('rewards');

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/sc2/data/rewards',
        expect.objectContaining(args),
      );
    });
  });

  describe('#ladder()', () => {
    test('should request a ladder by ID', () => {
      blizzard.sc2.ladder({ id: 194163 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/sc2/ladder/194163',
        expect.objectContaining(args),
      );
    });
  });

  describe('#profile()', () => {
    test('should request a player profile', () => {
      blizzard.sc2.profile('profile', { id: 2137104, name: 'skt' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/sc2/profile/2137104/1/skt/',
        expect.objectContaining(args),
      );
    });

    test('should request a player ladder placements', () => {
      blizzard.sc2.profile('ladders', { id: 2137104, name: 'skt' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/sc2/profile/2137104/1/skt/ladders',
        expect.objectContaining(args),
      );
    });

    test('should request a player match history', () => {
      blizzard.sc2.profile('matches', { id: 2137104, name: 'skt' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/sc2/profile/2137104/1/skt/matches',
        expect.objectContaining(args),
      );
    });
  });
});
