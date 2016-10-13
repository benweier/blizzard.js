/* global describe, context, it */
'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const blizzard = require('./initialize');

chai.use(chaiAsPromised);

describe('lib/blizzard.js', function () {

  context('API objects', function () {
    const tests = ['account', 'd3', 'sc2', 'wow'];

    tests.forEach(function (test) {
      it(`should have a property "${test}"`, function (done) {
        chai.assert.isObject(blizzard[test]);
        done();
      });
    });
  });

  context('.params()', function () {
    const obj = { one: 1, two: 2, three: 3, four: 4 };
    const filtered = blizzard.params(['one', 'three'], obj);

    it('should filter object keys', function (done) {
      chai.assert.property(filtered, 'one');
      chai.assert.notProperty(filtered, 'two');
      chai.assert.property(filtered, 'three');
      chai.assert.notProperty(filtered, 'four');
      done();
    });
  });

  context('.get()', function () {
    this.timeout(5000);

    it('should eventually be fulfilled', function () {
      const request = blizzard.get('/wow/character/amanthul/charni');

      return chai.assert.isFulfilled(request);
    });

    it('should eventually be rejected', function () {
      const request = blizzard.get('/wow/character/amanthul/lolthisdoesnotexist');

      return chai.assert.isRejected(request);
    });
  });

  context('.all()', function () {
    this.timeout(5000);

    it('should eventually be fulfilled', function () {
      const character = blizzard.get('/wow/character/amanthul/charni');
      const guild = blizzard.get('/wow/guild/amanthul/blackwolf');

      const requests = blizzard.all([character, guild]);

      return chai.assert.isFulfilled(requests);
    });

    it('should eventually be rejected', function () {
      const character = blizzard.get('/wow/character/amanthul/lolthisdoesnotexist');
      const guild = blizzard.get('/wow/guild/amanthul/lolneitherdoesthis');

      const requests = blizzard.all([character, guild]);

      return chai.assert.isRejected(requests);
    });
  });

});
