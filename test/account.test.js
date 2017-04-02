/* global describe, context, it */
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

  context('.wow()', function () {
    it('should eventually return a list of WoW characters', function () {
      const user = blizzard.account.wow();

      return chai.assert.eventually.deepProperty(user, 'data.characters');
    });
  });

  context('.sc2()', function () {
    it('should eventually return a SC2 profile', function () {
      const user = blizzard.account.sc2();

      return chai.assert.eventually.deepProperty(user, 'data.characters');
    });
  });

});
