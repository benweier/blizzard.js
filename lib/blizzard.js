/**
 * @file Exports the Blizzard.js module.
 * @module lib/blizzard
 * @requires axios
 * @requires lib/endpoints
 * @requires lib/account
 * @requires lib/wow
 * @requires lib/sc2
 * @requires lib/d3
 */
'use strict';

const axios = require('axios');

const pkg = require('../package.json');
const endpoints = require('./endpoints');

const Account = require('./account');
const D3 = require('./d3');
const SC2 = require('./sc2');
const WoW = require('./wow');

/**
 * Blizzard.js class constructor.
 *
 * @constructor
 * @param  {Object} args                  Blizzard.js configuration settings
 * @param  {String} args.api_key          Your private Blizzard API key
 * @param  {Number} [args.timeout=10000]  API request timeout in milliseconds
 * @param  {Number} [args.maxRedirects=5] Maximum number of API request redirects
 * @return {Function}                     Blizzard.js constructor function
 */
const Blizzard = function Blizzard (args) {
  this.version = pkg.version;

  const defaults = {
    timeout: 10000,
    maxRedirects: 5
  };

  const constants = {
    responseType: 'json',
    headers: {
      'User-Agent': 'Node.js/' + process.version + ' Blizzard.js/' + this.version
    }
  };

  this.config = Object.assign(defaults, args, constants);
  this.instance = axios.create(this.config);

  /**
   * Account API methods
   *
   * @member {Object}
   * @see {@link lib/account}
   */
  this.account = new Account(this);

  /**
  * Diablo 3 API methods
  *
  * @member {Object}
  * @see {@link lib/d3}
  */
  this.d3 = new D3(this);

  /**
   * Starcraft 2 API methods
   *
   * @member {Object}
   * @see {@link lib/sc2}
   */
  this.sc2 = new SC2(this);

  /**
  * World of Warcraft API methods
  *
  * @member {Object}
  * @see {@link lib/wow}
  */
  this.wow = new WoW(this);

};

/**
 * Filter an objects keys from an array of keys.
 *
 * @param  {Array} keys A list of keys to be returned
 * @param  {Object} obj An object that may contain <code>keys</code>
 * @return {Object}     A new object containing <code>keys</code>
 */
Blizzard.prototype.params = function params (keys, obj) {
  return Object.keys(obj)
    .filter(key => keys.indexOf(key) !== -1)
    .reduce((value, key) => Object.assign(value, { [key]: obj[key] }), {});
};

/**
 * Perform a request to the Blizzard API.
 *
 * @param  {String} path The pathname of the API resource
 * @param  {Object} args API request configuration options. Compatible with [axios]{@link https://github.com/mzabriskie/axios}
 * @return {promise}     A theneable Promises/A+ reference
 */
Blizzard.prototype.request = function request (path, args) {
  const endpoint = endpoints.getEndpoint(args.origin);

  return this.instance.get(`${endpoint.hostname}${path}`, { params: args });
};

module.exports = Blizzard;
