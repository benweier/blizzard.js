const blizzard = require('./initialize');
const Account = require('../lib/account');
const Profile = require('../lib/profile');
const Data = require('../lib/data');
const Diablo3 = require('../lib/d3');
const Starcraft2 = require('../lib/sc2');
const WorldOfWarcraft = require('../lib/wow');

describe('lib/blizzard.js', () => {
  beforeEach(() => {
    blizzard.axios.get.mockClear();
  });

  test('should have API properties', () => {
    expect(blizzard).toEqual(
      expect.objectContaining({
        account: expect.any(Account),
        profile: expect.any(Profile),
        data: expect.any(Data),
        d3: expect.any(Diablo3),
        sc2: expect.any(Starcraft2),
        wow: expect.any(WorldOfWarcraft),
        battletag: expect.any(Function),
        get: expect.any(Function),
        all: expect.any(Function),
        fetchToken: expect.any(Function),
        checkToken: expect.any(Function),
      }),
    );
  });

  describe('#battletag()', () => {
    test('should return a safe battletag', () => {
      const tag = blizzard.battletag('skt#1884');

      expect(tag).toEqual('skt-1884');
    });
  });

  describe('#get()', () => {
    test('should be called with default parameters', () => {
      blizzard.get('/wow/character/proudmoore/kailee');

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/wow/character/proudmoore/kailee',
        expect.any(Object),
      );
    });

    test('should be called with SEA parameters', () => {
      blizzard.get('/wow/character/proudmoore/kailee', { origin: 'sea' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://sea.api.blizzard.com/wow/character/proudmoore/kailee',
        expect.any(Object),
      );
    });

    test('should be called with EU parameters', () => {
      blizzard.get('/wow/character/proudmoore/kailee', { origin: 'eu' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://eu.api.blizzard.com/wow/character/proudmoore/kailee',
        expect.any(Object),
      );
    });
  });

  describe('#all()', () => {
    test('should be called with the correct parameters', () => {
      const character = blizzard.get('/wow/character/amanthul/charni');
      const guild = blizzard.get('/wow/guild/amanthul/blackwolf');

      blizzard.all([character, guild]);

      expect(blizzard.axios.all).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.all).toHaveBeenCalledWith(expect.arrayContaining([expect.any(Promise)]));
      expect(blizzard.axios.get).toHaveBeenCalledTimes(2);
    });
  });

  describe('#fetchToken()', () => {
    test('should be called with the correct parameters', () => {
      blizzard.fetchToken({ origin: 'us', type: 'credentials' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith('https://us.battle.net/oauth/token', {
        auth: expect.objectContaining({
          username: expect.stringMatching(blizzard.defaults.key),
          password: expect.stringMatching(blizzard.defaults.secret),
        }),
        params: expect.objectContaining({
          grant_type: 'credentials',
        }),
      });
    });
  });

  describe('#checkToken()', () => {
    test('should be called with default parameters', () => {
      blizzard.checkToken();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith('https://us.battle.net/oauth/check_token', {
        params: expect.objectContaining({
          token: blizzard.defaults.token,
        }),
      });
    });

    test('should be called with overridden parameters', () => {
      blizzard.checkToken({ origin: 'eu', token: 'test' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith('https://eu.battle.net/oauth/check_token', {
        params: expect.objectContaining({
          token: 'test',
        }),
      });
    });
  });
});
