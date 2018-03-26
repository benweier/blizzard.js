const blizzard = require('./initialize');

describe('lib/wow.js', () => {

  beforeEach(() => {
    blizzard.axios.get.mockClear();
  });

  test('should have the correct API methods', () => {
    expect(blizzard.wow).toEqual(expect.objectContaining({
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
    }));
  });

  describe('#achievement()', () => {
    test('should request an achievement by id', () => {
      blizzard.wow.achievement({ id: 2144 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/wow/achievement/2144',
        expect.any(Object)
      );
    });
  });

  describe('#auction()', () => {
    test('should request auction data by realm', () => {
      blizzard.wow.auction({ realm: 'medivh' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/wow/auction/data/medivh',
        expect.any(Object)
      );
    });
  });

  describe('#boss()', () => {
    test('should request the boss index', () => {
      blizzard.wow.boss();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/wow/boss/',
        expect.any(Object)
      );
    });

    test('should request a single boss by id', () => {
      blizzard.wow.boss({ id: 24664 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/wow/boss/24664',
        expect.any(Object)
      );
    });
  });

  describe('#challenge()', () => {
    test('should request challenge data', () => {
      blizzard.wow.challenge();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/wow/challenge/region',
        expect.any(Object)
      );
    });

    test('should request challenge data by realm', () => {
      blizzard.wow.challenge({ realm: 'medivh' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/wow/challenge/medivh',
        expect.any(Object)
      );
    });
  });

  describe('#character()', () => {
    test('should request a character profile', () => {
      blizzard.wow.character([], { origin: 'us', realm: 'amanthul', name: 'charni' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/wow/character/amanthul/charni',
        expect.objectContaining({
          params: expect.objectContaining({
            fields: 'profile',
          }),
        })
      );
    });

    test('should request character achievements', () => {
      blizzard.wow.character(['achievements'], { origin: 'us', realm: 'amanthul', name: 'charni' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/wow/character/amanthul/charni',
        expect.objectContaining({
          params: expect.objectContaining({
            fields: 'achievements',
          }),
        })
      );
    });

    test('should request character pets and petSlots', () => {
      blizzard.wow.character(['pets', 'petSlots'], { origin: 'us', realm: 'amanthul', name: 'charni' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/wow/character/amanthul/charni',
        expect.objectContaining({
          params: expect.objectContaining({
            fields: 'pets,petSlots',
          }),
        })
      );
    });
  });

  describe('#data()', () => {
    test('should request battlegroups', () => {
      blizzard.wow.data('battlegroups');

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/wow/data/battlegroups/',
        expect.any(Object)
      );
    });

    test('should request character achievements', () => {
      blizzard.wow.data('character-achievements');

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/wow/data/character/achievements',
        expect.any(Object)
      );
    });

    test('should request guild achievements', () => {
      blizzard.wow.data('guild-achievements');

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/wow/data/guild/achievements',
        expect.any(Object)
      );
    });
  });

  describe('#guild()', () => {
    test('should request a guild profile', () => {
      blizzard.wow.guild([], { origin: 'us', realm: 'amanthul', name: 'blackwolf' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/wow/guild/amanthul/blackwolf',
        expect.objectContaining({
          params: expect.objectContaining({
            fields: 'profile',
          }),
        })
      );
    });

    test('should request guild achievements and members', () => {
      blizzard.wow.guild(['achievements', 'members'], { origin: 'us', realm: 'amanthul', name: 'blackwolf' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/wow/guild/amanthul/blackwolf',
        expect.objectContaining({
          params: expect.objectContaining({
            fields: 'achievements,members',
          }),
        })
      );
    });
  });

  describe('#item()', () => {
    test('should request an item by id', () => {
      blizzard.wow.item({ id: 18803 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/wow/item/18803',
        expect.any(Object)
      );
    });

    test('should request an item with bonuses', () => {
      blizzard.wow.item({ id: 18803, bonuses: 1 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/wow/item/18803',
        expect.any(Object)
      );
    });

    test('should request an item set by id', () => {
      blizzard.wow.item({ set: true, id: 1060 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/wow/item/set/1060',
        expect.any(Object)
      );
    });
  });

  describe('#mount()', () => {
    test('should request the mount index', () => {
      blizzard.wow.mount();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/wow/mount/',
        expect.any(Object)
      );
    });
  });

  describe('#pet()', () => {
    test('should request the pet index', () => {
      blizzard.wow.pet('list');

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/wow/pet/',
        expect.any(Object)
      );
    });

    test('should request a pet ability by id', () => {
      blizzard.wow.pet('ability', { id: 640 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/wow/pet/ability/640',
        expect.any(Object)
      );
    });

    test('should request a pet species by id', () => {
      blizzard.wow.pet('species', { id: 258 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/wow/pet/species/258',
        expect.any(Object)
      );
    });

    test('should request pet stats', () => {
      blizzard.wow.pet('stats', { id: 258, level: 25, breedId: 4, qualityId: 4 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/wow/pet/stats/258',
        expect.objectContaining({
          params: expect.objectContaining({
            breedId: expect.any(Number),
            level: expect.any(Number),
            qualityId: expect.any(Number),
          }),
        })
      );
    });
  });

  describe('#pvp()', () => {
    test('should request a pvp leaderboard by bracket', () => {
      blizzard.wow.pvp({ bracket: '3v3' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/wow/leaderboard/3v3',
        expect.any(Object)
      );
    });
  });

  describe('#quest()', () => {
    test('should request a quest by id', () => {
      blizzard.wow.quest({ id: 13146 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/wow/quest/13146',
        expect.any(Object)
      );
    });
  });

  describe('#realms()', () => {
    test('should request realm status', () => {
      blizzard.wow.realms();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/wow/realm/status',
        expect.any(Object)
      );
    });

    test('should request a multiple realms status by slug', () => {
      blizzard.wow.realms({ realms: ['blackrock', 'proudmoore'] });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/wow/realm/status',
        expect.objectContaining({
          params: expect.objectContaining({
            realms: 'blackrock,proudmoore',
          }),
        })
      );
    });
  });

  describe('#recipe()', () => {
    test('should request a recipe by id', () => {
      blizzard.wow.recipe({ id: 33994 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/wow/recipe/33994',
        expect.any(Object)
      );
    });
  });

  describe('#spell()', () => {
    test('should request a spell by id', () => {
      blizzard.wow.spell({ id: 8056 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/wow/spell/8056',
        expect.any(Object)
      );
    });
  });

  describe('#zone()', () => {
    test('should request the zone index', () => {
      blizzard.wow.zone();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/wow/zone/',
        expect.any(Object)
      );
    });

    test('should request a zone by id', () => {
      blizzard.wow.zone({ id: 4131 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/wow/zone/4131',
        expect.any(Object)
      );
    });
  });

});
