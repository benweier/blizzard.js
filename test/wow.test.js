const merge = require('lodash.merge');
const blizzard = require('./initialize');

const args = {
  headers: {
    Authorization: 'Bearer token',
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
        guild: expect.any(Function),
        item: expect.any(Function),
        mount: expect.any(Function),
        pet: expect.any(Function),
        pvp: expect.any(Function),
        quest: expect.any(Function),
        realms: expect.any(Function),
        recipe: expect.any(Function),
        spell: expect.any(Function),
        zone: expect.any(Function),
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

    test('should request guild achievements', () => {
      blizzard.wow.data('guild-achievements');

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/data/guild/achievements',
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

  describe('#realms()', () => {
    test('should request realm status', () => {
      blizzard.wow.realms();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/realm/status',
        expect.objectContaining(args),
      );
    });

    test('should request a multiple realms status by slug', () => {
      blizzard.wow.realms({ realms: ['blackrock', 'proudmoore'] });

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
});
