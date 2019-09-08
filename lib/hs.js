/**
 * @file Exports the Hearthstone API methods.
 * @module lib/hearthstone
 */

const pick = require('lodash.pick');

/**
 * Hearthstone class constructor.
 *
 * @constructor
 * @param {Object} blizzard A Blizzard.js instance
 */
const Hearthstone = function Hearthstone(blizzard) {
  this.blizzard = blizzard;
};

/**
 * Fetch Hearthstone cards data.
 *
 * @param {Object} [args]
 * @param {Number} [args.id] A card ID or slug
 * @return {Promise} A thenable Promises/A+ reference
 */
Hearthstone.prototype.cards = function getCards({ card, query, ...args } = {}) {
  const params = pick(query, [
    'attack',
    'class',
    'collectible',
    'health',
    'keyword',
    'manaCost',
    'minionType',
    'order',
    'page',
    'pageSize',
    'rarity',
    'set',
    'sort',
    'textFilter',
    'type',
  ]);

  return this.blizzard.get(card ? `/hearthstone/cards/${card}` : '/hearthstone/cards', { ...args, params });
};

/**
 * Fetch Hearthstone deck data.
 *
 * @param {Object} [args]
 * @param {Number} [args.code] A deck code
 * @return {Promise} A thenable Promises/A+ reference
 */
Hearthstone.prototype.deck = function getDeck({ code, ...args }) {
  return this.blizzard.get(`/hearthstone/deck/${code}`, args);
};

/**
 * Fetch Hearthstone metadata.
 *
 * @param {Object} [args]
 * @return {Promise} A thenable Promises/A+ reference
 */
Hearthstone.prototype.metadata = function getMetadata({ type, ...args } = {}) {
  return this.blizzard.get(type ? `/hearthstone/metadata/${type}` : '/hearthstone/metadata', args);
};

module.exports = Hearthstone;
