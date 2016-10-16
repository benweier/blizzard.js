/**
 * @file Exports the Auth API methods.
 * @module lib/account
 */
'use strict';

/**
 * Auth class constructor.
 *
 * @constructor
 * @param  {Object} blizzard A Blizzard.js instance
 * @return {Function}        Auth constructor function
 */
const Auth = function Auth (blizzard) {
  this.blizzard = blizzard;
};

/**
 * Fetch user account data.
 *
 * @param  {Object} args          The user request arguments
 * @param  {String} args.token    The user access token
 * @param  {String} [args.origin] The region key
 * @param  {String} [args.locale] A locale code for this region
 * @param  {Object} [instance]    An [axios](https://github.com/mzabriskie/axios) compatible instance configuration
 * @return {Promise}              A thenable Promises/A+ reference
 */
Auth.prototype.user = function user (args, instance) {
  return this.blizzard.get('/account/user', args, instance);
};

/**
 * Fetch World of Warcraft character data.
 *
 * @param  {Object} args          The request arguments
 * @param  {String} args.token    The user access token
 * @param  {String} [args.origin] The region key
 * @param  {String} [args.locale] A locale code for this region
 * @param  {Object} [instance]    An [axios](https://github.com/mzabriskie/axios) compatible instance configuration
 * @return {Promise}              A thenable Promises/A+ reference
 */
Auth.prototype.wow = function wow (args, instance) {
  return this.blizzard.get('/wow/user/characters', args, instance);
};

/**
 * Fetch Starcraft 2 profile data.
 *
 * @param  {Object} args          The user request arguments
 * @param  {String} args.token    The user access token
 * @param  {String} [args.origin] The region key
 * @param  {String} [args.locale] A locale code for this region
 * @param  {Object} [instance]    An [axios](https://github.com/mzabriskie/axios) compatible instance configuration
 * @return {Promise}              A thenable Promises/A+ reference
 */
Auth.prototype.sc2 = function sc2 (args, instance) {
  return this.blizzard.get('/sc2/profile/user', args, instance);
};

module.exports = Account;
