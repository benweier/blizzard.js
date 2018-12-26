/**
 * @file Exports the Profile API methods.
 * @module lib/data
 */

const merge = require('lodash.merge');

/**
 * Profile class constructor.
 *
 * @constructor
 * @param  {Object} blizzard A Blizzard.js instance
 */
const Profile = function Profile(blizzard) {
  this.blizzard = blizzard;
};

/**
 * Fetch mythic keystone profile data.
 *
 * @param  {Object} args            The data request arguments
 * @param  {String} args.realm      The realm slug
 * @param  {String} args.name       The character name
 * @param  {Number} [args.seasonID] A season ID
 * @param  {String} [args.origin]   The region key
 * @param  {String} [args.locale]   A locale code for this region
 * @return {Promise}                A thenable Promises/A+ reference
 */
Profile.prototype.mythicKeystoneProfile = function getCharacterMythicKeystoneProfile({
  realm,
  name,
  seasonID,
  ...args
} = {}) {
  if (seasonID) {
    return this.blizzard.get(
      `/profile/wow/character/${realm}/${name}/mythic-keystone-profile/season/${seasonID}`,
      merge({}, args, {
        namespace: 'profile',
      }),
    );
  }

  return this.blizzard.get(
    `/profile/wow/character/${realm}/${name}/mythic-keystone-profile`,
    merge({}, args, {
      namespace: 'profile',
    }),
  );
};

module.exports = Profile;
