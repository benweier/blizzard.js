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

  var battlenet = require('./lib/core')(request, extend, options);

  return {
    account: require('./account/user')(battlenet),
    wow: {
      achievement: require('./wow/achievement')(battlenet),
      auction: require('./wow/auction')(battlenet),
      battlePet: require('./wow/battlepet')(battlenet),
      challenge: require('./wow/challenge')(battlenet),
      character: require('./wow/character')(battlenet),
      data: require('./wow/data')(battlenet),
      guild: require('./wow/guild')(battlenet),
      item: require('./wow/item')(battlenet),
      pvp: require('./wow/pvp')(battlenet),
      quest: require('./wow/quest')(battlenet),
      realmStatus: require('./wow/realm')(battlenet),
      recipe: require('./wow/recipe')(battlenet),
      spell: require('./wow/spell')(battlenet)
    },
    sc2: {
      data: require('./sc2/data')(battlenet),
      ladder: require('./sc2/ladder')(battlenet),
      profile: require('./sc2/profile')(battlenet)
    },
    d3: {
      data: require('./d3/data')(battlenet),
      profile: require('./d3/profile')(battlenet)
    }
  };
};
