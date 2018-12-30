/**
 * @file Exports the Profile API methods.
 * @module lib/data
 */

const merge = require('lodash.merge');

/**
 * Profile class constructor.
 *
 * @constructor
 * @param {Object} blizzard A Blizzard.js instance
 */
const Profile = function Profile(blizzard) {
  this.blizzard = blizzard;
};

/**
 * Fetch mythic keystone profile data.
 *
 * @param {Object} args
 * @param {String} args.realm The realm slug
 * @param {String} args.name The character name
 * @param {Number} [args.season] A season ID
 * @return {Promise} A thenable Promises/A+ reference
 */
Profile.prototype.mythicKeystoneProfile = function getCharacterMythicKeystoneProfile({ realm, name, season, ...args }) {
  if (season) {
    return this.blizzard.get(
      `/profile/wow/character/${realm}/${name}/mythic-keystone-profile/season/${season}`,
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
