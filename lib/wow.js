/**
 * @file Exports the World of Warcraft API methods.
 * @module lib/wow
 */

const merge = require('lodash.merge');

/**
 * World of Warcraft class constructor.
 *
 * @constructor
 * @param {Object} blizzard A Blizzard.js instance
 */
const WoW = function WoW(blizzard) {
  this.blizzard = blizzard;
};

/**
 * Fetch World of Warcraft achievement data.
 *
 * @param {Object} args
 * @param {Number} args.id The achievement ID
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.achievement = function getAchievement({ id, ...args }) {
  return this.blizzard.get(`/wow/achievement/${id}`, args);
};

/**
 * Fetch World of Warcraft auction data.
 *
 * @param {Object} args
 * @param {String} args.realm The realm name slug
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.auction = function getAuction({ realm, ...args }) {
  return this.blizzard.get(`/wow/auction/data/${realm}`, args);
};

/**
 * Fetch World of Warcraft boss data.
 *
 * @param {Object} args
 * @param {Number} [args.id] A boss ID
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.boss = function getBoss({ id = '', ...args } = {}) {
  return this.blizzard.get(`/wow/boss/${id}`, args);
};

/**
 * Fetch World of Warcraft challenge data.
 *
 * @param {Object} args
 * @param {String} [args.realm] A realm name slug
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.challenge = function getChallenge({ realm = 'region', ...args } = {}) {
  return this.blizzard.get(`/wow/challenge/${realm}`, args);
};

/**
 * Fetch World of Warcraft character data.
 *
 * @param {Array} keys A list of character resource keys
 * @param {Object} args
 * @param {String} args.name The character name
 * @param {String} args.realm The realm name slug
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.character = function getCharacter(keys, { realm, name, ...args }) {
  const params = {
    fields: keys.length ? keys.toString() : 'profile',
  };

  return this.blizzard.get(
    `/wow/character/${realm}/${name}`,
    merge({}, args, {
      params,
    }),
  );
};

/**
 * Fetch a World of Warcraft data resource.
 *
 * @param {String} key The data resource key
 * @param {Object} args
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.data = function getData(key, args) {
  const path = key === 'battlegroups' ? '/wow/data/battlegroups/' : `/wow/data/${key.replace('-', '/')}`;

  return this.blizzard.get(path, args);
};

/**
 * Fetch World of Warcraft guild data.
 *
 * @param {Array} keys A list of guild resource keys
 * @param {Object} args
 * @param {String} args.name The guild name
 * @param {String} args.realm The realm name slug
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.guild = function getGuild(keys, { realm, name, ...args }) {
  const params = {
    fields: keys.length ? keys.toString() : 'profile',
  };

  return this.blizzard.get(`/wow/guild/${realm}/${name}`, merge({}, args, { params }));
};

/**
 * Fetch World of Warcraft item data.
 *
 * @param {Object} args
 * @param {Number} args.id The item or set ID
 * @param {Boolean} [args.set] Whether this is an item set
 * @param {Array} [args.bonuses] A list of bonuses to apply to the item
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.item = function getItem({ id, set = false, bonuses, ...args }) {
  const path = set ? `/wow/item/set/${id}` : `/wow/item/${id}`;

  return this.blizzard.get(
    path,
    merge({}, args, {
      params: {
        ...(bonuses ? { bl: bonuses.toString() } : {}),
      },
    }),
  );
};

/**
 * Fetch World of Warcraft mount data.
 *
 * @param {Object} args
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.mount = function getMount(args) {
  return this.blizzard.get('/wow/mount/', args);
};

/**
 * Fetch World of Warcraft pet data.
 *
 * @param {String} key The pet resource key
 * @param {Object} args
 * @param {String} [args.id] The pet resource ID
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.pet = function getPet(key = 'list', { id, level, breed, quality, ...args } = {}) {
  if (key === 'list') {
    return this.blizzard.get('/wow/pet/', args);
  }

  const params = {
    level,
    breedId: breed,
    qualityId: quality,
  };

  return this.blizzard.get(
    `/wow/pet/${key}/${id}`,
    merge({}, args, {
      params,
    }),
  );
};

/**
 * Fetch World of Warcraft pvp data.
 *
 * @param {Object} args
 * @param {String} args.bracket The pvp bracket ID
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.pvp = function getPvp({ bracket, ...args }) {
  return this.blizzard.get(`/wow/leaderboard/${bracket}`, args);
};

/**
 * Fetch World of Warcraft quest data.
 *
 * @param {Object} args
 * @param {Number} args.id The quest ID
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.quest = function getQuest({ id, ...args }) {
  return this.blizzard.get(`/wow/quest/${id}`, args);
};

/**
 * Fetch World of Warcraft realm data.
 *
 * @param {Object} args
 * @param {Array} [args.realms] A list of slugified realm names
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.realms = function getRealms({ realms, ...args } = {}) {
  return this.blizzard.get(
    '/wow/realm/status',
    merge({}, args, {
      params: {
        ...(realms ? { realms: realms.toString() } : {}),
      },
    }),
  );
};

/**
 * Fetch World of Warcraft recipe data.
 *
 * @param {Object} args
 * @param {Number} args.id The recipe ID
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.recipe = function getRecipe({ id, ...args }) {
  return this.blizzard.get(`/wow/recipe/${id}`, args);
};

/**
 * Fetch World of Warcraft spell data.
 *
 * @param {Object} args
 * @param {Number} args.id The spell ID
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.spell = function getSpell({ id, ...args }) {
  return this.blizzard.get(`/wow/spell/${id}`, args);
};

/**
 * Fetch World of Warcraft zone data.
 *
 * @param {Object} args
 * @param {Number} args.id The zone ID
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.zone = function getZone({ id = '', ...args } = {}) {
  return this.blizzard.get(`/wow/zone/${id}`, args);
};

module.exports = WoW;
