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

  context('.era()', function () {
    it('should eventually return the current era', function () {
      const era = blizzard.d3.era();

      return chai.assert.eventually.deepProperty(era, 'data.current_era');
    });

    it('should eventually return the requested era', function () {
      const era = blizzard.d3.era({ id: 3 });

      return chai.assert.eventually.deepProperty(era, 'data.leaderboard');
    });

    it('should eventually return a requested era leaderboard', function () {
      const era = blizzard.d3.era({ id: 5 });

      return chai.assert.eventually.deepProperty(era, 'data.leaderboard');
    });
  });

  context('.season()', function () {
    it('should eventually return the current season', function () {
      const season = blizzard.d3.season();

      return chai.assert.eventually.deepProperty(season, 'data.current_season');
    });

    it('should eventually return the requested season', function () {
      const season = blizzard.d3.season({ id: 3 });

      return chai.assert.eventually.deepProperty(season, 'data.leaderboard');
    });

    it('should eventually return a requested season leaderboard', function () {
      const season = blizzard.d3.season({ id: 5 });

      return chai.assert.eventually.deepProperty(season, 'data.leaderboard');
    });
  });

});
