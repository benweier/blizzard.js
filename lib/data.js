/**
 * @file Exports the Game Data API methods.
 * @module lib/data
 */

/**
 * Game Data class constructor.
 *
 * @constructor
 * @param  {Object} blizzard A Blizzard.js instance
 * @return {Function}        Data constructor function
 */
const Data = function Data (blizzard) {
  this.blizzard = blizzard;
};

/**
 * Fetch an application access token.
 *
 * @param  {Object} args        The data request arguments
 * @param  {String} args.id     The application API key
 * @param  {String} args.secret The application secret key
 * @param  {String} args.origin The region key
 * @return {Promise}            A thenable Promises/A+ reference
 */
Data.prototype.credentials = function credentials (args) {
  const obj = Object.assign({}, args);
  const params = { grant_type: 'client_credentials', client_id: obj.id, client_secret: obj.secret };

  return this.blizzard.fetchToken(obj.origin, { params });
};

/**
 * Check the details of an application token.
 *
 * @param  {Object} args        The data request arguments
 * @param  {String} args.origin The region key
 * @param  {String} args.token  The application token.
 * @return {Promise}            A thenable Promises/A+ reference
 */
Data.prototype.validate = function validate (args) {
  const obj = Object.assign({}, args);
  const params = { token: obj.token };

  return this.blizzard.checkToken(obj.origin, { params });
};

/**
 * Fetch connected realm game data.
 *
 * @param  {Object} args              The data request arguments
 * @param  {String} args.access_token The user access token
 * @param  {String} args.namespace    The game data namespace
 * @param  {Number} [args.realm]      The connected realm id
 * @param  {String} [args.origin]     The region key
 * @param  {String} [args.locale]     A locale code for this region
 * @param  {Object} [instance]        An [axios](https://github.com/mzabriskie/axios) compatible instance configuration
 * @return {Promise}                  A thenable Promises/A+ reference
 */
Data.prototype.connectedRealm = function connectedRealm (args, instance) {
  const params = { namespace: args.namespace || `dynamic-${args.origin}` };

  if (args.realm) {
    return this.blizzard.get(`/data/wow/connected-realm/${args.realm}`, Object.assign({}, args, { params }), instance);
  }

  return this.blizzard.get('/data/wow/connected-realm/', Object.assign({}, args, { params }), instance);
};

/**
 * Fetch mythic keystone leaderboard game data.
 *
 * @param  {Object} args              The request arguments
 * @param  {String} args.access_token The user access token
 * @param  {String} args.namespace    The game data namespace
 * @param  {Number} args.realm        The connected realm id
 * @param  {Number} [args.dungeon]    The dungeon id
 * @param  {Number} [args.period]     The mythic leaderboard period
 * @param  {String} [args.origin]     The region key
 * @param  {String} [args.locale]     A locale code for this region
 * @param  {Object} [instance]        An [axios](https://github.com/mzabriskie/axios) compatible instance configuration
 * @return {Promise}                  A thenable Promises/A+ reference
 */
Data.prototype.mythicLeaderboard = function mythicLeaderboard (args, instance) {
  const params = { namespace: args.namespace || `dynamic-${args.origin}` };

  if (args.realm && args.dungeon && args.period) {
    return this.blizzard.get(`/data/wow/connected-realm/${args.realm}/mythic-leaderboard/${args.dungeon}/period/${args.period}`, Object.assign({}, args, { params }), instance);
  }

  return this.blizzard.get(`/data/wow/connected-realm/${args.realm}/mythic-leaderboard/`, Object.assign({}, args, { params }), instance);
};

/**
 * Fetch mythic challenge mode relevant game data.
 *
 * @param  {Object} args              The request arguments
 * @param  {String} args.access_token The user access token
 * @param  {String} args.namespace    The game data namespace
 * @param  {String} [args.origin]     The region key
 * @param  {String} [args.locale]     A locale code for this region
 * @param  {Object} [instance]        An [axios](https://github.com/mzabriskie/axios) compatible instance configuration
 * @return {Promise}                  A thenable Promises/A+ reference
 */
Data.prototype.mythicChallengeMode = function mythicLeaderboard (args, instance) {
  const params = { namespace: args.namespace || `dynamic-${args.origin}` };

  return this.blizzard.get('/data/wow/mythic-challenge-mode/', Object.assign({}, args, { params }), instance);
};

/**
 * Fetch realm game data.
 *
 * @param  {Object} args                The data request arguments
 * @param  {String} args.access_token   The user access token
 * @param  {String} args.namespace      The game data namespace
 * @param  {String|Number} [args.realm] The realm slug or id
 * @param  {String} [args.origin]       The region key
 * @param  {String} [args.locale]       A locale code for this region
 * @param  {Object} [instance]          An [axios](https://github.com/mzabriskie/axios) compatible instance configuration
 * @return {Promise}                    A thenable Promises/A+ reference
 */
Data.prototype.realm = function realm (args, instance) {
  const params = { namespace: args.namespace || `dynamic-${args.origin}` };

  if (args.realm) {
    return this.blizzard.get(`/data/wow/realm/${args.realm}`, Object.assign({}, args, { params }), instance);
  }

  return this.blizzard.get('/data/wow/realm/', Object.assign({}, args, { params }), instance);
};

/**
 * Fetch region game data.
 *
 * @param  {Object} args              The data request arguments
 * @param  {String} args.access_token The user access token
 * @param  {String} args.namespace    The game data namespace
 * @param  {Number} [args.region]     The region id
 * @param  {String} [args.origin]     The region key
 * @param  {String} [args.locale]     A locale code for this region
 * @param  {Object} [instance]        An [axios](https://github.com/mzabriskie/axios) compatible instance configuration
 * @return {Promise}                  A thenable Promises/A+ reference
 */
Data.prototype.region = function region (args, instance) {
  const params = { namespace: args.namespace || `dynamic-${args.origin}` };

  if (args.region) {
    return this.blizzard.get(`/data/wow/region/${args.region}`, Object.assign({}, args, { params }), instance);
  }

  return this.blizzard.get('/data/wow/region/', Object.assign({}, args, { params }), instance);
};

/**
 * Fetch token game data.
 *
 * @param  {Object} args              The data request arguments
 * @param  {String} args.access_token The user access token
 * @param  {String} args.namespace    The game data namespace
 * @param  {String} [args.origin]     The region key
 * @param  {String} [args.locale]     A locale code for this region
 * @param  {Object} [instance]        An [axios](https://github.com/mzabriskie/axios) compatible instance configuration
 * @return {Promise}                  A thenable Promises/A+ reference
 */
Data.prototype.token = function token (args, instance) {
  const params = { namespace: args.namespace || `dynamic-${args.origin}` };

  return this.blizzard.get('/data/wow/token/', Object.assign({}, args, { params }), instance);
};

module.exports = Data;
