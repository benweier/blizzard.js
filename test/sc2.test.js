/* global describe, context, it */
'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const blizzard = require('./initialize');

chai.use(chaiAsPromised);

describe('lib/sc2.js', function () {

  context('API methods', function () {
    const tests = ['data', 'ladder', 'profile'];

    tests.forEach(function (test) {
      it(`should have a method "${test}"`, function (done) {
        chai.assert.isFunction(blizzard.sc2[test]);
        done();
      });
    });
  });

});
