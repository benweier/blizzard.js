/**
 * @file Exports the Blizzard.js module.
 * @module lib/blizzard
 * @requires axios
 * @requires lib/endpoints
 * @requires lib/account
 * @requires lib/data
 * @requires lib/wow
 * @requires lib/sc2
 * @requires lib/d3
 */

const axios = require('axios');
const merge = require('lodash.merge');
const pick = require('lodash.pick');
const pkg = require('../package.json');
const endpoints = require('./endpoints');
const Account = require('./account');
const Data = require('./data');
const Diablo3 = require('./d3');
const Starcraft2 = require('./sc2');
const WorldOfWarcraft = require('./wow');

/**
 * Blizzard.js class constructor.
 *
 * @constructor
 * @param  {Object} args          Blizzard.js configuration
 * @param  {String} [args.origin] The API region
 * @param  {String} [args.locale] The API locale
 * @param  {String} [args.id]     The API client ID
 * @param  {String} [args.secret] The API client secret
 * @param  {String} [args.token]  The API access token
 * @param  {Object} [instance]    An [axios](https://github.com/mzabriskie/axios) compatible instance configuration
 */
const Blizzard = function Blizzard (args = {}, instance = {}) {
  const { id, secret, token } = args;
  const { origin, locale } = endpoints.getEndpoint(args.origin, args.locale);

  this.version = pkg.version;
  this.defaults = {
    origin,
    locale,
    id,
    secret,
    token,
  };
  this.axios = axios.create(instance);
  this.axios.defaults.headers.common['User-Agent'] = `Node.js/${process.version} Blizzard.js/${this.version}`;

  /**
   * Account API methods.
   *
   * @member {Object}
   * @see {@link lib/account}
   */
  this.account = new Account(this);

  /**
   * Game Data API methods.
   *
   * @member {Object}
   * @see {@link lib/data}
   */
  this.data = new Data(this);

  /**
  * Diablo 3 API methods.
  *
  * @member {Object}
  * @see {@link lib/d3}
  */
  this.d3 = new Diablo3(this);

  /**
   * Starcraft 2 API methods.
   *
   * @member {Object}
   * @see {@link lib/sc2}
   */
  this.sc2 = new Starcraft2(this);

  /**
  * World of Warcraft API methods.
  *
  * @member {Object}
  * @see {@link lib/wow}
  */
  this.wow = new WorldOfWarcraft(this);
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
 * Perform a single request to the Blizzard API.
 *
 * @param  {String} path          The pathname of the API resource
 * @param  {Object} args          API request parameters
 * @param  {String} [args.origin] The region key
 * @param  {String} [args.locale] A locale code for this region
 * @param  {Object} [instance]    An [axios](https://github.com/mzabriskie/axios) compatible instance configuration
 * @return {Promise}              A thenable Promises/A+ reference
 */
Blizzard.prototype.get = function get (path, args, instance) {
  const config = Object.assign({}, args);
  const apikey = this.params(['apikey'], config);
  const access_token = this.params(['access_token'], config);
  const endpoint = endpoints.getEndpoint(config.origin || this.defaults.origin, config.locale || this.defaults.params.locale, path);
  const params = Object.assign({}, this.defaults.params, config.params, apikey, access_token, { locale: endpoint.locale });
  const obj = Object.assign({}, this.instance, instance, { params });

  return this.axios.get(`${endpoint.hostname}${encodeURI(path)}`, obj);
};

/**
 * Perform a request to the token oauth endpoint.
 *
 * @param  {String} origin               The region key
 * @param  {Object} params               The request query parameters
 * @param  {String} params.grant_type    The oauth grant type
 * @param  {String} params.client_id     The application client ID
 * @param  {String} params.client_secret The application secret key
 * @return {Promise}                     A thenable Promises/A+ reference
 */
Blizzard.prototype.fetchToken = function fetchToken (origin, params) {
  return this.axios.get(`https://${origin}.battle.net/oauth/token`, params);
};

/**
 * Perform a request to the check token oauth endpoint.
 *
 * @param  {String} origin       The region key
 * @param  {Object} params       The request query parameters
 * @param  {String} params.token The oauth token to be validated
 * @return {Promise}             A thenable Promises/A+ reference
 */
Blizzard.prototype.checkToken = function checkToken (origin, params) {
  return this.axios.get(`https://${origin}.battle.net/oauth/check_token`, params);
};

/**
 * Perform multiple requests to the Blizzard API.
 *
 * @param  {Array} requests A list of Blizzard get requests
 * @return {Promise}        A thenable Promises/A+ reference
 */
Blizzard.prototype.all = function all (requests) {
  return this.axios.all(requests);
};

module.exports = Blizzard;
