/**
 * @file Exports the Diablo 3 API methods.
 * @module lib/d3
 */

/**
 * Diablo 3 class constructor.
 *
 * @constructor
 * @param  {Object} blizzard A Blizzard.js instance
 * @return {Function}        D3 constructor function
 */
const D3 = function D3 (blizzard) {
  this.blizzard = blizzard;
};

/**
 * Fetch a Diablo 3 data resource.
 *
 * @param  {Object} key           The data resource key
 * @param  {Object} args          The data resource request arguments
 * @param  {String} args.id       The data resouce ID
 * @param  {String} [args.origin] The region key
 * @param  {String} [args.locale] A locale code for this region
 * @param  {Object} [instance]    An [axios](https://github.com/mzabriskie/axios) compatible instance configuration
 * @return {Promise}              A thenable Promises/A+ reference
 */
D3.prototype.data = function data (key, args, instance) {
  return this.blizzard.get(`/d3/data/${key}/${args.id.replace(/^item\//, '')}`, args, instance);
};

/**
 * Fetch Diablo 3 era data.
 *
 * @param  {Object} args                The era request arguments
 * @param  {String} [args.id]           The era ID
 * @param  {String} [args.leaderboard]  The era leaderboard key
 * @param  {String} [args.access_token] A user access token
 * @param  {String} [args.origin]       The region key
 * @param  {String} [args.locale]       A locale code for this region
 * @param  {Object} [instance]          An [axios](https://github.com/mzabriskie/axios) compatible instance configuration
 * @return {Promise}                    A thenable Promises/A+ reference
 */
D3.prototype.era = function era (args, instance) {
  const obj = Object.assign({}, args);
  const params = obj.access_token ? { access_token: obj.access_token } : {};
  const inst = Object.assign({}, instance, { params });

  if (!obj.id) {
    return this.blizzard.get('/data/d3/era/', obj, inst);
  }

  if (!obj.leaderboard) {
    return this.blizzard.get(`/data/d3/era/${obj.id}`, obj, inst);
  }

  return this.blizzard.get(`/data/d3/era/${obj.id}/leaderboard/${obj.leaderboard}`, obj, inst);
};

/**
 * Fetch Diablo 3 profile data.
 *
 * @param  {Object} args                The profile request arguments
 * @param  {String} args.tag            The user battletag
 * @param  {String} [args.hero]         The hero name
 * @param  {String} [args.itemTypes]    The hero items to fetch {items, follower-items}
 * @param  {String} [args.origin]       The region key
 * @param  {String} [args.locale]       A locale code for this region
 * @param  {Object} [instance]          An [axios](https://github.com/mzabriskie/axios) compatible instance configuration
 * @return {Promise}                    A thenable Promises/A+ reference
 */
D3.prototype.profile = function profile (args, instance) {
  const tag = this.blizzard.battletag(args.tag);

  if (!args.hero) {
    return this.blizzard.get(`/d3/profile/${tag}/`, args, instance);
  }

  if (args.hero && args.itemTypes) {
    return this.blizzard.get(`/d3/profile/${tag}/hero/${args.hero}/${args.itemTypes}`, args, instance);
  }

  return this.blizzard.get(`/d3/profile/${tag}/hero/${args.hero}`, args, instance);
};

/**
 * Fetch Diablo 3 season data.
 *
 * @param  {Object} args                The season request arguments
 * @param  {String} [args.id]           The season ID
 * @param  {String} [args.leaderboard]  The season leaderboard key
 * @param  {String} [args.access_token] A user access token
 * @param  {String} [args.origin]       The region key
 * @param  {String} [args.locale]       A locale code for this region
 * @param  {Object} [instance]          An [axios](https://github.com/mzabriskie/axios) compatible instance configuration
 * @return {Promise}                    A thenable Promises/A+ reference
 */
D3.prototype.season = function season (args, instance) {
  const obj = Object.assign({}, args);
  const params = obj.access_token ? { access_token: obj.access_token } : {};
  const inst = Object.assign({}, instance, { params });

  if (!obj.id) {
    return this.blizzard.get('/data/d3/season/', obj, inst);
  }

  if (!obj.leaderboard) {
    return this.blizzard.get(`/data/d3/season/${obj.id}`, obj, inst);
  }

  return this.blizzard.get(`/data/d3/season/${obj.id}/leaderboard/${obj.leaderboard}`, obj, inst);
};

module.exports = D3;
