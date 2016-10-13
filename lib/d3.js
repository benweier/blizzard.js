/**
 * @file Exports the Diablo 3 API methods.
 * @module lib/d3
 */
'use strict';

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
 * @param  {Object} [instance]    An instance config object compatible with [axios]{@link https://github.com/mzabriskie/axios}
 * @return {Promise}              A thenable Promises/A+ reference
 */
D3.prototype.data = function data (key, args, instance) {
  return this.blizzard.get(`/d3/data/${key}/${args.id.replace(/^item\//, '')}`, args, instance);
};

/**
 * Fetch Diablo 3 era data.
 *
 * @param  {Object} args               The era request arguments
 * @param  {String} args.token         A user access token
 * @param  {String} [args.id]          The era id
 * @param  {String} [args.leaderboard] The era leadeboard id
 * @param  {String} [args.origin]      The region key
 * @param  {String} [args.locale]      A locale code for this region
 * @param  {Object} [instance]         An instance config object compatible with [axios]{@link https://github.com/mzabriskie/axios}
 * @return {Promise}                   A thenable Promises/A+ reference
 */
D3.prototype.era = function era (args, instance) {
  const obj = Object.assign({}, args);
  const params = obj.token ? { access_token: obj.token } : {};

  if (!obj.id) {
    return this.blizzard.get('/data/d3/era/', obj, Object.assign({}, instance, { params }));
  }

  if (!obj.leaderboard) {
    return this.blizzard.get(`/data/d3/era/${obj.id}`, obj, Object.assign({}, instance, { params }));
  }

  return this.blizzard.get(`/data/d3/era/${obj.id}/leaderboard/${obj.leaderboard}`, obj, Object.assign({}, instance, { params }));
};

/**
 * Fetch Diablo 3 profile data.
 *
 * @param  {Object} args          The profile request arguments
 * @param  {String} args.tag      The user battletag
 * @param  {String} [args.hero]   The hero name
 * @param  {String} [args.origin] The region key
 * @param  {String} [args.locale] A locale code for this region
 * @param  {Object} [instance]    An instance config object compatible with [axios]{@link https://github.com/mzabriskie/axios}
 * @return {Promise}              A thenable Promises/A+ reference
 */
D3.prototype.profile = function profile (args, instance) {
  if (!args.hero) {
    return this.blizzard.get(`/d3/profile/${args.tag}/`, args, instance);
  }

  return this.blizzard.get(`/d3/profile/${args.tag}/hero/${args.hero}`, args, instance);
};

/**
 * Fetch Diablo 3 season data.
 *
 * @param  {Object} args               The season request arguments
 * @param  {String} [args.id]      The season ID
 * @param  {String} [args.leaderboard] The season leaderboard ID
 * @param  {String} [args.origin]      The region key
 * @param  {String} [args.locale]      A locale code for this region
 * @param  {Object} [instance]         An instance config object compatible with [axios]{@link https://github.com/mzabriskie/axios}
 * @return {Promise}                   A thenable Promises/A+ reference
 */
D3.prototype.season = function season (args, instance) {
  const obj = Object.assign({}, args);
  const params = obj.token ? { access_token: obj.token } : {};

  if (!obj.id) {
    return this.blizzard.get('/data/d3/season/', obj, Object.assign({}, instance, { params }));
  }

  if (!obj.leaderboard) {
    return this.blizzard.get(`/data/d3/season/${obj.id}`, obj, Object.assign({}, instance, { params }));
  }

  return this.blizzard.get(`/data/d3/season/${obj.id}/leaderboard/${obj.leaderboard}`, obj, Object.assign({}, instance, { params }));
};

module.exports = D3;
