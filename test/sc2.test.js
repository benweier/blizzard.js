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
        ladder: expect.any(Function),
        static: expect.any(Function),
        metadata: expect.any(Function),
        profile: expect.any(Function),
        profileLadder: expect.any(Function),
        player: expect.any(Function),
        league: expect.any(Function),
        legacy: expect.objectContaining({
          profile: expect.any(Function),
          profileLadders: expect.any(Function),
          profileMatches: expect.any(Function),
          ladder: expect.any(Function),
          achievements: expect.any(Function),
          rewards: expect.any(Function),
        }),
      }),
    );
  });

  describe('#static()', () => {
    test('should request static data by region ID', () => {
      blizzard.sc2.static({ region: 1 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/sc2/static/profile/1',
        expect.objectContaining(args),
      );
    });
  });

  describe('#metadata()', () => {
    test('should request metadata by region and realm and profile', () => {
      blizzard.sc2.metadata({ profile: 2137104, realm: 1, region: 1 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/sc2/metadata/profile/1/1/2137104',
        expect.objectContaining(args),
      );
    });
  });

  describe('#ladder()', () => {
    test('should request a season ladder by ID', () => {
      blizzard.sc2.ladder({ region: 1 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/sc2/ladder/season/1',
        expect.objectContaining(args),
      );
    });

    test('should request a grandmaster ladder by ID', () => {
      blizzard.sc2.ladder({ ladder: 'grandmaster', region: 1 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/sc2/ladder/grandmaster/1',
        expect.objectContaining(args),
      );
    });
  });

  describe('#profile()', () => {
    test('should request a player profile', () => {
      blizzard.sc2.profile({ profile: 2137104, realm: 1, region: 1 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        `https://us.api.blizzard.com/sc2/profile/1/1/2137104`,
        expect.objectContaining(args),
      );
    });
  });

  describe('#profileLadder()', () => {
    test('should request a profile ladder summary', () => {
      blizzard.sc2.profileLadder({ profile: 194163, realm: 1, region: 1 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/sc2/profile/1/1/194163/ladder/summary',
        expect.objectContaining(args),
      );
    });

    test('should request a profile ladder by ID', () => {
      blizzard.sc2.profileLadder({ profile: 194163, realm: 1, region: 1, ladder: 1 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/sc2/profile/1/1/194163/ladder/1',
        expect.objectContaining(args),
      );
    });
  });

  describe('#player()', () => {
    test('should request a player account by ID', () => {
      blizzard.sc2.player({ id: 2137104 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/sc2/player/2137104',
        expect.objectContaining(args),
      );
    });
  });

  describe('#league()', () => {
    test('should request a league by season and queue and team and league', () => {
      blizzard.sc2.league({ season: 37, queue: 201, team: 0, league: 6 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/sc2/league/37/201/0/6',
        expect.objectContaining(args),
      );
    });
  });

  describe('#legacy.profile()', () => {
    test('should request a legacy profile by region and realm and profile', () => {
      blizzard.sc2.legacy.profile({ profile: 2137104, region: 1, realm: 1 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/sc2/legacy/profile/1/1/2137104',
        expect.objectContaining(args),
      );
    });
  });

  describe('#legacy.profileLadders()', () => {
    test('should request legacy profile ladders by region and realm and profile', () => {
      blizzard.sc2.legacy.profileLadders({ profile: 2137104, region: 1, realm: 1 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/sc2/legacy/profile/1/1/2137104/ladders',
        expect.objectContaining(args),
      );
    });
  });

  describe('#legacy.profileMatches()', () => {
    test('should request legacy profile matches by region and realm and profile', () => {
      blizzard.sc2.legacy.profileMatches({ profile: 2137104, region: 1, realm: 1 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/sc2/legacy/profile/1/1/2137104/matches',
        expect.objectContaining(args),
      );
    });
  });

  describe('#legacy.ladder()', () => {
    test('should request a legacy ladder by ladder and region', () => {
      blizzard.sc2.legacy.ladder({ region: 1, ladder: 11 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/sc2/legacy/ladder/1/11',
        expect.objectContaining(args),
      );
    });
  });

  describe('#legacy.achievements()', () => {
    test('should request a legacy achievements by region ID', () => {
      blizzard.sc2.legacy.achievements({ region: 1 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/sc2/legacy/data/achievements/1',
        expect.objectContaining(args),
      );
    });
  });

  describe('#legacy.rewards()', () => {
    test('should request a legacy rewards by region ID', () => {
      blizzard.sc2.legacy.rewards({ region: 1 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/sc2/legacy/data/rewards/1',
        expect.objectContaining(args),
      );
    });
  });
});
