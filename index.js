/**
 * @file Blizzard.js
 * @description A Node.js wrapper for the Blizzard Battle.net Community Platform API
 * @copyright Copyright(c) 2016 Ben Weier <ben.weier@gmail.com>
 * @license MIT
 * @version 1.0.0
 * @module
 */
'use strict';

const Blizzard = require('./lib/blizzard');

/**
 * Initialize the Blizzard.js instance.
 *
 * @param  {Object} args Blizzard.js configuration options
 * @return {Object}      An instance of Blizzard.js
 */
const initialize = function initialize (args) {
  // TODO Filter args by whitelisted configuration keys
  const config = args;

  return new Blizzard(config);
};

exports.initialize = initialize;
