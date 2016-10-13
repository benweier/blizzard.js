/* global describe, context, it */
'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const blizzard = require('./initialize');

chai.use(chaiAsPromised);

describe('lib/wow.js', function () {

  context('API methods', function () {
    const tests = ['achievement', 'auction', 'battlepet', 'boss', 'challenge', 'character', 'data', 'guild', 'item', 'mount', 'pet', 'pvp', 'quest', 'realm', 'recipe', 'spell', 'zone'];

    tests.forEach(function (test) {
      it(`should have a method "${test}"`, function (done) {
        chai.assert.isFunction(blizzard.wow[test]);
        done();
      });
    });
  });

});
