const blizzard = require('./initialize');
const Account = require('../lib/account');
const Profile = require('../lib/profile');
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
        d3: expect.any(Diablo3),
        sc2: expect.any(Starcraft2),
        wow: expect.any(WorldOfWarcraft),
        battletag: expect.any(Function),
        get: expect.any(Function),
        all: expect.any(Function),
        getApplicationToken: expect.any(Function),
        validateApplicationToken: expect.any(Function),
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
        expect.objectContaining({
          headers: {
            'User-Agent': expect.stringMatching(/Node.js\/[0-9].[0-9].[0-9] Blizzard\.js\/[0-9].[0-9].[0-9]/),
            Authorization: 'Bearer token',
          },
          params: {
            locale: 'en_US',
          },
        }),
      );
    });

    test('should be called with SEA parameters', () => {
      blizzard.get('/wow/character/proudmoore/kailee', { origin: 'sea' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://sea.api.blizzard.com/wow/character/proudmoore/kailee',
        expect.objectContaining({
          headers: {
            'User-Agent': expect.stringMatching(/Node.js\/[0-9].[0-9].[0-9] Blizzard\.js\/[0-9].[0-9].[0-9]/),
            Authorization: 'Bearer token',
          },
          params: {
            locale: 'en_US',
          },
        }),
      );
    });

    test('should be called with EU parameters', () => {
      blizzard.get('/wow/character/proudmoore/kailee', { origin: 'eu' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://eu.api.blizzard.com/wow/character/proudmoore/kailee',
        expect.objectContaining({
          headers: {
            'User-Agent': expect.stringMatching(/Node.js\/[0-9].[0-9].[0-9] Blizzard\.js\/[0-9].[0-9].[0-9]/),
            Authorization: 'Bearer token',
          },
          params: {
            locale: 'en_GB',
          },
        }),
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

  describe('#getApplicationToken()', () => {
    test('should request an oauth token with default parameters', () => {
      blizzard.getApplicationToken();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.battle.net/oauth/token',
        expect.objectContaining({
          auth: {
            username: blizzard.defaults.key,
            password: blizzard.defaults.secret,
          },
          params: {
            grant_type: 'client_credentials',
          },
        }),
      );
    });

    test('should request an oauth token with overridden parameters', () => {
      blizzard.getApplicationToken({ key: 'yek', secret: 'terces' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.battle.net/oauth/token',
        expect.objectContaining({
          auth: {
            username: 'yek',
            password: 'terces',
          },
          params: {
            grant_type: 'client_credentials',
          },
        }),
      );
    });
  });

  describe('#validateApplicationToken()', () => {
    test('should validate an oauth token with default parameters', () => {
      blizzard.validateApplicationToken();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.battle.net/oauth/check_token',
        expect.objectContaining({
          headers: {
            'User-Agent': expect.stringMatching(/Node.js\/[0-9].[0-9].[0-9] Blizzard\.js\/[0-9].[0-9].[0-9]/),
            Authorization: 'Bearer token',
          },
        }),
      );
    });

    test('should validate an oauth token with overridden parameters', () => {
      blizzard.validateApplicationToken({ token: 'nekot', origin: 'eu' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://eu.battle.net/oauth/check_token',
        expect.objectContaining({
          headers: {
            'User-Agent': expect.stringMatching(/Node.js\/[0-9].[0-9].[0-9] Blizzard\.js\/[0-9].[0-9].[0-9]/),
            Authorization: 'Bearer nekot',
          },
        }),
      );
    });
  });
});
