const endpoints = require('../lib/endpoints');

describe('lib/endpoints.js', () => {

  test('should export functions', () => {
    expect(endpoints).toEqual(expect.objectContaining({
      getEndpoint: expect.any(Function),
    }));
  });

  describe('#getEndpoint()', () => {

    test('should return the default endpoint', () => {
      const endpoint = endpoints.getEndpoint();
      expect(endpoint).toMatchSnapshot();
    });

    test('should return the US endpoint', () => {
      const endpoint = endpoints.getEndpoint('foo');
      expect(endpoint).toMatchSnapshot();
    });

    test('should return the SEA endpoint', () => {
      const endpoint = endpoints.getEndpoint('sea');
      expect(endpoint).toMatchSnapshot();
    });

    test('should return the EU es_ES endpoint', () => {
      const endpoint = endpoints.getEndpoint('eu', 'es_ES');
      expect(endpoint).toMatchSnapshot();
    });

  });

});
