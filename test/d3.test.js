const blizzard = require('./initialize');

const args = {
  headers: {
    'User-Agent': expect.stringMatching(/Node.js\/[0-9].[0-9].[0-9] Blizzard\.js\/[0-9].[0-9].[0-9]/),
    Authorization: 'Bearer token',
  },
  params: {
    locale: 'en_US',
  },
};

describe('lib/d3.js', () => {
  beforeEach(() => {
    blizzard.axios.get.mockClear();
  });

  test('should have the correct API methods', () => {
    expect(blizzard.d3).toEqual(
      expect.objectContaining({
        act: expect.any(Function),
        artisan: expect.any(Function),
        recipe: expect.any(Function),
        follower: expect.any(Function),
        characterClass: expect.any(Function),
        characterSkill: expect.any(Function),
        item: expect.any(Function),
        itemType: expect.any(Function),
        era: expect.any(Function),
        profile: expect.any(Function),
        season: expect.any(Function),
      }),
    );
  });

  describe('#act()', () => {
    test('should request the act index', () => {
      blizzard.d3.act();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/d3/data/act',
        expect.objectContaining(args),
      );
    });

    test('should request an act by ID', () => {
      blizzard.d3.act({ id: 1 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/d3/data/act/1',
        expect.objectContaining(args),
      );
    });
  });

  describe('#artisan()', () => {
    test('should request an artisan by slug', () => {
      blizzard.d3.artisan({ id: 'blacksmith' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/d3/data/artisan/blacksmith',
        expect.objectContaining(args),
      );
    });
  });

  describe('#recipe()', () => {
    test('should request a recipe by artisan and recipe slugs', () => {
      blizzard.d3.recipe({ artisan: 'blacksmith', recipe: 'apprentice-flamberge' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/d3/data/artisan/blacksmith/recipe/apprentice-flamberge',
        expect.objectContaining(args),
      );
    });
  });

  describe('#follower()', () => {
    test('should request an artisan by slug', () => {
      blizzard.d3.follower({ id: 'templar' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/d3/data/follower/templar',
        expect.objectContaining(args),
      );
    });
  });

  describe('#characterClass()', () => {
    test('should request a character class by slug', () => {
      blizzard.d3.characterClass({ id: 'barbarian' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/d3/data/hero/barbarian',
        expect.objectContaining(args),
      );
    });
  });

  describe('#characterSkill()', () => {
    test('should request a character skill by class and skill slug', () => {
      blizzard.d3.characterSkill({ class: 'barbarian', skill: 'bash' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/d3/data/hero/barbarian/skill/bash',
        expect.objectContaining(args),
      );
    });
  });

  describe('#item()', () => {
    test('should request an item by slug', () => {
      blizzard.d3.item({ id: 'corrupted-ashbringer-Unique_Sword_2H_104_x1' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/d3/data/item/corrupted-ashbringer-Unique_Sword_2H_104_x1',
        expect.objectContaining(args),
      );
    });
  });

  describe('#itemType()', () => {
    test('should request the item type index', () => {
      blizzard.d3.itemType();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/d3/data/item-type',
        expect.objectContaining(args),
      );
    });

    test('should request an item by slug', () => {
      blizzard.d3.itemType({ id: 'sword2h' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/d3/data/item-type/sword2h',
        expect.objectContaining(args),
      );
    });
  });

  describe('#era()', () => {
    test('should request the era index', () => {
      blizzard.d3.era();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/d3/era/',
        expect.objectContaining(args),
      );
    });

    test('should request an era by ID', () => {
      blizzard.d3.era({ id: 5 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/d3/era/5',
        expect.objectContaining(args),
      );
    });

    test('should request an era by ID and leaderboard', () => {
      blizzard.d3.era({ id: 7, leaderboard: 'rift-barbarian' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/d3/era/7/leaderboard/rift-barbarian',
        expect.objectContaining(args),
      );
    });
  });

  describe('#season()', () => {
    test('should request the season index', () => {
      blizzard.d3.season();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/d3/season/',
        expect.objectContaining(args),
      );
    });

    test('should request a season by ID', () => {
      blizzard.d3.season({ id: 5 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/d3/season/5',
        expect.objectContaining(args),
      );
    });

    test('should request a season by ID and leaderboard', () => {
      blizzard.d3.season({ id: 7, leaderboard: 'rift-barbarian' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/d3/season/7/leaderboard/rift-barbarian',
        expect.objectContaining(args),
      );
    });
  });

  describe('#profile()', () => {
    test('should request a player profile', () => {
      blizzard.d3.profile({ tag: 'skt#1884' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/d3/profile/skt-1884/',
        expect.objectContaining(args),
      );
    });

    test('should request a hero profile', () => {
      blizzard.d3.profile({ tag: 'skt#1884', hero: 287801 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/d3/profile/skt-1884/hero/287801',
        expect.objectContaining(args),
      );
    });

    test('should request a hero profile with items', () => {
      blizzard.d3.profile({ tag: 'skt#1884', hero: 287801, itemTypes: 'items' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/d3/profile/skt-1884/hero/287801/items',
        expect.objectContaining(args),
      );
    });

    test('should request a hero profile with follower-items', () => {
      blizzard.d3.profile({ tag: 'skt#1884', hero: 287801, itemTypes: 'follower-items' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/d3/profile/skt-1884/hero/287801/follower-items',
        expect.objectContaining(args),
      );
    });
  });
});
