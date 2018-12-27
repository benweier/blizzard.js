/**
 * @file Exports the Starcraft 2 API methods.
 * @module lib/sc2
 */

/**
 * Starcraft 2 class constructor.
 *
 * @constructor
 * @param  {Object} blizzard A Blizzard.js instance
 * @return {Function}        SC2 constructor function
 */
const SC2 = function SC2(blizzard) {
  this.blizzard = blizzard;
};

/**
 * Fetch a Starcraft 2 data resource.
 *
 * @param  {Object} key           The resource key
 * @param  {Object} args          The resource request arguments
 * @param  {String} [args.origin] The region key
 * @param  {String} [args.locale] A locale code for this region
 * @return {Promise}              A thenable Promises/A+ reference
 */
SC2.prototype.data = function getData(key, args) {
  return this.blizzard.get(`/sc2/data/${key}`, args);
};

/**
 * Fetch Starcraft 2 ladder data.
 *
 * @param  {Object} args          The ladder request arguments
 * @param  {Number} args.id       The ladder ID
 * @param  {String} [args.origin] The region key
 * @param  {String} [args.locale] A locale code for this region
 * @return {Promise}              A thenable Promises/A+ reference
 */
SC2.prototype.ladder = function getLadder({ id, ...args }) {
  return this.blizzard.get(`/sc2/ladder/${id}`, args);
};

/**
 * Fetch Starcraft 2 profile data.
 *
 * @param  {String} key             The profile key
 * @param  {Object} args            The profile request arguments
 * @param  {Number} args.id         The profile ID
 * @param  {String} args.name       The profile name
 * @param  {String} [args.region=1] The profile region
 * @param  {String} [args.origin]   The region key
 * @param  {String} [args.locale]   A locale code for this region
 * @return {Promise}                A thenable Promises/A+ reference
 */
SC2.prototype.profile = function getProfile(key, { id, name, region = 1, ...args }) {
  const path =
    key === 'profile' ? `/sc2/profile/${id}/${region}/${name}/` : `/sc2/profile/${id}/${region}/${name}/${key}`;

  return this.blizzard.get(path, args);
};

module.exports = SC2;
