/**
 * @file Exports the Game Data API methods.
 * @module lib/data
 */

const merge = require('lodash.merge');

/**
 * Game Data class constructor.
 *
 * @constructor
 * @param  {Object} blizzard A Blizzard.js instance
 * @return {Function}        Data constructor function
 */
const Data = function Data(blizzard) {
  this.blizzard = blizzard;
};

/**
 * Fetch an application access token.
 *
 * @param  {Object} args        The data request arguments
 * @param  {String} args.key    The application client ID
 * @param  {String} args.secret The application client secret
 * @param  {String} args.origin The region key
 * @return {Promise}            A thenable Promises/A+ reference
 */
Data.prototype.credentials = function credentials(args = {}) {
  return this.blizzard.fetchToken({ type: 'client_credentials', ...args });
};

/**
 * Check the details of an application token.
 *
 * @param  {Object} args        The data request arguments
 * @param  {String} args.origin The region key
 * @param  {String} args.token  The application token.
 * @return {Promise}            A thenable Promises/A+ reference
 */
Data.prototype.validate = function validate(args = {}) {
  return this.blizzard.checkToken(args);
};

/**
 * Fetch connected realm game data.
 *
 * @param  {Object} args           The data request arguments
 * @param  {Number} [args.realm]   The connected realm id
 * @param  {String} [args.origin]  The region key
 * @param  {String} [args.locale]  A locale code for this region
 * @return {Promise}               A thenable Promises/A+ reference
 */
Data.prototype.connectedRealm = function getConnectedRealm({ realm = '', ...args } = {}) {
  return this.blizzard.get(
    `/data/wow/connected-realm/${realm}`,
    merge({}, args, {
      namespace: 'dynamic',
    }),
  );
};

/**
 * Fetch mythic keystone leaderboard game data.
 *
 * @param  {Object} args           The request arguments
 * @param  {Number} args.realm     The connected realm id
 * @param  {Number} [args.dungeon] The dungeon id
 * @param  {Number} [args.period]  The mythic leaderboard period
 * @param  {String} [args.origin]  The region key
 * @param  {String} [args.locale]  A locale code for this region
 * @return {Promise}               A thenable Promises/A+ reference
 */
Data.prototype.mythicLeaderboard = function getMythicLeaderboard({ realm, dungeon, period, ...args } = {}) {
  if (realm && dungeon && period) {
    return this.blizzard.get(
      `/data/wow/connected-realm/${realm}/mythic-leaderboard/${dungeon}/period/${period}`,
      merge({}, args, {
        namespace: 'dynamic',
      }),
    );
  }

  return this.blizzard.get(
    `/data/wow/connected-realm/${realm}/mythic-leaderboard/`,
    merge({}, args, {
      namespace: 'dynamic',
    }),
  );
};

/**
 * Fetch mythic challenge mode relevant game data.
 *
 * @param  {Object} args           The request arguments
 * @param  {String} [args.origin]  The region key
 * @param  {String} [args.locale]  A locale code for this region
 * @return {Promise}               A thenable Promises/A+ reference
 */
Data.prototype.mythicChallengeMode = function getMythicLeaderboard(args = {}) {
  return this.blizzard.get(
    '/data/wow/mythic-challenge-mode/',
    merge({}, args, {
      namespace: 'dynamic',
    }),
  );
};

/**
 * Fetch realm game data.
 *
 * @param  {Object} args                The data request arguments
 * @param  {String|Number} [args.realm] The realm slug or id
 * @param  {String} [args.origin]       The region key
 * @param  {String} [args.locale]       A locale code for this region
 * @return {Promise}                    A thenable Promises/A+ reference
 */
Data.prototype.realm = function getRealm({ realm = '', ...args } = {}) {
  return this.blizzard.get(
    `/data/wow/realm/${realm}`,
    merge({}, args, {
      namespace: 'dynamic',
    }),
  );
};

/**
 * Fetch region game data.
 *
 * @param  {Object} args          The data request arguments
 * @param  {Number} [args.region] The region id
 * @param  {String} [args.origin] The region key
 * @param  {String} [args.locale] A locale code for this region
 * @return {Promise}              A thenable Promises/A+ reference
 */
Data.prototype.region = function getRegion({ region = '', ...args } = {}) {
  return this.blizzard.get(
    `/data/wow/region/${region}`,
    merge({}, args, {
      namespace: 'dynamic',
    }),
  );
};

/**
 * Fetch token game data.
 *
 * @param  {Object} args           The data request arguments
 * @param  {String} [args.origin]  The region key
 * @param  {String} [args.locale]  A locale code for this region
 * @return {Promise}               A thenable Promises/A+ reference
 */
Data.prototype.token = function getToken(args) {
  return this.blizzard.get(
    '/data/wow/token/',
    merge({}, args, {
      namespace: 'dynamic',
    }),
  );
};

module.exports = Data;
