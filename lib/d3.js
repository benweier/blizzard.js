/**
 * @file Exports the Diablo 3 API methods.
 * @module lib/d3
 */

/**
 * Diablo 3 class constructor.
 *
 * @constructor
 * @param  {Object} blizzard A Blizzard.js instance
 */
const D3 = function D3(blizzard) {
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
 * @return {Promise}              A thenable Promises/A+ reference
 */
D3.prototype.data = function getData(key, { id = '', ...args } = {}) {
  return this.blizzard.get(`/d3/data/${key}/${id.replace(/^item\//, '')}`, args);
};

/**
 * Fetch Diablo 3 era data.
 *
 * @param  {Object} args               The era request arguments
 * @param  {String} [args.id]          The era ID
 * @param  {String} [args.leaderboard] The era leaderboard key
 * @param  {String} [args.token]       A user access token
 * @param  {String} [args.origin]      The region key
 * @param  {String} [args.locale]      A locale code for this region
 * @return {Promise}                   A thenable Promises/A+ reference
 */
D3.prototype.era = function getEra({ id = '', leaderboard, ...args } = {}) {
  if (id && leaderboard) {
    return this.blizzard.get(`/data/d3/era/${id}/leaderboard/${leaderboard}`, args);
  }

  return this.blizzard.get(`/data/d3/era/${id}`, args);
};

/**
 * Fetch Diablo 3 profile data.
 *
 * @param  {Object} args             The profile request arguments
 * @param  {String} args.tag         The user battletag
 * @param  {String} [args.hero]      The hero name
 * @param  {String} [args.itemTypes] The hero items to fetch {items, follower-items}
 * @param  {String} [args.origin]    The region key
 * @param  {String} [args.locale]    A locale code for this region
 * @return {Promise}                 A thenable Promises/A+ reference
 */
D3.prototype.profile = function getProfile({ tag, hero, itemTypes, ...args } = {}) {
  const battletag = this.blizzard.battletag(tag);

  if (hero && itemTypes) {
    return this.blizzard.get(`/d3/profile/${battletag}/hero/${hero}/${itemTypes}`, args);
  }

  if (hero) {
    return this.blizzard.get(`/d3/profile/${battletag}/hero/${hero}`, args);
  }

  return this.blizzard.get(`/d3/profile/${battletag}/`, args);
};

/**
 * Fetch Diablo 3 season data.
 *
 * @param  {Object} args               The season request arguments
 * @param  {String} [args.id]          The season ID
 * @param  {String} [args.leaderboard] The season leaderboard key
 * @param  {String} [args.token]       A user access token
 * @param  {String} [args.origin]      The region key
 * @param  {String} [args.locale]      A locale code for this region
 * @return {Promise}                   A thenable Promises/A+ reference
 */
D3.prototype.season = function getSeason({ id = '', leaderboard, ...args } = {}) {
  if (id && leaderboard) {
    return this.blizzard.get(`/data/d3/season/${id}/leaderboard/${leaderboard}`, args);
  }

  return this.blizzard.get(`/data/d3/season/${id}`, args);
};

module.exports = D3;
