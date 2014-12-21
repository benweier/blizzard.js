/**
 * Battle.net API Wrapper.
 */

module.exports = function(BATTLENET_API_KEY) {
  'use strict';

  var battlenet = require('./common/battleNetApiRequest')(BATTLENET_API_KEY);

  var wow = {
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
    spell: require('./wow/spell')
  };

  var sc2 = {
    data: require('./sc2/data')(battlenet),
    ladder: require('./sc2/ladder')(battlenet),
    profile: require('./sc2/profile')
  };

  var d3 = {
    data: require('./d3/data.js')(battlenet),
    profile: require('./d3/profile.js')(battlenet)
  };

  return {
    wow: wow,
    sc2: sc2,
    d3: d3
  };

};
