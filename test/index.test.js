const axios = require('axios');
const blizzard = require('./initialize');
const prototype = require('../lib/blizzard.js');

describe('index.js', () => {

  describe('#initialize()', () => {
    test('should return an instance of blizzard.js', () => {
      expect(blizzard).toBeInstanceOf(prototype);
    });

    test('should create an instance of axios', () => {
      expect(axios.create).toHaveBeenCalledTimes(1);
    });
  });

});
