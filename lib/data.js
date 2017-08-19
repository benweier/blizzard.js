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
 * Fetch connected realm game data.
 *
 * @param  {Object} args              The user request arguments
 * @param  {String} args.access_token The user access token
 * @param  {String} args.namespace    The game data namespace
 * @param  {Number} [args.realm]      The connected realm id
 * @param  {String} [args.origin]     The region key
 * @param  {String} [args.locale]     A locale code for this region
 * @param  {Object} [instance]        An [axios](https://github.com/mzabriskie/axios) compatible instance configuration
 * @return {Promise}                  A thenable Promises/A+ reference
 */
Data.prototype.connectedRealm = function connectedRealm (args, instance) {
  const obj = Object.assign({}, args);

  if (obj.realm) {
    return this.blizzard.get(`/data/wow/connected-realm/${obj.realm}`, args, instance);
  }

  return this.blizzard.get('/data/wow/connected-realm/', args, instance);
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
  const obj = Object.assign({}, args);

  if (obj.realm && obj.dungeon && obj.period) {
    return this.blizzard.get(`/data/wow/connected-realm/${obj.realm}/mythic-leaderboard/${obj.dungeon}/period/${obj.period}`, args, instance);
  }

  return this.blizzard.get(`/data/wow/connected-realm/${obj.realm}/mythic-leaderboard/`, args, instance);
};

/**
 * Fetch realm game data.
 *
 * @param  {Object} args                The user request arguments
 * @param  {String} args.access_token   The user access token
 * @param  {String} args.namespace      The game data namespace
 * @param  {String|Number} [args.realm] The realm slug or id
 * @param  {String} [args.origin]       The region key
 * @param  {String} [args.locale]       A locale code for this region
 * @param  {Object} [instance]          An [axios](https://github.com/mzabriskie/axios) compatible instance configuration
 * @return {Promise}                    A thenable Promises/A+ reference
 */
Data.prototype.realm = function realm (args, instance) {
  const obj = Object.assign({}, args);

  if (obj.realm) {
    return this.blizzard.get(`/data/wow/realm/${obj.realm}`, args, instance);
  }

  return this.blizzard.get('/data/wow/realm/', args, instance);
};

/**
 * Fetch region game data.
 *
 * @param  {Object} args              The user request arguments
 * @param  {String} args.access_token The user access token
 * @param  {String} args.namespace    The game data namespace
 * @param  {Number} [args.region]     The region id
 * @param  {String} [args.origin]     The region key
 * @param  {String} [args.locale]     A locale code for this region
 * @param  {Object} [instance]        An [axios](https://github.com/mzabriskie/axios) compatible instance configuration
 * @return {Promise}                  A thenable Promises/A+ reference
 */
Data.prototype.region = function region (args, instance) {
  const obj = Object.assign({}, args);

  if (obj.region) {
    return this.blizzard.get(`/data/wow/region/${obj.region}`, args, instance);
  }

  return this.blizzard.get('/data/wow/region/', args, instance);
};

/**
 * Fetch token game data.
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
