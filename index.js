/**
 * @file Blizzard.js
 * @description A Node.js wrapper for the Blizzard Battle.net Community Platform API
 * @copyright Copyright(c) 2016 Ben Weier <ben.weier@gmail.com>
 * @license MIT
 * @version 1.0.0
 * @module index
 * @requires lib/blizzard
 */
'use strict';

/**
 * @typedef {Object} Blizzard
 * @prop    {Object} account  Account API methods
 * @prop    {Object} d3       D3 API methods
 * @prop    {Object} sc2      Sc2 API methods
 * @prop    {Object} wow      WoW API methods
 * @prop    {Function} params Filter an objects keys from an array of keys
 * @prop    {Function} get    Perform a single request to the Blizzard API
 * @prop    {Function} all    Perform multiple requests to the Blizzard API
 */
const Blizzard = require('./lib/blizzard');

/**
 * Initialize the Blizzard.js instance.
 *
 * @param  {Object} args          Blizzard.js configuration options
 * @param  {String} args.apikey   Your private Blizzard API key
 * @param  {String} [args.token]  A default user access token
 * @param  {String} [args.origin] The default API region
 * @param  {String} [args.locale] The default API locale
 * @param  {Object} axios         An instance config object compatible with [axios](https://github.com/mzabriskie/axios)
 * @return {Blizzard}             An instance of Blizzard.js
 * @example
 * const blizzard = require('blizzard.js').initialize({apikey: process.env.BATTLENET_API_KEY});
 */
const initialize = function initialize (args, axios) {
  const config = Object.assign({}, args);
  const instance = Object.assign({}, axios);

  return new Blizzard(config, instance);
};

exports.initialize = initialize;
