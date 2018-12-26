const blizzard = require('./initialize');

describe('lib/data.js', () => {
  beforeEach(() => {
    blizzard.axios.get.mockClear();
  });

  test('should have the correct API methods', () => {
    expect(blizzard.data).toEqual(
      expect.objectContaining({
        credentials: expect.any(Function),
        validate: expect.any(Function),
        connectedRealm: expect.any(Function),
        keystoneAffix: expect.any(Function),
        mythicRaidLeaderboard: expect.any(Function),
        mythicDungeonKeystone: expect.any(Function),
        mythicKeystoneLeaderboard: expect.any(Function),
        playableClass: expect.any(Function),
        pvpTalentSlots: expect.any(Function),
        playableSpecialization: expect.any(Function),
        powerType: expect.any(Function),
        playableRace: expect.any(Function),
        realm: expect.any(Function),
        region: expect.any(Function),
        token: expect.any(Function),
      }),
    );
  });

  describe('#credentials()', () => {
    test('should request an application access token with default parameters', () => {
      blizzard.data.credentials();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.battle.net/oauth/token',
        expect.objectContaining({
          params: {
            grant_type: 'client_credentials',
          },
          auth: {
            username: 'key',
            password: 'secret',
          },
        }),
      );
    });

    test('should request an application access token with override parameters', () => {
      blizzard.data.credentials({
        origin: 'eu',
        key: 'yek',
        secret: 'terces',
      });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://eu.battle.net/oauth/token',
        expect.objectContaining({
          params: {
            grant_type: 'client_credentials',
          },
          auth: {
            username: 'yek',
            password: 'terces',
          },
        }),
      );
    });
  });

  describe('#validate()', () => {
    test('should check an application access token', () => {
      blizzard.data.validate({ origin: 'us', token: 'test' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.battle.net/oauth/check_token',
        expect.objectContaining({
          params: { token: 'test' },
        }),
      );
    });
  });

  describe('#connectedRealm()', () => {
    test('should request the connected realm index', () => {
      blizzard.data.connectedRealm({ origin: 'us' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/connected-realm/index',
        expect.any(Object),
      );
    });

    test('should request a single connected realm', () => {
      blizzard.data.connectedRealm({ realm: 11, origin: 'us' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/connected-realm/11',
        expect.any(Object),
      );
    });
  });

  describe('#mythicKeystoneLeaderboard()', () => {
    test('should request the mythic leaderboard index', () => {
      blizzard.data.mythicKeystoneLeaderboard({ realmID: 11, origin: 'us' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/connected-realm/11/mythic-leaderboard/index',
        expect.any(Object),
      );
    });

    test('should request a mythic leaderboard period', () => {
      blizzard.data.mythicKeystoneLeaderboard({ realmID: 11, dungeonID: 200, periodID: 606, origin: 'us' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/connected-realm/11/mythic-leaderboard/200/period/606',
        expect.any(Object),
      );
    });
  });

  describe('#realm()', () => {
    test('should request the realm index', () => {
      blizzard.data.realm({ origin: 'us' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/realm/index',
        expect.any(Object),
      );
    });

    test('should request a single realm', () => {
      blizzard.data.realm({ realm: 'tichondrius', origin: 'us' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/realm/tichondrius',
        expect.any(Object),
      );
    });
  });

  describe('#region()', () => {
    test('should request the region index', () => {
      blizzard.data.region({ origin: 'us' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/region/index',
        expect.any(Object),
      );
    });

    test('should request a single region', () => {
      blizzard.data.region({ regionID: 1, origin: 'us' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/region/1',
        expect.any(Object),
      );
    });
  });

  describe('#token()', () => {
    test('should request token data', () => {
      blizzard.data.token({ origin: 'us' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/token/',
        expect.any(Object),
      );
    });
  });
});
