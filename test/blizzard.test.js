/* global describe, context, it */
'use strict';

require('dotenv').config({ silent: true });

const path = require('path');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const blizzard = require(path.normalize(`${__dirname}/../index.js`)).initialize({
  apikey: process.env.BATTLENET_API_KEY
});

chai.use(chaiAsPromised);

describe('lib/blizzard.js', function () {
  this.slow(5000);

  context('API interfaces', function () {
    const tests = ['account', 'd3', 'sc2', 'wow'];

    tests.forEach(function (test) {
      it(`should have property: ${test}`, function (done) {
        chai.assert.property(blizzard, test);
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

    it('should eventually be fulfilled', function (done) {
      const request = blizzard.get('/wow/character/amanthul/charni', { realm: 'amanthul', name: 'charni' });

      return chai.assert.isFulfilled(request);
    });

    it('should eventually be rejected', function () {
      const request = blizzard.get('/wow/character/amanthul/lolthisdoesnotexist');

      return chai.assert.isRejected(request);
    });
  });

});
