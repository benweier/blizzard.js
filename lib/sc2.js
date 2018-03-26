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
const SC2 = function SC2 (blizzard) {
  this.blizzard = blizzard;
};

/**
 * Fetch a Starcraft 2 data resource.
 *
 * @param  {Object} key           The resource key
 * @param  {Object} args          The resource request arguments
 * @param  {String} [args.origin] The region key
 * @param  {String} [args.locale] A locale code for this region
 * @param  {Object} [instance]    An [axios](https://github.com/mzabriskie/axios) compatible instance configuration
 * @return {Promise}              A thenable Promises/A+ reference
 */
SC2.prototype.data = function data (key, args, instance) {
  return this.blizzard.get(`/sc2/data/${key}`, args, instance);
};

/**
 * Fetch Starcraft 2 ladder data.
 *
 * @param  {Object} args          The ladder request arguments
 * @param  {Number} args.id       The ladder ID
 * @param  {String} [args.origin] The region key
 * @param  {String} [args.locale] A locale code for this region
 * @param  {Object} [instance]    An [axios](https://github.com/mzabriskie/axios) compatible instance configuration
 * @return {Promise}              A thenable Promises/A+ reference
 */
SC2.prototype.ladder = function ladder (args, instance) {
  return this.blizzard.get(`/sc2/ladder/${args.id}`, args, instance);
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
 * @param  {Object} [instance]      An [axios](https://github.com/mzabriskie/axios) compatible instance configuration
 * @return {Promise}                A thenable Promises/A+ reference
 */
SC2.prototype.profile = function profile (key, args, instance) {
  const obj = Object.assign({}, { region: 1 }, args);
  const path = key === 'profile' ? `/sc2/profile/${obj.id}/${obj.region}/${obj.name}/` : `/sc2/profile/${obj.id}/${obj.region}/${obj.name}/${key}`;

  return this.blizzard.get(path, obj, instance);
};

module.exports = SC2;
