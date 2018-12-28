const endpoints = require('../lib/endpoints');

describe('lib/endpoints.js', () => {
  test('should export functions', () => {
    expect(endpoints).toEqual(
      expect.objectContaining({
        getEndpoint: expect.any(Function),
      }),
    );
  });

  describe('getEndpoint()', () => {
    test('should return the default endpoint', () => {
      const endpoint = endpoints.getEndpoint();
      expect(endpoint).toEqual({
        hostname: 'https://us.api.blizzard.com',
        locale: 'en_US',
        origin: 'us',
      });
    });

    test('should return the US endpoint', () => {
      const endpoint = endpoints.getEndpoint('foo');
      expect(endpoint).toEqual({
        hostname: 'https://us.api.blizzard.com',
        locale: 'en_US',
        origin: 'us',
      });
    });

    test('should return the US pt_BR endpoint', () => {
      const endpoint = endpoints.getEndpoint('us', 'pt_BR');
      expect(endpoint).toEqual({
        hostname: 'https://us.api.blizzard.com',
        locale: 'pt_BR',
        origin: 'us',
      });
    });

    test('should return the SEA endpoint', () => {
      const endpoint = endpoints.getEndpoint('sea');
      expect(endpoint).toEqual({
        hostname: 'https://sea.api.blizzard.com',
        locale: 'en_US',
        origin: 'sea',
      });
    });

    test('should return the EU es_ES endpoint', () => {
      const endpoint = endpoints.getEndpoint('eu', 'es_ES');
      expect(endpoint).toEqual({
        hostname: 'https://eu.api.blizzard.com',
        locale: 'es_ES',
        origin: 'eu',
      });
    });

    test('should return the CN endpoint', () => {
      const endpoint = endpoints.getEndpoint('cn');
      expect(endpoint).toEqual({
        hostname: 'https://gateway.battlenet.com.cn',
        locale: 'zh_CN',
        origin: 'cn',
      });
    });

    test('should return an overridden path endpoint', () => {
      const endpoint = endpoints.getEndpoint('kr', 'ko_KR', '/oauth/userinfo');
      expect(endpoint).toEqual({
        hostname: 'https://kr.battle.net',
        locale: 'ko_KR',
        origin: 'kr',
      });
    });
  });
});
