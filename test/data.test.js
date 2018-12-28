const merge = require('lodash.merge');
const blizzard = require('./initialize');

const args = {
  headers: {
    Authorization: 'Bearer token',
  },
  params: {
    locale: 'en_US',
    namespace: 'dynamic-us',
  },
};

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
        expect.objectContaining(
          merge({}, args, {
            params: {
              namespace: 'dynamic-us',
            },
          }),
        ),
      );
    });

    test('should request a single connected realm', () => {
      blizzard.data.connectedRealm({ realm: 11, origin: 'us' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/connected-realm/11',
        expect.objectContaining(
          merge({}, args, {
            params: {
              namespace: 'dynamic-us',
            },
          }),
        ),
      );
    });
  });

  describe('#keystoneAffix()', () => {
    test('should request the keystone affix index', () => {
      blizzard.data.keystoneAffix();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/keystone-affix/index',
        expect.objectContaining(
          merge({}, args, {
            params: {
              namespace: 'static-us',
            },
          }),
        ),
      );
    });

    test('should request a keystone affix by ID', () => {
      blizzard.data.keystoneAffix({ id: 11 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/keystone-affix/11',
        expect.objectContaining(
          merge({}, args, {
            params: {
              namespace: 'static-us',
            },
          }),
        ),
      );
    });
  });

  describe('#mythicRaidLeaderboard()', () => {
    test('should request a mythic raid leaderboard by raid and faction', () => {
      blizzard.data.mythicRaidLeaderboard({ raid: 'uldir', faction: 'alliance' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/leaderboard/hall-of-fame/uldir/alliance',
        expect.objectContaining(
          merge({}, args, {
            params: {
              namespace: 'dynamic-us',
            },
          }),
        ),
      );
    });
  });

  // mythicDungeonKeystone
  describe('#mythicDungeonKeystone()', () => {
    test('should request the mythic keystone resource index', () => {
      blizzard.data.mythicDungeonKeystone();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/mythic-keystone/index',
        expect.objectContaining(
          merge({}, args, {
            params: {
              namespace: 'dynamic-us',
            },
          }),
        ),
      );
    });

    test('should request the mythic keystone dungeon index', () => {
      blizzard.data.mythicDungeonKeystone('dungeon');

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/mythic-keystone/dungeon/index',
        expect.objectContaining(
          merge({}, args, {
            params: {
              namespace: 'dynamic-us',
            },
          }),
        ),
      );
    });

    test('should request a mythic keystone dungeon by ID', () => {
      blizzard.data.mythicDungeonKeystone('dungeon', { id: 353 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/mythic-keystone/dungeon/353',
        expect.objectContaining(
          merge({}, args, {
            params: {
              namespace: 'dynamic-us',
            },
          }),
        ),
      );
    });
  });

  describe('#mythicKeystoneLeaderboard()', () => {
    test('should request the mythic keystone leaderboard index by realm', () => {
      blizzard.data.mythicKeystoneLeaderboard({ realm: 11 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/connected-realm/11/mythic-leaderboard/index',
        expect.objectContaining(
          merge({}, args, {
            params: {
              namespace: 'dynamic-us',
            },
          }),
        ),
      );
    });

    test('should request a mythic keystone leaderboard by realm and dungeon', () => {
      blizzard.data.mythicKeystoneLeaderboard({ realm: 11, dungeon: 200 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/connected-realm/11/mythic-leaderboard/200',
        expect.objectContaining(
          merge({}, args, {
            params: {
              namespace: 'dynamic-us',
            },
          }),
        ),
      );
    });

    test('should request a mythic keystone leaderboard by realm and dungeon and period', () => {
      blizzard.data.mythicKeystoneLeaderboard({ realm: 11, dungeon: 200, period: 606 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/connected-realm/11/mythic-leaderboard/200/period/606',
        expect.objectContaining(
          merge({}, args, {
            params: {
              namespace: 'dynamic-us',
            },
          }),
        ),
      );
    });
  });

  describe('#playableClass()', () => {
    test('should request the playable class index', () => {
      blizzard.data.playableClass();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/playable-class/index',
        expect.objectContaining(
          merge({}, args, {
            params: {
              namespace: 'static-us',
            },
          }),
        ),
      );
    });

    test('should request a playable class by ID', () => {
      blizzard.data.playableClass({ id: 7 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/playable-class/7',
        expect.objectContaining(
          merge({}, args, {
            params: {
              namespace: 'static-us',
            },
          }),
        ),
      );
    });
  });

  describe('#pvpTalentSlots()', () => {
    test('should request the PVP talent slots by class ID', () => {
      blizzard.data.pvpTalentSlots({ id: 7 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/playable-class/7/pvp-talent-slots',
        expect.objectContaining(
          merge({}, args, {
            params: {
              namespace: 'static-us',
            },
          }),
        ),
      );
    });
  });

  describe('#playableSpecialization()', () => {
    test('should request the playable specialization index', () => {
      blizzard.data.playableSpecialization();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/playable-specialization/index',
        expect.objectContaining(
          merge({}, args, {
            params: {
              namespace: 'static-us',
            },
          }),
        ),
      );
    });

    test('should request a playable specialization by ID', () => {
      blizzard.data.playableSpecialization({ id: 262 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/playable-specialization/262',
        expect.objectContaining(
          merge({}, args, {
            params: {
              namespace: 'static-us',
            },
          }),
        ),
      );
    });
  });

  // powerType
  describe('#powerType()', () => {
    test('should request the power type index', () => {
      blizzard.data.powerType();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/power-type/index',
        expect.objectContaining(
          merge({}, args, {
            params: {
              namespace: 'static-us',
            },
          }),
        ),
      );
    });

    test('should request a power type by ID', () => {
      blizzard.data.powerType({ id: 0 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/power-type/0',
        expect.objectContaining(
          merge({}, args, {
            params: {
              namespace: 'static-us',
            },
          }),
        ),
      );
    });
  });

  // playableRace
  describe('#playableRace()', () => {
    test('should request the playable race index', () => {
      blizzard.data.playableRace();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/race/index',
        expect.objectContaining(
          merge({}, args, {
            params: {
              namespace: 'static-us',
            },
          }),
        ),
      );
    });

    test('should request a playable race by ID', () => {
      blizzard.data.playableRace({ id: 2 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/race/2',
        expect.objectContaining(
          merge({}, args, {
            params: {
              namespace: 'static-us',
            },
          }),
        ),
      );
    });
  });

  describe('#realm()', () => {
    test('should request the realm index', () => {
      blizzard.data.realm();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/realm/index',
        expect.objectContaining(
          merge({}, args, {
            params: {
              namespace: 'dynamic-us',
            },
          }),
        ),
      );
    });

    test('should request a realm by slug', () => {
      blizzard.data.realm({ realm: 'tichondrius' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/realm/tichondrius',
        expect.objectContaining(
          merge({}, args, {
            params: {
              namespace: 'dynamic-us',
            },
          }),
        ),
      );
    });
  });

  describe('#region()', () => {
    test('should request the region index', () => {
      blizzard.data.region();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/region/index',
        expect.objectContaining(
          merge({}, args, {
            params: {
              namespace: 'dynamic-us',
            },
          }),
        ),
      );
    });

    test('should request a region by slug', () => {
      blizzard.data.region({ id: 1 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/region/1',
        expect.objectContaining(
          merge({}, args, {
            params: {
              namespace: 'dynamic-us',
            },
          }),
        ),
      );
    });
  });

  describe('#token()', () => {
    test('should request game token data', () => {
      blizzard.data.token();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/token/',
        expect.objectContaining(
          merge({}, args, {
            params: {
              namespace: 'dynamic-us',
            },
          }),
        ),
      );
    });
  });
});
