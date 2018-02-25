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
 * @param  {Object} args       Blizzard.js configuration settings
 * @param  {Object} [instance] An [axios](https://github.com/mzabriskie/axios) compatible instance configuration
 * @return {Function}          Blizzard.js constructor function
 */
const Blizzard = function Blizzard (args, instance) {
  this.version = pkg.version;

  const defaultEndpoint = endpoints.getEndpoint(args.origin, args.locale);

  this.defaults = {
    origin: defaultEndpoint.origin,
    params: {
      apikey: args.apikey,
      access_token: args.access_token,
      locale: defaultEndpoint.locale,
    },
  };

  this.instance = Object.assign(
    {},
    instance,
    {
      headers: {
        'User-Agent': `Node.js/${process.version} Blizzard.js/${this.version}`,
      },
    }
  );

  this.axios = axios.create(this.instance);

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
 * @param  {Object} [instance]    An [axios](https://github.com/mzabriskie/axios) compatible instance configuration
 * @return {Promise}              A thenable Promises/A+ reference
 */
Blizzard.prototype.get = function get (path, args, instance) {
  const config = Object.assign({}, args);
  const apikey = this.params(['apikey'], config);
  const access_token = this.params(['access_token'], config);
  const endpoint = endpoints.getEndpoint(config.origin, config.locale || this.defaults.params.locale);
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
