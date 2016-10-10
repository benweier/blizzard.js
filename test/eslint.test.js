/* global describe */
'use strict';

const lint = require('mocha-eslint');

describe('Code Standards', function () {
  lint(['index.js', 'lib/**/*.js', 'test/**/*.js']);
});
