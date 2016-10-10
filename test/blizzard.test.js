/* global describe, context, it */
'use strict';

const path = require('path');
const chai = require('chai');
const blizzard = require(path.normalize(`${__dirname}/../index.js`)).initialize();
const prototype = require(path.normalize(`${__dirname}/../lib/blizzard.js`));

describe('.initialize()', function () {

  it('should return an instance of Blizzard.js', function (done) {
    chai.expect(blizzard).to.be.an.instanceOf(prototype);
    done();
  });

});

describe('lib/blizzard.js', function () {

  context('.account', function () {
    it('should have property: account', function (done) {
      chai.assert.property(blizzard, 'account');
      done();
    });
  });

  context('.wow', function () {
    it('should have a wow property', function (done) {
      chai.expect(blizzard).to.have.property('wow');
      done();
    });
  });

  context('.sc2', function () {
    it('should have a sc2 property', function (done) {
      chai.expect(blizzard).to.have.property('sc2');
      done();
    });
  });

  context('.d3', function () {
    it('should have a d3 property', function (done) {
      chai.expect(blizzard).to.have.property('d3');
      done();
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

});
