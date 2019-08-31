/**
 * @file Exports the Blizzard.js module.
 * @module lib/blizzard
 * @requires axios
 * @requires lib/endpoints
 * @requires lib/account
 * @requires lib/profile
 * @requires lib/wow
 * @requires lib/sc2
 * @requires lib/d3
 * @requires lib/hs
 */

const qs = require('querystring');
const axios = require('axios');
const merge = require('lodash.merge');
const pick = require('lodash.pick');
const pkg = require('../package.json');
const endpoints = require('./endpoints');
const Account = require('./account');
const Profile = require('./profile');
const Diablo3 = require('./d3');
const Starcraft2 = require('./sc2');
const WorldOfWarcraft = require('./wow');
const Hearthstone = require('./hs');

/**
 * Blizzard.js class constructor.
 *
 * @constructor
 * @param {Object} [args] Blizzard.js configuration
 * @param {String} [args.origin] The API region
 * @param {String} [args.locale] The API locale
 * @param {String} [args.key] The API client ID
 * @param {String} [args.secret] The API client secret
 * @param {String} [args.token] The API access token
 * @param {Object} [instance] An [axios](https://github.com/mzabriskie/axios) compatible instance configuration
 */
const Blizzard = function Blizzard(args, instance) {
  const { key, secret, token } = args;
  const { origin, locale } = endpoints.getEndpoint(args.origin, args.locale);

  this.version = pkg.version;
  this.defaults = {
    origin,
    locale,
    key,
    secret,
    token,
  };
  this.axios = axios.create(instance);

  /**
   * Account API methods.
   *
   * @member {Object}
   * @see {@link lib/account}
   */
  this.account = new Account(this);

  /**
   * Profile API methods.
   *
   * @member {Object}
   * @see {@link lib/profile}
   */
  this.profile = new Profile(this);

  /**
   * Hearthstone API methods.
   *
   * @member {Object}
   * @see {@link lib/hs}
   */
  this.hs = new Hearthstone(this);

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
 * @param {String} tag A user battletag "tag#1234"
 * @return {String} A safe battletag "tag-1234"
 */
Blizzard.prototype.battletag = function battletag(tag) {
  return tag.replace('#', '-');
};

/**
 * Perform a single request to the Blizzard API.
 *
 * @param {String} path The pathname of the API resource
 * @param {Object} [args] API request parameters
 * @param {String} [args.origin] The region key
 * @param {String} [args.locale] A locale code for this region
 * @return {Promise} A thenable Promises/A+ reference
 */
Blizzard.prototype.get = function get(path, args) {
  const { origin, locale, token, params, namespace } = pick(merge({}, this.defaults, args), [
    'origin',
    'locale',
    'token',
    'params',
    'namespace',
  ]);
  const endpoint = endpoints.getEndpoint(origin, locale, path);

  return this.axios.get(`${endpoint.hostname}${encodeURI(path)}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'User-Agent': `Node.js/${process.versions.node} Blizzard.js/${this.version}`,
    },
    params: {
      ...params,
      locale: endpoint.locale,
      ...(namespace ? { namespace: `${namespace}-${origin}` } : {}),
    },
  });
};

/**
 * Fetch an application access token.
 *
 * @param {Object} [args]
 * @param {String} [args.key] The application client ID
 * @param {String} [args.secret] The application client secret
 * @return {Promise} A thenable Promises/A+ reference
 */
Blizzard.prototype.getApplicationToken = function getApplicationToken(args) {
  const { origin, key, secret } = pick(merge({}, this.defaults, args), ['origin', 'key', 'secret', 'type']);

  return this.axios.get(`https://${origin}.battle.net/oauth/token`, {
    auth: {
      username: key,
      password: secret,
    },
    headers: {
      'User-Agent': `Node.js/${process.versions.node} Blizzard.js/${this.version}`,
    },
    params: {
      grant_type: 'client_credentials',
    },
  });
};

/**
 * Check the details of an application token.
 *
 * @param {Object} [args]
 * @param {String} [args.token] The application token to be validated
 * @return {Promise} A thenable Promises/A+ reference
 */
Blizzard.prototype.validateApplicationToken = function validateApplicationToken(args) {
  const { origin, token } = pick(merge({}, this.defaults, args), ['origin', 'token']);

  return this.axios({
    method: 'post',
    url: `https://${origin}.battle.net/oauth/check_token`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-Agent': `Node.js/${process.versions.node} Blizzard.js/${this.version}`,
    },
    data: qs.stringify({
      token,
    }),
  });
};

/**
 * Perform multiple requests to the Blizzard API.
 *
 * @param {Array} requests A list of Blizzard get requests
 * @return {Promise} A thenable Promises/A+ reference
 */
Blizzard.prototype.all = function all(requests) {
  return this.axios.all(requests);
};

module.exports = Blizzard;
