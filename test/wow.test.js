const merge = require('lodash.merge');
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

describe('lib/wow.js', () => {
  beforeEach(() => {
    blizzard.axios.get.mockClear();
  });

  test('should have the correct API methods', () => {
    expect(blizzard.wow).toEqual(
      expect.objectContaining({
        achievement: expect.any(Function),
        auction: expect.any(Function),
        boss: expect.any(Function),
        challenge: expect.any(Function),
        character: expect.any(Function),
        data: expect.any(Function),
        battlegroups: expect.any(Function),
        characterRaces: expect.any(Function),
        characterClasses: expect.any(Function),
        characterAchievements: expect.any(Function),
        guildRewards: expect.any(Function),
        guildPerks: expect.any(Function),
        guildAchievements: expect.any(Function),
        itemClasses: expect.any(Function),
        talents: expect.any(Function),
        petTypes: expect.any(Function),
        guild: expect.any(Function),
        item: expect.any(Function),
        mount: expect.any(Function),
        pet: expect.any(Function),
        petAbility: expect.any(Function),
        petSpecies: expect.any(Function),
        petStats: expect.any(Function),
        pvp: expect.any(Function),
        quest: expect.any(Function),
        realmStatus: expect.any(Function),
        recipe: expect.any(Function),
        spell: expect.any(Function),
        userCharacters: expect.any(Function),
        zone: expect.any(Function),
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
        itemData: expect.any(Function),
      }),
    );
  });

  describe('#achievement()', () => {
    test('should request an achievement by ID', () => {
      blizzard.wow.achievement({ id: 2144 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/achievement/2144',
        expect.objectContaining(args),
      );
    });
  });

  describe('#auction()', () => {
    test('should request auction data by realm', () => {
      blizzard.wow.auction({ realm: 'medivh' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/auction/data/medivh',
        expect.objectContaining(args),
      );
    });
  });

  describe('#boss()', () => {
    test('should request the boss index', () => {
      blizzard.wow.boss();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/boss/',
        expect.objectContaining(args),
      );
    });

    test('should request a single boss by ID', () => {
      blizzard.wow.boss({ id: 24664 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/boss/24664',
        expect.objectContaining(args),
      );
    });
  });

  describe('#challenge()', () => {
    test('should request challenge data', () => {
      blizzard.wow.challenge();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/challenge/region',
        expect.objectContaining(args),
      );
    });

    test('should request challenge data by realm', () => {
      blizzard.wow.challenge({ realm: 'medivh' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/challenge/medivh',
        expect.objectContaining(args),
      );
    });
  });

  describe('#character()', () => {
    test('should request a character profile', () => {
      blizzard.wow.character([], { origin: 'us', realm: 'amanthul', name: 'charni' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/character/amanthul/charni',
        expect.objectContaining(
          merge({}, args, {
            params: {
              fields: 'profile',
            },
          }),
        ),
      );
    });

    test('should request character achievements', () => {
      blizzard.wow.character('achievements', { origin: 'us', realm: 'amanthul', name: 'charni' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/character/amanthul/charni',
        expect.objectContaining(
          merge({}, args, {
            params: {
              fields: 'achievements',
            },
          }),
        ),
      );
    });

    test('should request character pets and petSlots', () => {
      blizzard.wow.character(['pets', 'petSlots'], { origin: 'us', realm: 'amanthul', name: 'charni' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/character/amanthul/charni',
        expect.objectContaining(
          merge({}, args, {
            params: {
              fields: 'pets,petSlots',
            },
          }),
        ),
      );
    });
  });

  describe('#data()', () => {
    test('should request battlegroups', () => {
      blizzard.wow.data('battlegroups');

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/data/battlegroups/',
        expect.objectContaining(args),
      );
    });

    test('should request character achievements', () => {
      blizzard.wow.data('character-achievements');

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/data/character/achievements',
        expect.objectContaining(args),
      );
    });
  });

  describe('#battlegroups()', () => {
    test('should request battlegroups', () => {
      blizzard.wow.battlegroups();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/data/battlegroups/',
        expect.objectContaining(args),
      );
    });
  });

  describe('#characterRaces()', () => {
    test('should request character races', () => {
      blizzard.wow.characterRaces();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/data/character/races',
        expect.objectContaining(args),
      );
    });
  });

  describe('#characterClasses()', () => {
    test('should request character classes', () => {
      blizzard.wow.characterClasses();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/data/character/classes',
        expect.objectContaining(args),
      );
    });
  });

  describe('#characterAchievements()', () => {
    test('should request character achievements', () => {
      blizzard.wow.characterAchievements();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/data/character/achievements',
        expect.objectContaining(args),
      );
    });
  });

  describe('#guildRewards()', () => {
    test('should request guild rewards', () => {
      blizzard.wow.guildRewards();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/data/guild/rewards',
        expect.objectContaining(args),
      );
    });
  });

  describe('#guildPerks()', () => {
    test('should request guild perks', () => {
      blizzard.wow.guildPerks();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/data/guild/perks',
        expect.objectContaining(args),
      );
    });
  });

  describe('#guildAchievements()', () => {
    test('should request guild achievements', () => {
      blizzard.wow.guildAchievements();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/data/guild/achievements',
        expect.objectContaining(args),
      );
    });
  });

  describe('#itemClasses()', () => {
    test('should request item classes', () => {
      blizzard.wow.itemClasses();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/data/item/classes',
        expect.objectContaining(args),
      );
    });
  });

  describe('#talents()', () => {
    test('should request talents', () => {
      blizzard.wow.talents();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/data/talents',
        expect.objectContaining(args),
      );
    });
  });

  describe('#petTypes()', () => {
    test('should request pet types', () => {
      blizzard.wow.petTypes();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/data/pet/types',
        expect.objectContaining(args),
      );
    });
  });

  describe('#guild()', () => {
    test('should request a guild profile', () => {
      blizzard.wow.guild([], { origin: 'us', realm: 'amanthul', name: 'blackwolf' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/guild/amanthul/blackwolf',
        expect.objectContaining(
          merge({}, args, {
            params: {
              fields: 'profile',
            },
          }),
        ),
      );
    });

    test('should request guild achievements and members', () => {
      blizzard.wow.guild(['achievements', 'members'], { origin: 'us', realm: 'amanthul', name: 'blackwolf' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/guild/amanthul/blackwolf',
        expect.objectContaining(
          merge({}, args, {
            params: {
              fields: 'achievements,members',
            },
          }),
        ),
      );
    });
  });

  describe('#item()', () => {
    test('should request an item by ID', () => {
      blizzard.wow.item({ id: 18803 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/item/18803',
        expect.objectContaining(args),
      );
    });

    test('should request an item with a specific bonus', () => {
      blizzard.wow.item({ id: 18803, bonuses: 1 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/item/18803',
        expect.objectContaining(
          merge({}, args, {
            params: {
              bl: '1',
            },
          }),
        ),
      );
    });

    test('should request an item with specific bonuses', () => {
      blizzard.wow.item({ id: 18803, bonuses: [1, 2, 3] });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/item/18803',
        expect.objectContaining(
          merge({}, args, {
            params: {
              bl: '1,2,3',
            },
          }),
        ),
      );
    });

    test('should request an item set by ID', () => {
      blizzard.wow.item({ set: true, id: 1060 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/item/set/1060',
        expect.objectContaining(args),
      );
    });
  });

  describe('#mount()', () => {
    test('should request the mount index', () => {
      blizzard.wow.mount();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/mount/',
        expect.objectContaining(args),
      );
    });
  });

  describe('#pet()', () => {
    test('should request the pet index', () => {
      blizzard.wow.pet();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/pet/',
        expect.objectContaining(args),
      );
    });

    test('should request a pet ability by ID', () => {
      blizzard.wow.pet('ability', { id: 640 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/pet/ability/640',
        expect.objectContaining(args),
      );
    });

    test('should request a pet species by ID', () => {
      blizzard.wow.pet('species', { id: 258 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/pet/species/258',
        expect.objectContaining(args),
      );
    });

    test('should request pet stats', () => {
      blizzard.wow.pet('stats', { id: 258, level: 25, breed: 4, quality: 4 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/pet/stats/258',
        expect.objectContaining(
          merge({}, args, {
            params: {
              breedId: 4,
              level: 25,
              qualityId: 4,
            },
          }),
        ),
      );
    });
  });

  describe('#petAbility()', () => {
    test('should request a pet ability by ID', () => {
      blizzard.wow.petAbility({ id: 640 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/pet/ability/640',
        expect.objectContaining(args),
      );
    });
  });

  describe('#petSpecies()', () => {
    test('should request a pet species by ID', () => {
      blizzard.wow.petSpecies({ id: 258 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/pet/species/258',
        expect.objectContaining(args),
      );
    });
  });

  describe('#petStats()', () => {
    test('should request pet stats', () => {
      blizzard.wow.petStats({ species: 258, level: 25, breed: 4, quality: 4 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/pet/stats/258',
        expect.objectContaining(
          merge({}, args, {
            params: {
              breedId: 4,
              level: 25,
              qualityId: 4,
            },
          }),
        ),
      );
    });
  });

  describe('#pvp()', () => {
    test('should request a pvp leaderboard by bracket', () => {
      blizzard.wow.pvp({ bracket: '3v3' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/leaderboard/3v3',
        expect.objectContaining(args),
      );
    });
  });

  describe('#quest()', () => {
    test('should request a quest by ID', () => {
      blizzard.wow.quest({ id: 13146 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/quest/13146',
        expect.objectContaining(args),
      );
    });
  });

  describe('#realmStatus()', () => {
    test('should request realm status', () => {
      blizzard.wow.realmStatus();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/realm/status',
        expect.objectContaining(args),
      );
    });

    test('should request a multiple realms status by slug', () => {
      blizzard.wow.realmStatus({ realms: ['blackrock', 'proudmoore'] });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/realm/status',
        expect.objectContaining(
          merge({}, args, {
            params: {
              realms: 'blackrock,proudmoore',
            },
          }),
        ),
      );
    });
  });

  describe('#recipe()', () => {
    test('should request a recipe by ID', () => {
      blizzard.wow.recipe({ id: 33994 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/recipe/33994',
        expect.objectContaining(args),
      );
    });
  });

  describe('#spell()', () => {
    test('should request a spell by ID', () => {
      blizzard.wow.spell({ id: 8056 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/spell/8056',
        expect.objectContaining(args),
      );
    });
  });

  describe('#userCharacters()', () => {
    test('should request user characters', () => {
      blizzard.wow.userCharacters({ token: 'user' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/user/characters',
        expect.objectContaining(
          merge({}, args, {
            headers: {
              Authorization: 'Bearer user',
            },
          }),
        ),
      );
    });
  });

  describe('#zone()', () => {
    test('should request the zone index', () => {
      blizzard.wow.zone();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/zone/',
        expect.objectContaining(args),
      );
    });

    test('should request a zone by ID', () => {
      blizzard.wow.zone({ id: 4131 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/zone/4131',
        expect.objectContaining(args),
      );
    });
  });

  describe('#connectedRealm()', () => {
    test('should request the connected realm index', () => {
      blizzard.wow.connectedRealm({ origin: 'us' });

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
      blizzard.wow.connectedRealm({ realm: 11, origin: 'us' });

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
      blizzard.wow.keystoneAffix();

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
      blizzard.wow.keystoneAffix({ id: 11 });

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
      blizzard.wow.mythicRaidLeaderboard({ raid: 'uldir', faction: 'alliance' });

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
      blizzard.wow.mythicDungeonKeystone();

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
      blizzard.wow.mythicDungeonKeystone('dungeon');

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
      blizzard.wow.mythicDungeonKeystone('dungeon', { id: 353 });

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
      blizzard.wow.mythicKeystoneLeaderboard({ realm: 11 });

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
      blizzard.wow.mythicKeystoneLeaderboard({ realm: 11, dungeon: 200 });

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
      blizzard.wow.mythicKeystoneLeaderboard({ realm: 11, dungeon: 200, period: 606 });

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
      blizzard.wow.playableClass();

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
      blizzard.wow.playableClass({ id: 7 });

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
      blizzard.wow.pvpTalentSlots({ id: 7 });

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
      blizzard.wow.playableSpecialization();

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
      blizzard.wow.playableSpecialization({ id: 262 });

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
      blizzard.wow.powerType();

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
      blizzard.wow.powerType({ id: 0 });

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
      blizzard.wow.playableRace();

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
      blizzard.wow.playableRace({ id: 2 });

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
      blizzard.wow.realm();

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
      blizzard.wow.realm({ realm: 'tichondrius' });

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
      blizzard.wow.region();

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
      blizzard.wow.region({ id: 1 });

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
      blizzard.wow.token();

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

  describe('#itemData()', () => {
    test('should request game item data', () => {
      blizzard.wow.itemData({ id: 168185 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/item/item/168185', 
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
});
