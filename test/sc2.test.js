/* global describe, context, it */
'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const blizzard = require('./initialize');

chai.use(chaiAsPromised);

describe('lib/sc2.js', function () {
  this.timeout(10000);

  context('API methods', function () {
    const tests = ['data', 'ladder', 'profile'];

    tests.forEach(function (test) {
      it(`should have a method "${test}"`, function (done) {
        chai.assert.isFunction(blizzard.sc2[test]);
        done();
      });
    });
  });

  context('.profile()', function () {
    it('should eventually return a user profile', function () {
      const profile = blizzard.sc2.profile('profile', { id: 2137104, name: 'skt' });

      return chai.assert.eventually.deepProperty(profile, 'data.id');
    });
  });

});
