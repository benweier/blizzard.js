/**
 * @file Exports the Blizzard.js module.
 * @module
 */
'use strict';

const axios = require('axios');

const pkg = require('../package.json');
const endpoints = require('./endpoints');

const Account = require('./account');
const WoW = require('./wow');
const SC2 = require('./sc2');
const D3 = require('./d3');

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

  this.account = new Account(this);
  this.wow = new WoW(this);
  this.sc2 = new SC2(this);
  this.d3 = new D3(this);
};

/**
 * Filter an objects keys from an array of keys.
 *
 * @param  {Array} keys A list of keys to be returned
 * @param  {Object} obj The object that may contain `keys`
 * @return {Object}     An object containing properties from `keys`
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

  return this.instance.get(`${endpoint.hostname}${path}`, args);
};

module.exports = Blizzard;
