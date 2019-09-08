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
 * @param {Object} [args]
 * @param {Number} [args.id] A boss ID
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.boss = function getBoss({ id = '', ...args } = {}) {
  return this.blizzard.get(`/wow/boss/${id}`, args);
};

/**
 * Fetch World of Warcraft challenge data.
 *
 * @param {Object} [args]
 * @param {String} [args.realm=region] A realm name slug
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
 * @param {String} key The data resource
 * @param {Object} args
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.data = function getData(key, args) {
  const path = key === 'battlegroups' ? '/wow/data/battlegroups/' : `/wow/data/${key.replace('-', '/')}`;

  return this.blizzard.get(path, args);
};

/**
 * Fetch World of Warcraft battlegroup data.
 *
 * @param {Object} [args]
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.battlegroups = function getBattlegroups(args) {
  return this.data('battlegroups', args);
};

/**
 * Fetch World of Warcraft character races data.
 *
 * @param {Object} [args]
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.characterRaces = function getCharacterRaces(args) {
  return this.data('character-races', args);
};

/**
 * Fetch World of Warcraft character classes data.
 *
 * @param {Object} [args]
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.characterClasses = function getCharacterClasses(args) {
  return this.data('character-classes', args);
};

/**
 * Fetch World of Warcraft character achievements data.
 *
 * @param {Object} [args]
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.characterAchievements = function getCharacterClasses(args) {
  return this.data('character-achievements', args);
};

/**
 * Fetch World of Warcraft guild rewards data.
 *
 * @param {Object} [args]
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.guildRewards = function getGuildRewards(args) {
  return this.data('guild-rewards', args);
};

/**
 * Fetch World of Warcraft guild perks data.
 *
 * @param {Object} [args]
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.guildPerks = function getGuildPerks(args) {
  return this.data('guild-perks', args);
};

/**
 * Fetch World of Warcraft guild achievements data.
 *
 * @param {Object} [args]
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.guildAchievements = function getGuildAchievements(args) {
  return this.data('guild-achievements', args);
};

/**
 * Fetch World of Warcraft item classes data.
 *
 * @param {Object} [args]
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.itemClasses = function getItemClasses(args) {
  return this.data('item-classes', args);
};

/**
 * Fetch World of Warcraft talents data.
 *
 * @param {Object} [args]
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.talents = function getTalents(args) {
  return this.data('talents', args);
};

/**
 * Fetch World of Warcraft pet types data.
 *
 * @param {Object} [args]
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.petTypes = function getPetTypes(args) {
  return this.data('pet-types', args);
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
 * @param {Boolean} [args.set=false] Whether this is an item set
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
 * @param {Object} [args]
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.mount = function getMount(args) {
  return this.blizzard.get('/wow/mount/', args);
};

/**
 * Fetch World of Warcraft pet data.
 *
 * @param {String} key The pet resource
 * @param {Object} args
 * @param {String} [args.id] The pet resource ID
 * @param {String} [args.level] The pet level
 * @param {String} [args.breed] The pet breed ID
 * @param {String} [args.quality] The pet quality ID
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.pet = function getPet(key = 'index', { id, level, breed, quality, ...args } = {}) {
  if (key === 'index') {
    return this.blizzard.get('/wow/pet/', args);
  }

  const params = {
    ...(level ? { level } : {}),
    ...(breed ? { breedId: breed } : {}),
    ...(quality ? { qualityId: quality } : {}),
  };

  return this.blizzard.get(
    `/wow/pet/${key}/${id}`,
    merge({}, args, {
      params,
    }),
  );
};

/**
 * Fetch a World of Warcraft pet ability.
 *
 * @param {Object} args
 * @param {String} args.id The pet ability ID
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.petAbility = function getPetAbility(args) {
  return this.pet('ability', args);
};

/**
 * Fetch a World of Warcraft pet species.
 *
 * @param {Object} args
 * @param {String} args.id The pet species ID
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.petSpecies = function getPetSpecies(args) {
  return this.pet('species', args);
};

/**
 * Fetch World of Warcraft pet species statistics.
 *
 * @param {Object} args
 * @param {String} args.species The pet species ID
 * @param {String} [args.level] The pet level
 * @param {String} [args.breed] The pet breed ID
 * @param {String} [args.quality] The pet quality ID
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.petStats = function getPetStats({ species: id, ...args }) {
  return this.pet('stats', { id, ...args });
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
 * Fetch World of Warcraft realm status data.
 *
 * @param {Object} args
 * @param {Array} [args.realms] A list of realm name slugs
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.realmStatus = function getRealmStatus({ realms, ...args } = {}) {
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
 * Fetch World of Warcraft user characters.
 *
 * @param {Object} [args]
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.userCharacters = function getUserCharacters(args) {
  return this.blizzard.get('/wow/user/characters', args);
};

/**
 * Fetch World of Warcraft zone data.
 *
 * @param {Object} [args]
 * @param {Number} [args.id] The zone ID
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.zone = function getZone({ id = '', ...args } = {}) {
  return this.blizzard.get(`/wow/zone/${id}`, args);
};

/**
 * Fetch connected realm game data.
 *
 * @param {Object} [args]
 * @param {Number} [args.realm=index] A connected realm ID
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.connectedRealm = function getConnectedRealm({ realm = 'index', ...args }) {
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
 * @param {Object} [args]
 * @param {Number} [args.id=index] A keystone affix ID
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.keystoneAffix = function getKeystoneAffix({ id = 'index', ...args } = {}) {
  return this.blizzard.get(
    `/data/wow/keystone-affix/${id}`,
    merge({}, args, {
      namespace: 'static',
    }),
  );
};

/**
 * Fetch mythic raid leaderboard game data.
 *
 * @param {Object} args
 * @param {String} args.raid The raid slug
 * @param {String} args.faction The mythic leaderboard period
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.mythicRaidLeaderboard = function getMythicRaidLeaderboard({ raid, faction, ...args }) {
  return this.blizzard.get(
    `/data/wow/leaderboard/hall-of-fame/${raid}/${faction}`,
    merge({}, args, {
      namespace: 'dynamic',
    }),
  );
};

/**
 * Fetch mythic dungeon keystone game data.
 *
 * @param {String} [key=index] The mythic dungeon keystone resource
 * @param {Object} [args]
 * @param {Number} [args.id=index] The keystone ID
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.mythicDungeonKeystone = function getMythicDungeonKeystone(key = 'index', { id = 'index', ...args } = {}) {
  if (key === 'index') {
    return this.blizzard.get(
      `/data/wow/mythic-keystone/index`,
      merge({}, args, {
        namespace: 'dynamic',
      }),
    );
  }

  return this.blizzard.get(
    `/data/wow/mythic-keystone/${key}/${id}`,
    merge({}, args, {
      namespace: 'dynamic',
    }),
  );
};

/**
 * Fetch mythic keystone leaderboard game data.
 *
 * @param {Object} args
 * @param {Number} args.realm The connected realm ID
 * @param {Number} [args.dungeon=index] A dungeon ID
 * @param {Number} [args.period] A mythic leaderboard period ID
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.mythicKeystoneLeaderboard = function getMythicKeystoneLeaderboard({
  realm,
  dungeon = 'index',
  period,
  ...args
}) {
  if (realm && dungeon && period) {
    return this.blizzard.get(
      `/data/wow/connected-realm/${realm}/mythic-leaderboard/${dungeon}/period/${period}`,
      merge({}, args, {
        namespace: 'dynamic',
      }),
    );
  }

  return this.blizzard.get(
    `/data/wow/connected-realm/${realm}/mythic-leaderboard/${dungeon}`,
    merge({}, args, {
      namespace: 'dynamic',
    }),
  );
};

/**
 * Fetch playable class game data.
 *
 * @param {Object} [args]
 * @param {Number} [args.id=index] A playable class ID
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.playableClass = function getPlayableClass({ id = 'index', ...args } = {}) {
  return this.blizzard.get(
    `/data/wow/playable-class/${id}`,
    merge({}, args, {
      namespace: 'static',
    }),
  );
};

/**
 * Fetch playable class PVP talent slots game data.
 *
 * @param {Object} args
 * @param {Number} args.id The playable class ID
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.pvpTalentSlots = function getPvpTalentSlots({ id, ...args }) {
  return this.blizzard.get(
    `/data/wow/playable-class/${id}/pvp-talent-slots`,
    merge({}, args, {
      namespace: 'static',
    }),
  );
};

/**
 * Fetch playable specialization game data.
 *
 * @param {Object} [args]
 * @param {Object} [args.id=index] A specialization ID
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.playableSpecialization = function getPlayableSpecialization({ id = 'index', ...args } = {}) {
  return this.blizzard.get(
    `/data/wow/playable-specialization/${id}`,
    merge({}, args, {
      namespace: 'static',
    }),
  );
};

/**
 * Fetch power types game data.
 *
 * @param {Object} [args]
 * @param {Object} [args.id=index] A power type ID
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.powerType = function getPowerType({ id = 'index', ...args } = {}) {
  return this.blizzard.get(
    `/data/wow/power-type/${id}`,
    merge({}, args, {
      namespace: 'static',
    }),
  );
};

/**
 * Fetch playable race game data.
 *
 * @param {Object} [args]
 * @param {Object} [args.id=index] A playable race ID
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.playableRace = function getPlayableRace({ id = 'index', ...args } = {}) {
  return this.blizzard.get(
    `/data/wow/race/${id}`,
    merge({}, args, {
      namespace: 'static',
    }),
  );
};

/**
 * Fetch realm game data.
 *
 * @param {Object} [args]
 * @param {String} [args.realm=index] A realm slug
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.realm = function getRealm({ realm = 'index', ...args } = {}) {
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
 * @param {Object} [args]
 * @param {Number} [args.id=index] A region ID
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.region = function getRegion({ id = 'index', ...args } = {}) {
  return this.blizzard.get(
    `/data/wow/region/${id}`,
    merge({}, args, {
      namespace: 'dynamic',
    }),
  );
};

/**
 * Fetch token game data.
 *
 * @param {Object} [args]
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.token = function getToken(args) {
  return this.blizzard.get(
    '/data/wow/token/',
    merge({}, args, {
      namespace: 'dynamic',
    }),
  );
};

/**
 * Fetch item game data.
 * @param {Object} [args]
 * @param {Number} [args.id=index] Item ID
 * @return {Promise} A thenable Promises/A+ reference
 */
WoW.prototype.itemData = function getItemData({ id = 'index', ...args } = {}) {
  return this.blizzard.get(
    `/data/wow/item/${id}`,
    merge({}, args, {
      namespace: 'static',
    }),
  );
};

module.exports = WoW;
