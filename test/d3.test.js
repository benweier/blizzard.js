const blizzard = require('./initialize');

const args = {
  headers: {
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
        data: expect.any(Function),
        era: expect.any(Function),
        profile: expect.any(Function),
        season: expect.any(Function),
      }),
    );
  });

  describe('#data()', () => {
    test('should request an item by ID', () => {
      blizzard.d3.data('item', { id: 'item/1234567890' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/d3/data/item/1234567890',
        expect.objectContaining(args),
      );
    });

    test('should request a follower by ID', () => {
      blizzard.d3.data('follower', { id: 'templar' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/d3/data/follower/templar',
        expect.objectContaining(args),
      );
    });

    test('should request an artisan by ID', () => {
      blizzard.d3.data('artisan', { id: 'blacksmith' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/d3/data/artisan/blacksmith',
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
