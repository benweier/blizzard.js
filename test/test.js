/* global describe, context, it */
'use strict';

const path = require('path');
const chai = require('chai');
const lint = require('mocha-eslint');
const bnet = require(path.normalize(`${__dirname}/../index.js`)).initialize();
const proto = require(path.normalize(`${__dirname}/../lib/blizzard.js`));

describe('Code Standards', function () {
  lint(['index.js', 'lib/**/*.js', 'test/**/*.js']);
});

describe('Blizzard.js', function () {

  context('.initialize()', function () {
    it('should return an instance of battlenet-api', () => {
      chai.assert.instanceOf(bnet, proto);
    });
  });

  describe('Account', () => {
    it('should have property: account', () => {
      chai.assert.property(bnet, 'account');
    });
  });

  describe('WoW', () => {
    it('should have property: wow', () => {
      chai.assert.property(bnet, 'wow');
    });
  });

  describe('SC2', () => {
    it('should have property: sc2', () => {
      chai.assert.property(bnet, 'sc2');
    });
  });

  describe('D3', () => {
    it('should have property: d3', () => {
      chai.assert.property(bnet, 'd3');
    });
  });
});
