/* global describe, context, it */
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

    it('should eventually return ladder placements', function () {
      const profile = blizzard.sc2.profile('ladders', { id: 2137104, name: 'skt' });

      return chai.assert.eventually.deepProperty(profile, 'data.currentSeason');
    });

    it('should eventually return match history', function () {
      const profile = blizzard.sc2.profile('matches', { id: 2137104, name: 'skt' });

      return chai.assert.eventually.deepProperty(profile, 'data.matches');
    });
  });

  context('.data()', function () {
    it('should eventually return a list of achievements', function () {
      const data = blizzard.sc2.data('achievements');

      return chai.assert.eventually.deepProperty(data, 'data.achievements');
    });

    it('should eventually return a list of rewards', function () {
      const data = blizzard.sc2.data('rewards');

      return chai.assert.eventually.deepProperty(data, 'data.portraits');
    });
  });

  context('.ladder()', function () {
    it('should eventually return a ladder', function () {
      const ladder = blizzard.sc2.ladder({ id: 194163 });

      return chai.assert.eventually.deepProperty(ladder, 'data.ladderMembers');
    });
  });

});
