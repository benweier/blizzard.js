/* global describe, context, it */
'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const blizzard = require('./initialize');

chai.use(chaiAsPromised);

describe('lib/d3.js', function () {
  this.timeout(5000);

  context('API methods', function () {
    const tests = ['data', 'era', 'profile', 'season'];

    tests.forEach(function (test) {
      it(`should have a method "${test}"`, function (done) {
        chai.assert.isFunction(blizzard.d3[test]);
        done();
      });
    });
  });

  context('.data()', function () {

    it('should have the correct API path', function () {
      const templar = blizzard.d3.data('follower', { id: 'templar' });

      return chai.assert.eventually.deepPropertyVal(templar, 'config.url', 'https://us.api.battle.net/d3/data/follower/templar');
    });
  });

});
