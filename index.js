/**
 * Battle.net API Wrapper.
 */
var request = require('request'),
    extend = require('extend');

module.exports = function(options) {
  'use strict';

  if (typeof options !== 'object') {
    options = {
      BNET_ID: options || false
    };
  }

  var battlenet = require('./lib/battlenet-api')(request, extend, options);

  return {
    account: require('./lib/account/user')(battlenet),
    wow: {
      achievement: require('./lib/wow/achievement')(battlenet),
      auction: require('./lib/wow/auction')(battlenet),
      battlePet: require('./lib/wow/battlepet')(battlenet),
      challenge: require('./lib/wow/challenge')(battlenet),
      character: require('./lib/wow/character')(battlenet),
      data: require('./lib/wow/data')(battlenet),
      guild: require('./lib/wow/guild')(battlenet),
      item: require('./lib/wow/item')(battlenet),
      mount: require('./lib/wow/mount')(battlenet),
      pvp: require('./lib/wow/pvp')(battlenet),
      quest: require('./lib/wow/quest')(battlenet),
      realmStatus: require('./lib/wow/realm')(battlenet),
      recipe: require('./lib/wow/recipe')(battlenet),
      spell: require('./lib/wow/spell')(battlenet)
    },
    sc2: {
      data: require('./lib/sc2/data')(battlenet),
      ladder: require('./lib/sc2/ladder')(battlenet),
      profile: require('./lib/sc2/profile')(battlenet)
    },
    d3: {
      data: require('./lib/d3/data')(battlenet),
      era: require('./lib/d3/era')(battlenet),
      profile: require('./lib/d3/profile')(battlenet),
      season: require('./lib/d3/season')(battlenet)
    }
  };
};
