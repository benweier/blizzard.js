/* global describe, context, it */
'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const blizzard = require('./initialize');

chai.use(chaiAsPromised);

describe('lib/account.js', function () {
  this.timeout(10000);

  context('API methods', function () {
    const tests = ['user', 'wow', 'sc2'];

    tests.forEach(function (test) {
      it(`should have a method "${test}"`, function (done) {
        chai.assert.isFunction(blizzard.account[test]);
        done();
      });
    });
  });

  context('.user()', function () {
    it('should eventually return a user account profile', function () {
      const user = blizzard.account.user();

      return chai.assert.eventually.deepProperty(user, 'data.battletag');
    });
  });

});
