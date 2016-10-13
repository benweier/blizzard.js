/* global describe, it, context */
'use strict';

const path = require('path');
const chai = require('chai');
const blizzard = require('./initialize');
const prototype = require(path.normalize(`${__dirname}/../lib/blizzard.js`));

describe('index.js', function () {

  context('.initialize()', function () {
    it('should return an instance of blizzard.js', function (done) {
      chai.assert.instanceOf(blizzard, prototype, 'blizzard is an instance of blizzard.js');
      done();
    });
  });

});
