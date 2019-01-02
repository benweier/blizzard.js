/**
 * @file Exports the Starcraft 2 API methods.
 * @module lib/sc2
 */

/**
 * Starcraft 2 class constructor.
 *
 * @constructor
 * @param {Object} blizzard A Blizzard.js instance
 */
const SC2 = function SC2(blizzard) {
  this.blizzard = blizzard;

  this.legacy = {
    /**
     * Fetch Starcraft 2 legacy profile data.
     *
     * @param {Object} args
     * @param {Number} args.profile The profile ID
     * @param {Number} args.realm The realm ID
     * @param {Number} args.region The region ID
     * @return {Promise} A thenable Promises/A+ reference
     */
    profile: function getLegacyProfile({ profile, realm, region, ...args }) {
      return this.blizzard.get(`/sc2/legacy/profile/${region}/${realm}/${profile}`, args);
    }.bind(this),

    /**
     * Fetch Starcraft 2 legacy profile ladders data.
     *
     * @param {Object} args
     * @param {Number} args.profile The profile ID
     * @param {Number} args.realm The realm ID
     * @param {Number} args.region The region ID
     * @return {Promise} A thenable Promises/A+ reference
     */
    profileLadders: function getLegacyProfileLadders({ profile, realm, region, ...args }) {
      return this.blizzard.get(`/sc2/legacy/profile/${region}/${realm}/${profile}/ladders`, args);
    }.bind(this),

    /**
     * Fetch Starcraft 2 legacy profile matches data.
     *
     * @param {Object} args
     * @param {Number} args.profile The profile ID
     * @param {Number} args.realm The realm ID
     * @param {Number} args.region The region ID
     * @return {Promise} A thenable Promises/A+ reference
     */
    profileMatches: function getLegacyProfileMatches({ profile, realm, region, ...args }) {
      return this.blizzard.get(`/sc2/legacy/profile/${region}/${realm}/${profile}/matches`, args);
    }.bind(this),

    /**
     * Fetch Starcraft 2 legacy ladder data.
     *
     * @param {Object} args
     * @param {Number} args.ladder The ladder ID
     * @param {Number} args.region The region ID
     * @return {Promise} A thenable Promises/A+ reference
     */
    ladder: function getLegacyLadder({ ladder, region, ...args }) {
      return this.blizzard.get(`/sc2/legacy/ladder/${region}/${ladder}`, args);
    }.bind(this),

    /**
     * Fetch Starcraft 2 legacy achievements data.
     *
     * @param {Object} args
     * @param {Number} args.region The region ID
     * @return {Promise} A thenable Promises/A+ reference
     */
    achievements: function getLegacyAchievements({ region, ...args }) {
      return this.blizzard.get(`/sc2/legacy/data/achievements/${region}`, args);
    }.bind(this),

    /**
     * Fetch Starcraft 2 legacy rewards data.
     *
     * @param {Object} args
     * @param {Number} args.region The region ID
     * @return {Promise} A thenable Promises/A+ reference
     */
    rewards: function getLegacyRewards({ region, ...args }) {
      return this.blizzard.get(`/sc2/legacy/data/rewards/${region}`, args);
    }.bind(this),
  };
};

/**
 * Fetch Starcraft 2 ladder data.
 *
 * @param {Object} args
 * @param {Number} args.region The region ID
 * @param {String} [args.ladder=season] The ladder key
 * @return {Promise} A thenable Promises/A+ reference
 */
SC2.prototype.ladder = function getLadder({ ladder = 'season', region, ...args }) {
  return this.blizzard.get(`/sc2/ladder/${ladder}/${region}`, args);
};

/**
 * Fetch Starcraft 2 static data.
 *
 * @param {Object} args
 * @param {Number} args.region The region ID
 * @return {Promise} A thenable Promises/A+ reference
 */
SC2.prototype.static = function getStatic({ region, ...args }) {
  return this.blizzard.get(`/sc2/static/profile/${region}`, args);
};

/**
 * Fetch Starcraft 2 metadata data.
 *
 * @param {Object} args
 * @param {Number} args.profile The profile ID
 * @param {Number} args.realm The realm ID
 * @param {Number} args.region The profile region ID
 * @return {Promise} A thenable Promises/A+ reference
 */
SC2.prototype.metadata = function getMetadata({ region, realm, profile, ...args }) {
  return this.blizzard.get(`/sc2/metadata/profile/${region}/${realm}/${profile}`, args);
};

/**
 * Fetch Starcraft 2 profile data.
 *
 * @param {Object} args
 * @param {Number} args.profile The profile ID
 * @param {Number} args.realm The realm ID
 * @param {Number} args.region The profile region ID
 * @return {Promise} A thenable Promises/A+ reference
 */
SC2.prototype.profile = function getProfile({ profile, realm, region, ...args }) {
  return this.blizzard.get(`/sc2/profile/${region}/${realm}/${profile}`, args);
};

/**
 * Fetch Starcraft 2 profile ladder data.
 *
 * @param {Object} args
 * @param {Number} args.profile The profile ID
 * @param {Number} args.realm The realm ID
 * @param {Number} args.region The profile region ID
 * @param {String} [args.ladder=summary] The ladder key
 * @return {Promise} A thenable Promises/A+ reference
 */
SC2.prototype.profileLadder = function getProfileLadder({ profile, realm, region, ladder = 'summary', ...args }) {
  return this.blizzard.get(`/sc2/profile/${region}/${realm}/${profile}/ladder/${ladder}`, args);
};

/**
 * Fetch Starcraft 2 player data.
 *
 * @param {Object} args
 * @param {Number} args.id The player ID
 * @return {Promise} A thenable Promises/A+ reference
 */
SC2.prototype.player = function getPlayer({ id, ...args }) {
  return this.blizzard.get(`/sc2/player/${id}`, args);
};

/**
 * Fetch Starcraft 2 league data.
 *
 * @param {Object} args
 * @param {Number} args.season The season ID
 * @param {Number} args.queue The queue ID
 * @param {Number} args.team The team ID
 * @param {Number} args.league The league ID
 * @return {Promise} A thenable Promises/A+ reference
 */
SC2.prototype.league = function getLeague({ season, queue, team, league, ...args }) {
  return this.blizzard.get(`/data/sc2/league/${season}/${queue}/${team}/${league}`, args);
};

module.exports = SC2;
