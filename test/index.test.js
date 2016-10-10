/* global describe, it, context */
'use strict';

const path = require('path');
const chai = require('chai');
const blizzard = require(path.normalize(`${__dirname}/../index.js`)).initialize();
const prototype = require(path.normalize(`${__dirname}/../lib/blizzard.js`));

describe('index.js', function () {

  context('.initialize()', function () {
    it('should return an instance of Blizzard.js', function (done) {
      chai.expect(blizzard).to.be.an.instanceOf(prototype);
      done();
    });
  });

});
