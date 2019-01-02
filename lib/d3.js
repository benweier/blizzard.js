/**
 * @file Exports the Diablo 3 API methods.
 * @module lib/d3
 */

/**
 * Diablo 3 class constructor.
 *
 * @constructor
 * @param {Object} blizzard A Blizzard.js instance
 */
const D3 = function D3(blizzard) {
  this.blizzard = blizzard;
};

/**
 * Fetch Diablo 3 act data.
 *
 * @param {Object} [args]
 * @param {Number} [args.id] The act ID
 * @return {Promise} A thenable Promises/A+ reference
 */
D3.prototype.act = function getAct({ id, ...args } = {}) {
  if (!id) {
    return this.blizzard.get(`/d3/data/act`, args);
  }

  return this.blizzard.get(`/d3/data/act/${id}`, args);
};

/**
 * Fetch Diablo 3 artisan data.
 *
 * @param {Object} args
 * @param {String} args.id The artisan slug
 * @return {Promise} A thenable Promises/A+ reference
 */
D3.prototype.artisan = function getArtisan({ id, ...args }) {
  return this.blizzard.get(`/d3/data/artisan/${id}`, args);
};

/**
 * Fetch Diablo 3 recipe data.
 *
 * @param {Object} args
 * @param {String} args.artisan The artisan slug
 * @param {String} args.recipe The recipe slug
 * @return {Promise} A thenable Promises/A+ reference
 */
D3.prototype.recipe = function getRecipe({ artisan, recipe, ...args }) {
  return this.blizzard.get(`/d3/data/artisan/${artisan}/recipe/${recipe}`, args);
};

/**
 * Fetch Diablo 3 follower data.
 *
 * @param {Object} args
 * @param {Number} args.id The follower slug
 * @return {Promise} A thenable Promises/A+ reference
 */
D3.prototype.follower = function getFollower({ id, ...args }) {
  return this.blizzard.get(`/d3/data/follower/${id}`, args);
};

/**
 * Fetch Diablo 3 character class data.
 *
 * @param {Object} args
 * @param {Number} args.id The character class ID
 * @return {Promise} A thenable Promises/A+ reference
 */
D3.prototype.characterClass = function getCharacterClass({ id, ...args }) {
  return this.blizzard.get(`/d3/data/hero/${id}`, args);
};

/**
 * Fetch Diablo 3 character skill data.
 *
 * @param {Object} args
 * @param {String} args.class The character class slug
 * @param {String} args.skill The character skill slug
 * @return {Promise} A thenable Promises/A+ reference
 */
D3.prototype.characterSkill = function getCharacterSkill({ class: classID, skill, ...args }) {
  return this.blizzard.get(`/d3/data/hero/${classID}/skill/${skill}`, args);
};

/**
 * Fetch Diablo 3 item data.
 *
 * @param {Object} args
 * @param {String} args.id The item slug
 * @return {Promise} A thenable Promises/A+ reference
 */
D3.prototype.item = function getItem({ id, ...args }) {
  return this.blizzard.get(`/d3/data/item/${id}`, args);
};

/**
 * Fetch Diablo 3 item type data.
 *
 * @param {Object} [args]
 * @param {String} [args.id] An item type slug
 * @return {Promise} A thenable Promises/A+ reference
 */
D3.prototype.itemType = function getItemType({ id, ...args } = {}) {
  if (!id) {
    return this.blizzard.get(`/d3/data/item-type`, args);
  }

  return this.blizzard.get(`/d3/data/item-type/${id}`, args);
};

/**
 * Fetch Diablo 3 era data.
 *
 * @param {Object} args
 * @param {String} [args.id] An era ID
 * @param {String} [args.leaderboard] An era leaderboard key
 * @return {Promise} A thenable Promises/A+ reference
 */
D3.prototype.era = function getEra({ id = '', leaderboard, ...args } = {}) {
  if (id && leaderboard) {
    return this.blizzard.get(`/data/d3/era/${id}/leaderboard/${leaderboard}`, args);
  }

  return this.blizzard.get(`/data/d3/era/${id}`, args);
};

/**
 * Fetch Diablo 3 profile data.
 *
 * @param {Object} args
 * @param {String} args.tag The user battletag
 * @param {String} [args.hero] A hero ID
 * @param {String} [args.itemTypes] Hero items to fetch
 * @return {Promise} A thenable Promises/A+ reference
 */
D3.prototype.profile = function getProfile({ tag, hero, itemTypes, ...args }) {
  const battletag = this.blizzard.battletag(tag);

  if (hero && itemTypes) {
    return this.blizzard.get(`/d3/profile/${battletag}/hero/${hero}/${itemTypes}`, args);
  }

  if (hero) {
    return this.blizzard.get(`/d3/profile/${battletag}/hero/${hero}`, args);
  }

  return this.blizzard.get(`/d3/profile/${battletag}/`, args);
};

/**
 * Fetch Diablo 3 season data.
 *
 * @param {Object} args
 * @param {String} [args.id] A season ID
 * @param {String} [args.leaderboard] A season leaderboard key
 * @return {Promise} A thenable Promises/A+ reference
 */
D3.prototype.season = function getSeason({ id = '', leaderboard, ...args } = {}) {
  if (id && leaderboard) {
    return this.blizzard.get(`/data/d3/season/${id}/leaderboard/${leaderboard}`, args);
  }

  return this.blizzard.get(`/data/d3/season/${id}`, args);
};

module.exports = D3;
