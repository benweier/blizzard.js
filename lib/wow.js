/**
 * @file Exports the World of Warcraft API methods.
 * @module lib/wow
 */
'use strict';

/**
 * World of Warcraft class constructor.
 *
 * @constructor
 * @param  {Object} blizzard A Blizzard.js instance
 * @return {Function}        WoW constructor function
 */
const WoW = function WoW (blizzard) {
  this.blizzard = blizzard;
};

/**
 * Fetch achievement data.
 *
 * @param  {Object} args          The achievement request arguments
 * @param  {Number} args.id       The achievement ID
 * @param  {String} [args.origin] The region key
 * @param  {String} [args.locale] A locale code for this region
 * @param  {Object} [instance]    An instance config object compatible with [axios]{@link https://github.com/mzabriskie/axios}
 * @return {Promise}              A thenable Promises/A+ reference
 * @example
 * blizzard.wow.achievement({ id: 1234, origin: 'us' })
 *   .then(achievement => {
 *     console.log(achievement);
 *   });
 */
WoW.prototype.achievement = function achievement (args, instance) {
  return this.blizzard.get(`/wow/achievement/${args.id}`, args, instance);
};

/**
 * Fetch auction data.
 *
 * @param  {Object} args          The auction request arguments
 * @param  {String} args.realm    The realm slug
 * @param  {String} [args.origin] The region key
 * @param  {String} [args.locale] A locale code for this region
 * @param  {Object} [instance]    An instance config object compatible with [axios]{@link https://github.com/mzabriskie/axios}
 * @return {Promise}              A thenable Promises/A+ reference
 */
WoW.prototype.auction = function auction (args, instance) {
  return this.blizzard.get(`/wow/auction/data/${args.realm}`, args, instance);
};

/**
 * Fetch boss data.
 *
 * @param  {Object} args          The boss request arguments
 * @param  {Number} args.id       The boss ID
 * @param  {String} [args.origin] The region key
 * @param  {String} [args.locale] A locale code for this region
 * @param  {Object} [instance]    An instance config object compatible with [axios]{@link https://github.com/mzabriskie/axios}
 * @return {Promise}              A thenable Promises/A+ reference
 */
WoW.prototype.boss = function boss (args, instance) {
  const params = Object.assign({ id: '' }, args);

  return this.blizzard.get(`/wow/boss/${params.id}`, params, instance);
};

/**
 * Fetch challenge data.
 *
 * @param  {Object} args          The challenge request arguments
 * @param  {Number} [args.realm]  The slugified realm name
 * @param  {String} [args.origin] The region key
 * @param  {String} [args.locale] A locale code for this region
 * @param  {Object} [instance]    An instance config object compatible with [axios]{@link https://github.com/mzabriskie/axios}
 * @return {Promise}              A thenable Promises/A+ reference
 */
WoW.prototype.challenge = function challenge (args, instance) {
  const params = Object.assign({}, { realm: 'region' }, args);

  return this.blizzard.get(`/wow/challenge/${params.realm}`, params, instance);
};

/**
 * Fetch character data.
 *
 * @param  {Array} fields         The character resource fields
 * @param  {Object} args          The character request arguments
 * @param  {String} args.name     The character name
 * @param  {String} args.realm    The slugified realm name
 * @param  {Array} [args.fields]  A list of character fields
 * @param  {String} [args.origin] The region key
 * @param  {String} [args.locale] A locale code for this region
 * @param  {Object} [instance]    An instance config object compatible with [axios]{@link https://github.com/mzabriskie/axios}
 * @return {Promise}              A thenable Promises/A+ reference
 */
WoW.prototype.character = function character (fields, args, instance) {
  const params = { fields: fields.length ? fields.toString() : null };

  return this.blizzard.get(`/wow/character/${args.realm}/${args.name}`, args, Object.assign({}, instance, { params }));
};

/**
 * Fetch a data resource.
 *
 * @param  {Object} key           The resource key
 * @param  {Object} args          The resource request arguments
 * @param  {String} [args.origin] The region key
 * @param  {String} [args.locale] A locale code for this region
 * @param  {Object} [instance]    An instance config object compatible with [axios]{@link https://github.com/mzabriskie/axios}
 * @return {Promise}              A thenable Promises/A+ reference
 */
WoW.prototype.data = function data (key, args, instance) {
  const path = key === 'battlegroups' ? '/wow/data/battlegroups/' : `/wow/data/${key}`;

  return this.blizzard.get(path, args, instance);
};

/**
 * Fetch guild data.
 *
 * @param  {Array} fields         The guild resource fields
 * @param  {Object} args          The guild request arguments
 * @param  {String} args.name     The guild name
 * @param  {String} args.realm    The slugified realm name
 * @param  {Array} [args.fields]  A list of guild fields
 * @param  {String} [args.origin] The region key
 * @param  {String} [args.locale] A locale code for this region
 * @param  {Object} [instance]    An instance config object compatible with [axios]{@link https://github.com/mzabriskie/axios}
 * @return {Promise}              A thenable Promises/A+ reference
 */
WoW.prototype.guild = function guild (fields, args, instance) {
  const params = { fields: fields.length ? fields.toString() : null };

  return this.blizzard.get(`/wow/guild/${args.realm}/${args.name}`, args, Object.assign({}, instance, { params }));
};

/**
 * Fetch item data.
 *
 * @param  {Object} args          The item request arguments
 * @param  {Number} args.id       The item ID
 * @param  {Boolean} [args.set]   Whether this is a item set request or not
 * @param  {Array} [args.bonuses] A list of bonuses to apply to the item
 * @param  {String} [args.origin] The region key
 * @param  {String} [args.locale] A locale code for this region
 * @param  {Object} [instance]    An instance config object compatible with [axios]{@link https://github.com/mzabriskie/axios}
 * @return {Promise}              A thenable Promises/A+ reference
 */
WoW.prototype.item = function item (args, instance) {
  const path = args.set ? `/wow/item/set/${args.id}` : `/wow/item/${args.id}`;
  const bl = args.bonuses ? args.bonuses.toString() : null;

  return this.blizzard.get(path, args, Object.assign({}, instance, { params: { bl } }));
};

/**
 * Fetch mount data.
 *
 * @param  {Object} args          The mount request arguments
 * @param  {String} [args.origin] The region key
 * @param  {String} [args.locale] A locale code for this region
 * @param  {Object} [instance]    An instance config object compatible with [axios]{@link https://github.com/mzabriskie/axios}
 * @return {Promise}              A thenable Promises/A+ reference
 */
WoW.prototype.mount = function mount (args, instance) {
  return this.blizzard.get('/wow/mount/', args, instance);
};

/**
 * Fetch pet data.
 *
 * @param  {String} key           The pet resource key
 * @param  {Object} args          The pet request arguments
 * @param  {String} [args.id]     The pet resource ID
 * @param  {String} [args.origin] The region key
 * @param  {String} [args.locale] A locale code for this region
 * @param  {Object} [instance]    An instance config object compatible with [axios]{@link https://github.com/mzabriskie/axios}
 * @return {Promise}              A thenable Promises/A+ reference
 */
WoW.prototype.pet = function pet (key, args, instance) {
  if (key === 'list') {
    return this.blizzard.get('/wow/pet/', args, instance);
  }

  return this.blizzard.get(`/wow/pet/${key}/${args.id}`, args, instance);
};

/**
 * Fetch pvp data.
 *
 * @param  {Object} args          The mount request arguments
 * @param  {String} args.bracket  The bracket ID
 * @param  {String} [args.origin] The region key
 * @param  {String} [args.locale] A locale code for this region
 * @param  {Object} [instance]    An instance config object compatible with [axios]{@link https://github.com/mzabriskie/axios}
 * @return {Promise}              A thenable Promises/A+ reference
 */
WoW.prototype.pvp = function pvp (args, instance) {
  return this.blizzard.get(`/wow/leaderboard/${args.bracket}`, args, instance);
};

/**
 * Fetch quest data.
 *
 * @param  {Object} args          The quest request arguments
 * @param  {Number} args.id       The quest ID
 * @param  {String} [args.origin] The region key
 * @param  {String} [args.locale] A locale code for this region
 * @param  {Object} [instance]    An instance config object compatible with [axios]{@link https://github.com/mzabriskie/axios}
 * @return {Promise}              A thenable Promises/A+ reference
 */
WoW.prototype.quest = function quest (args, instance) {
  return this.blizzard.get(`/wow/quest/${args.id}`, args, instance);
};

/**
 * Fetch realm data.
 *
 * @param  {Object} args          The realm request arguments
 * @param  {Array} [args.realms]  A list of slugified realm names
 * @param  {String} [args.origin] The region key
 * @param  {String} [args.locale] A locale code for this region
 * @param  {Object} [instance]    An instance config object compatible with [axios]{@link https://github.com/mzabriskie/axios}
 * @return {Promise}              A thenable Promises/A+ reference
 */
WoW.prototype.realms = function realms (args, instance) {
  const fields = Object.assign({}, args);
  const params = { realms: fields.length ? fields.realms.toString() : null };
  const inst = Object.assign({}, instance, { params });

  return this.blizzard.get('/wow/realm/status', args, inst);
};

/**
 * Fetch recipe data.
 *
 * @param  {Object} args          The recipe request arguments
 * @param  {Number} args.id       The recipe ID
 * @param  {String} [args.origin] The region key
 * @param  {String} [args.locale] A locale code for this region
 * @param  {Object} [instance]    An instance config object compatible with [axios]{@link https://github.com/mzabriskie/axios}
 * @return {Promise}              A thenable Promises/A+ reference
 */
WoW.prototype.recipe = function recipe (args, instance) {
  return this.blizzard.get(`/wow/recipe/${args.id}`, args, instance);
};

/**
 * Fetch spell data.
 *
 * @param  {Object} args          The spell request arguments
 * @param  {Number} args.id       The spell ID
 * @param  {String} [args.origin] The region key
 * @param  {String} [args.locale] A locale code for this region
 * @param  {Object} [instance]    An instance config object compatible with [axios]{@link https://github.com/mzabriskie/axios}
 * @return {Promise}              A thenable Promises/A+ reference
 */
WoW.prototype.spell = function spell (args, instance) {
  return this.blizzard.get(`/wow/spell/${args.id}`, args, instance);
};

/**
 * Fetch zone data.
 *
 * @param  {Object} args          The zone request arguments
 * @param  {Number} args.id       The zone ID
 * @param  {String} [args.origin] The region key
 * @param  {String} [args.locale] A locale code for this region
 * @param  {Object} [instance]    An instance config object compatible with [axios]{@link https://github.com/mzabriskie/axios}
 * @return {Promise}              A thenable Promises/A+ reference
 */
WoW.prototype.zone = function zone (args, instance) {
  const params = Object.assign({ id: '' }, args);

  return this.blizzard.get(`/wow/zone/${params.id}`, params, instance);
};

module.exports = WoW;
