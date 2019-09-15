/**
 * @file Blizzard.js
 * @description A promise-based Node.js library for the Blizzard Community Platform API
 * @copyright Copyright(c) 2017 Ben Weier <ben.weier@gmail.com>
 * @license MIT
 * @version 3.2.0
 * @module index
 * @requires lib/blizzard
 */

/**
 * @typedef {Object} Blizzard
 * @prop {Object} account Account API methods
 * @prop {Object} d3 Diablo 3 API methods
 * @prop {Object} sc2 Starcraft 2 API methods
 * @prop {Object} wow World of Warcraft API methods
 * @prop {Function} battletag Get a URI safe battletag
 * @prop {Function} get Perform a single request to the Blizzard API
 * @prop {Function} all Perform multiple requests to the Blizzard API
 */
const Blizzard = require('./lib/blizzard');

/**
 * Initialize the Blizzard.js instance.
 *
 * @param {Object} args Blizzard.js configuration options
 * @param {String} [args.origin] The default API region
 * @param {String} [args.locale] The default API locale
 * @param {String} [args.key] The default API client ID
 * @param {String} [args.secret] The default API client secret
 * @param {String} [args.token] The default API access token
 * @param {Object} instance An [axios](https://github.com/mzabriskie/axios) compatible instance configuration
 * @return {Blizzard} An instance of Blizzard.js
 */
const initialize = function initialize({ origin, locale, key, secret, token }, instance = {}) {
  return new Blizzard({ origin, locale, key, secret, token }, instance);
};

exports.initialize = initialize;
