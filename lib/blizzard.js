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
 * @param  {Object} args            Blizzard.js configuration settings
 * @param  {String} args.apikey     Your private Blizzard API key
 * @param  {String} [args.token]    A user access token
 * @param  {String} [args.origin]   The default API region
 * @param  {String} [args.locale]   The default API locale
 * @param  {Object} [instance]      An instance config object compatible with [axios]{@link https://github.com/mzabriskie/axios}
 * @return {Function}               Blizzard.js constructor function
 */
const Blizzard = function Blizzard (args, instance) {
  this.version = pkg.version;

  const defaultEndpoint = endpoints.getEndpoint(args.origin, args.locale);

  this.defaults = {
    origin: defaultEndpoint.origin,
    locale: defaultEndpoint.locale
  };

  this.instance = Object.assign(
    {},
    instance,
    {
      params: {
        apikey: args.apikey,
        access_token: args.token
      },
      headers: {
        'User-Agent': 'Node.js/' + process.version + ' Blizzard.js/' + this.version
      }
    }
  );

  this.axios = axios.create(this.instance);

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
 * Get a URL friendly battletag.
 *
 * @param  {String} tag A user battletag "tag#1234"
 * @return {String}     A safe battletag "tag-1234"
 */
Blizzard.prototype.battletag = function battletag (tag) {
  return tag.replace('#', '-');
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
 * Perform a single request to the Blizzard API.
 *
 * @param  {String} path          The pathname of the API resource
 * @param  {Object} args          API request parameters
 * @param  {String} [args.origin] The region key
 * @param  {String} [args.locale] A locale code for this region
 * @param  {Object} [inst]        An instance config object compatible with [axios]{@link https://github.com/mzabriskie/axios}
 * @return {Promise}              A theneable Promises/A+ reference
 */
Blizzard.prototype.get = function get (path, args, inst) {
  const config = Object.assign({}, this.defaults, args);
  const instance = Object.assign({}, this.instance, inst);
  const endpoint = endpoints.getEndpoint(config.origin, config.locale);

  return this.axios.get(`${endpoint.hostname}${path}`, instance);
};

/**
 * Perform multiple requests to the Blizzard API.
 *
 * @param  {Array} requests A list of Blizzard get requests
 * @return {Promise}        A theneable Promises/A+ reference
 */
Blizzard.prototype.all = function all (requests) {
  return axios.all(requests);
};

module.exports = Blizzard;
