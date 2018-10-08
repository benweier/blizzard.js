const blizzard = require('./initialize');
const Account = require('../lib/account');
const Diablo3 = require('../lib/d3');
const Starcraft2 = require('../lib/sc2');
const WorldOfWarcraft = require('../lib/wow');

describe('lib/blizzard.js', () => {

  beforeEach(() => {
    blizzard.axios.get.mockClear();
  });

  test('should have API properties', () => {
    expect(blizzard).toEqual(expect.objectContaining({
      account: expect.any(Account),
      d3: expect.any(Diablo3),
      sc2: expect.any(Starcraft2),
      wow: expect.any(WorldOfWarcraft),
      battletag: expect.any(Function),
      params: expect.any(Function),
      get: expect.any(Function),
      all: expect.any(Function),
      fetchToken: expect.any(Function),
      checkToken: expect.any(Function),
    }));
  });

  describe('#battletag()', () => {
    test('should return a safe battletag', () => {
      const tag = blizzard.battletag('skt#1884');

      expect(tag).toMatchSnapshot();
    });
  });

  describe('#params()', () => {
    const obj = { foo: 'foo', bar: 'bar' };
    const params = blizzard.params(['foo', 'baz'], obj);

    test('should return object keys', () => {
      expect(params).toMatchSnapshot();
    });
  });

  describe('#get()', () => {
    test('should be called with the correct parameters', () => {
      blizzard.get('/wow/character/proudmoore/kailee');

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.battle.net/wow/character/proudmoore/kailee',
        expect.any(Object)
      );
    });
  });

  describe('#get()', () => {
    test('should be called with the correct parameters', () => {
      blizzard.defaults.origin = 'eu';
      blizzard.get('/wow/character/proudmoore/kailee', { origin: 'sea' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://sea.api.battle.net/wow/character/proudmoore/kailee',
        expect.any(Object)
      );
    });
  });

  describe('#get()', () => {
    test('should be called with the correct parameters', () => {
      blizzard.defaults.origin = 'eu';
      blizzard.get('/wow/character/proudmoore/kailee');

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://eu.api.battle.net/wow/character/proudmoore/kailee',
        expect.any(Object)
      );
    });
  });

  describe('#all()', () => {
    test('should be called with the correct parameters', () => {
      const character = blizzard.get('/wow/character/amanthul/charni');
      const guild = blizzard.get('/wow/guild/amanthul/blackwolf');

      blizzard.all([character, guild]);

      expect(blizzard.axios.all).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.all).toHaveBeenCalledWith(
        expect.arrayContaining([expect.any(Promise)])
      );
    });
  });

  describe('#fetchToken()', () => {
    test('should be called with the correct parameters', () => {
      blizzard.fetchToken('us', {});

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.battle.net/oauth/token',
        expect.any(Object)
      );
    });
  });

  describe('#checkToken()', () => {
    test('should be called with the correct parameters', () => {
      blizzard.checkToken('us', {});

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.battle.net/oauth/check_token',
        expect.any(Object)
      );
    });
  });

});
