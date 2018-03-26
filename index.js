/**
 * @file Blizzard.js
 * @description A Node.js wrapper for the Blizzard Community Platform API
 * @copyright Copyright(c) 2017 Ben Weier <ben.weier@gmail.com>
 * @license MIT
 * @version 2.3.0
 * @module index
 * @requires lib/blizzard
 */

/**
 * @typedef {Object} Blizzard
 * @prop    {Object} account     Account API methods
 * @prop    {Object} d3          Diablo 3 API methods
 * @prop    {Object} sc2         Starcraft 2 API methods
 * @prop    {Object} wow         World of Warcraft API methods
 * @prop    {Function} battletag Get a URI safe battletag
 * @prop    {Function} params    Filter an objects keys from an array of keys
 * @prop    {Function} get       Perform a single request to the Blizzard API
 * @prop    {Function} all       Perform multiple requests to the Blizzard API
 */
const Blizzard = require('./lib/blizzard');

/**
 * Initialize the Blizzard.js instance.
 *
 * @param  {Object} args                Blizzard.js configuration options
 * @param  {String} args.apikey         The default Blizzard API key
 * @param  {String} [args.access_token] The default user access token
 * @param  {String} [args.origin=US]    The default API region
 * @param  {String} [args.locale=en_US] The default API locale
 * @param  {Object} axios               An [axios](https://github.com/mzabriskie/axios) compatible instance configuration
 * @return {Blizzard}                   An instance of Blizzard.js
 */
const initialize = function initialize (args, axios) {
  const config = Object.assign({}, args);
  const instance = Object.assign({}, axios);

  return new Blizzard(config, instance);
};

exports.initialize = initialize;
