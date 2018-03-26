const blizzard = require('./initialize');

describe('lib/d3.js', () => {

  beforeEach(() => {
    blizzard.axios.get.mockClear();
  });

  test('should have the correct API methods', () => {
    expect(blizzard.d3).toEqual(expect.objectContaining({
      data: expect.any(Function),
      era: expect.any(Function),
      profile: expect.any(Function),
      season: expect.any(Function),
    }));
  });

  describe('#data()', () => {
    test('should request the correct item', () => {
      blizzard.d3.data('item', { id: 'item/1234567890' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/d3/data/item/1234567890',
        expect.any(Object)
      );
    });

    test('should request the correct follower', () => {
      blizzard.d3.data('follower', { id: 'templar' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/d3/data/follower/templar',
        expect.any(Object)
      );
    });

    test('should request the correct artisan', () => {
      blizzard.d3.data('artisan', { id: 'blacksmith' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/d3/data/artisan/blacksmith',
        expect.any(Object)
      );
    });
  });

  describe('#era()', () => {
    test('should request the current era', () => {
      blizzard.d3.era({ access_token: 'test' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/data/d3/era/',
        expect.any(Object)
      );
    });

    test('should request the correct id', () => {
      blizzard.d3.era({ id: 5 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/data/d3/era/5',
        expect.any(Object)
      );
    });

    test('should request the correct id and leaderboard', () => {
      blizzard.d3.era({ id: 7, leaderboard: 'rift-barbarian' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/data/d3/era/7/leaderboard/rift-barbarian',
        expect.any(Object)
      );
    });
  });

  describe('#season()', () => {
    test('should request the current season', () => {
      blizzard.d3.season({ access_token: 'test' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/data/d3/season/',
        expect.any(Object)
      );
    });

    test('should request the correct season id', () => {
      blizzard.d3.season({ id: 5 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/data/d3/season/5',
        expect.any(Object)
      );
    });

    test('should request the correct seaseon id and leaderboard', () => {
      blizzard.d3.season({ id: 7, leaderboard: 'rift-barbarian' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/data/d3/season/7/leaderboard/rift-barbarian',
        expect.any(Object)
      );
    });
  });

  describe('#profile()', () => {
    test('should request the correct player profile', () => {
      blizzard.d3.profile({ tag: 'skt#1884' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/d3/profile/skt-1884/',
        expect.any(Object)
      );
    });

    test('should request the correct hero profile', () => {
      blizzard.d3.profile({ tag: 'skt#1884', hero: 287801 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/d3/profile/skt-1884/hero/287801',
        expect.any(Object)
      );
    });

    test('should request the correct hero profile with items', () => {
      blizzard.d3.profile({ tag: 'skt#1884', hero: 287801, itemTypes: 'items' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/d3/profile/skt-1884/hero/287801/items',
        expect.any(Object)
      );
    });

    test('should request the correct hero profile with follower-items', () => {
      blizzard.d3.profile({ tag: 'skt#1884', hero: 287801, itemTypes: 'follower-items' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/d3/profile/skt-1884/hero/287801/follower-items',
        expect.any(Object)
      );
    });
  });
});
