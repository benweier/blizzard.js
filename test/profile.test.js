const blizzard = require('./initialize');

const args = {
  headers: {
    Authorization: 'Bearer token',
  },
  params: {
    locale: 'en_US',
    namespace: 'profile-us',
  },
};

describe('lib/profile.js', () => {
  beforeEach(() => {
    blizzard.axios.get.mockClear();
  });

  test('should have all API methods', () => {
    expect(blizzard.profile).toEqual(
      expect.objectContaining({
        mythicKeystoneProfile: expect.any(Function),
      }),
    );
  });

  describe('#mythicKeystoneProfile()', () => {
    test('should request a mythic keystone profile by realm and name', () => {
      blizzard.profile.mythicKeystoneProfile({ realm: 'tichondrius', name: 'me' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/profile/wow/character/tichondrius/me/mythic-keystone-profile',
        expect.objectContaining(args),
      );
    });

    test('should request a mythic keystone profile by realm and name and season', () => {
      blizzard.profile.mythicKeystoneProfile({ realm: 'tichondrius', name: 'me', season: 1 });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/profile/wow/character/tichondrius/me/mythic-keystone-profile/season/1',
        expect.objectContaining(args),
      );
    });
  });
});
