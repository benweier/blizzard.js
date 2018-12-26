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
 * @param  {Number} [args.realmID] A connected realm ID
 * @param  {String} [args.origin]  The region key
 * @param  {String} [args.locale]  A locale code for this region
 * @return {Promise}               A thenable Promises/A+ reference
 */
Data.prototype.connectedRealm = function getConnectedRealm({ realm = 'index', ...args } = {}) {
  return this.blizzard.get(
    `/data/wow/connected-realm/${realm}`,
    merge({}, args, {
      namespace: 'dynamic',
    }),
  );
};

/**
 * Fetch keytone affix game data.
 *
 * @param  {Object} args           The data request arguments
 * @param  {Number} [args.affixID] A keystone affix ID
 * @param  {String} [args.origin]  The region key
 * @param  {String} [args.locale]  A locale code for this region
 * @return {Promise}               A thenable Promises/A+ reference
 */
Data.prototype.keystoneAffix = function getKeystoneAffix({ affixID = 'index', ...args } = {}) {
  return this.blizzard.get(
    `/data/wow/keystone-affix/${affixID}`,
    merge({}, args, {
      namespace: 'static',
    }),
  );
};

/**
 * Fetch mythic raid leaderboard game data.
 *
 * @param  {Object} args          The request arguments
 * @param  {String} args.raid     The raid slug
 * @param  {String} args.faction  The mythic leaderboard period
 * @param  {String} [args.origin] The region key
 * @param  {String} [args.locale] A locale code for this region
 * @return {Promise}              A thenable Promises/A+ reference
 */
Data.prototype.mythicRaidLeaderboard = function getMythicRaidLeaderboard({ raid, faction, ...args } = {}) {
  return this.blizzard.get(
    `/data/wow/leaderboard/hall-of-fame/${raid}/${faction}`,
    merge({}, args, {
      namespace: 'dynamic',
    }),
  );
};

/**
 * Fetch mythic keystone game data.
 *
 * @param  {Object} key              The data resource key
 * @param  {Object} args             The request arguments
 * @param  {Number} [args.dungeonID] The dungeon ID
 * @param  {String} [args.origin]    The region key
 * @param  {String} [args.locale]    A locale code for this region
 * @return {Promise}                 A thenable Promises/A+ reference
 */
Data.prototype.mythicDungeonKeystone = function getMythicDungeonKeystone(key, { dungeonID = 'index', ...args } = {}) {
  return this.blizzard.get(
    `/data/wow/mythic-keystone/${key}/${dungeonID}`,
    merge({}, args, {
      namespace: 'dynamic',
    }),
  );
};

/**
 * Fetch mythic keystone leaderboard game data.
 *
 * @param  {Object} args             The request arguments
 * @param  {Number} args.realmID     The connected realm ID
 * @param  {Number} [args.dungeonID] The dungeon ID
 * @param  {Number} [args.periodID]  The mythic leaderboard period ID
 * @param  {String} [args.origin]    The region key
 * @param  {String} [args.locale]    A locale code for this region
 * @return {Promise}                 A thenable Promises/A+ reference
 */
Data.prototype.mythicKeystoneLeaderboard = function getMythicKeystoneLeaderboard({
  realmID,
  dungeonID = 'index',
  periodID,
  ...args
} = {}) {
  if (realmID && dungeonID && periodID) {
    return this.blizzard.get(
      `/data/wow/connected-realm/${realmID}/mythic-leaderboard/${dungeonID}/period/${periodID}`,
      merge({}, args, {
        namespace: 'dynamic',
      }),
    );
  }

  return this.blizzard.get(
    `/data/wow/connected-realm/${realmID}/mythic-leaderboard/${dungeonID}`,
    merge({}, args, {
      namespace: 'dynamic',
    }),
  );
};

/**
 * Fetch playable class game data.
 *
 * @param  {Object} args           The request arguments
 * @param  {Number} [args.classID] A playable class ID
 * @param  {String} [args.origin]  The region key
 * @param  {String} [args.locale]  A locale code for this region
 * @return {Promise}               A thenable Promises/A+ reference
 */
Data.prototype.playableClass = function getPlayableClass({ classID = 'index', ...args } = {}) {
  return this.blizzard.get(
    `/data/wow/playable-class/${classID}`,
    merge({}, args, {
      namespace: 'static',
    }),
  );
};

/**
 * Fetch playable class PVP talent slots game data.
 *
 * @param  {Object} args          The request arguments
 * @param  {Number} args.classID  The playable class ID
 * @param  {String} [args.origin] The region key
 * @param  {String} [args.locale] A locale code for this region
 * @return {Promise}              A thenable Promises/A+ reference
 */
Data.prototype.pvpTalentSlots = function getPvpTalentSlots({ classID, ...args } = {}) {
  return this.blizzard.get(
    `/data/wow/playable-class/${classID}/pvp-talent-slots`,
    merge({}, args, {
      namespace: 'static',
    }),
  );
};

/**
 * Fetch playable specialization game data.
 *
 * @param  {Object} args          The request arguments
 * @param  {Object} [args.specID] A specialization ID
 * @param  {String} [args.origin] The region key
 * @param  {String} [args.locale] A locale code for this region
 * @return {Promise}              A thenable Promises/A+ reference
 */
Data.prototype.playableSpecialization = function getPlayableSpecialization({ specID = 'index', ...args } = {}) {
  return this.blizzard.get(
    `/data/wow/playable-specialization/${specID}`,
    merge({}, args, {
      namespace: 'static',
    }),
  );
};

/**
 * Fetch power types game data.
 *
 * @param  {Object} args           The request arguments
 * @param  {Object} [args.powerID] A power type ID
 * @param  {String} [args.origin]  The region key
 * @param  {String} [args.locale]  A locale code for this region
 * @return {Promise}               A thenable Promises/A+ reference
 */
Data.prototype.powerType = function getPowerType({ powerID = 'index', ...args } = {}) {
  return this.blizzard.get(
    `/data/wow/power-type/${powerID}`,
    merge({}, args, {
      namespace: 'static',
    }),
  );
};

/**
 * Fetch playable race game data.
 *
 * @param  {Object} args          The request arguments
 * @param  {Object} [args.raceID] A playable race ID
 * @param  {String} [args.origin] The region key
 * @param  {String} [args.locale] A locale code for this region
 * @return {Promise}              A thenable Promises/A+ reference
 */
Data.prototype.playableRace = function getPlayableRace({ raceID = 'index', ...args } = {}) {
  return this.blizzard.get(
    `/data/wow/race/${raceID}`,
    merge({}, args, {
      namespace: 'static',
    }),
  );
};

/**
 * Fetch realm game data.
 *
 * @param  {Object} args          The data request arguments
 * @param  {String} [args.realm]  A realm slug
 * @param  {String} [args.origin] The region key
 * @param  {String} [args.locale] A locale code for this region
 * @return {Promise}              A thenable Promises/A+ reference
 */
Data.prototype.realm = function getRealm({ realm = 'index', ...args } = {}) {
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
 * @param  {Object} args            The data request arguments
 * @param  {Number} [args.regionID] A region ID
 * @param  {String} [args.origin]   The region key
 * @param  {String} [args.locale]   A locale code for this region
 * @return {Promise}                A thenable Promises/A+ reference
 */
Data.prototype.region = function getRegion({ regionID = 'index', ...args } = {}) {
  return this.blizzard.get(
    `/data/wow/region/${regionID}`,
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
