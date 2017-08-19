/**
 * @file Exports the Game Data API methods.
 * @module lib/data
 */

/**
 * Data class constructor.
 *
 * @constructor
 * @param  {Object} blizzard A Blizzard.js instance
 * @return {Function}        Data constructor function
 */
const Data = function Data (blizzard) {
  this.blizzard = blizzard;
};

/**
 * Fetch connected realm data.
 *
 * @param  {Object} args              The user request arguments
 * @param  {String} args.access_token The user access token
 * @param  {String} args.namespace    The game data namespace
 * @param  {String} [args.id]         The connected realm index
 * @param  {String} [args.origin]     The region key
 * @param  {String} [args.locale]     A locale code for this region
 * @param  {Object} [instance]        An [axios](https://github.com/mzabriskie/axios) compatible instance configuration
 * @return {Promise}                  A thenable Promises/A+ reference
 */
Data.prototype.connectedRealm = function connectedRealm (args, instance) {
  if (args.id) {
    return this.blizzard.get(`/data/wow/connected-realm/${args.id}`, args, instance);
  }

  return this.blizzard.get('/data/wow/connected-realm/', args, instance);
};

/**
 * Fetch mythic keystone leaderboard data.
 *
 * @param  {Object} args              The request arguments
 * @param  {String} args.access_token The user access token
 * @param  {String} args.namespace    The game data namespace
 * @param  {String} args.id           The connected realm id
 * @param  {String} [args.period]     The mythic leaderboard period
 * @param  {String} [args.origin]     The region key
 * @param  {String} [args.locale]     A locale code for this region
 * @param  {Object} [instance]        An [axios](https://github.com/mzabriskie/axios) compatible instance configuration
 * @return {Promise}                  A thenable Promises/A+ reference
 */
Data.prototype.mythicLeaderboard = function mythicLeaderboard (args, instance) {
  if (args.id && args.period) {
    return this.blizzard.get(`/data/wow/connected-realm/${args.id}/mythic-leaderboard/period/${args.period}`, args, instance);
  }

  return this.blizzard.get(`/data/wow/connected-realm/${args.id}/mythic-leaderboard/`, args, instance);
};

/**
 * Fetch realm data.
 *
 * @param  {Object} args              The user request arguments
 * @param  {String} args.access_token The user access token
 * @param  {String} args.namespace    The game data namespace
 * @param  {String} [args.realm]      The realm slug
 * @param  {String} [args.origin]     The region key
 * @param  {String} [args.locale]     A locale code for this region
 * @param  {Object} [instance]        An [axios](https://github.com/mzabriskie/axios) compatible instance configuration
 * @return {Promise}                  A thenable Promises/A+ reference
 */
Data.prototype.realm = function realm (args, instance) {
  if (args.realm) {
    return this.blizzard.get(`/data/wow/realm/${args.realm}`, args, instance);
  }

  return this.blizzard.get('/data/wow/realm/', args, instance);
};

/**
 * Fetch region data.
 *
 * @param  {Object} args              The user request arguments
 * @param  {String} args.access_token The user access token
 * @param  {String} args.namespace    The game data namespace
 * @param  {String} [args.region]     The region id
 * @param  {String} [args.origin]     The region key
 * @param  {String} [args.locale]     A locale code for this region
 * @param  {Object} [instance]        An [axios](https://github.com/mzabriskie/axios) compatible instance configuration
 * @return {Promise}                  A thenable Promises/A+ reference
 */
Data.prototype.region = function region (args, instance) {
  if (args.region) {
    return this.blizzard.get(`/data/wow/region/${args.region}`, args, instance);
  }

  return this.blizzard.get('/data/wow/region/', args, instance);
};

/**
 * Fetch token data.
 *
 * @param  {Object} args              The user request arguments
 * @param  {String} args.access_token The user access token
 * @param  {String} args.namespace    The game data namespace
 * @param  {String} [args.origin]     The region key
 * @param  {String} [args.locale]     A locale code for this region
 * @param  {Object} [instance]        An [axios](https://github.com/mzabriskie/axios) compatible instance configuration
 * @return {Promise}                  A thenable Promises/A+ reference
 */
Data.prototype.token = function token (args, instance) {
  return this.blizzard.get('/data/wow/token/', args, instance);
};

module.exports = Data;
