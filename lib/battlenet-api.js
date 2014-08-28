/**
 * Battle.net API Wrapper
 */

module.exports = (function() {
  'use strict';

  var wow = {
    achievement: require('./wow/achievement'),
    auction: require('./wow/auction'),
    battlePet: require('./wow/battlepet'),
    challenge: require('./wow/challenge'),
    character: require('./wow/character'),
    data: require('./wow/data'),
    guild: require('./wow/guild'),
    item: require('./wow/item'),
    pvp: require('./wow/pvp'),
    quest: require('./wow/quest'),
    realmStatus: require('./wow/realm'),
    recipe: require('./wow/recipe'),
    spell: require('./wow/spell')
  };

  var sc2 = {
    data: require('./sc2/data'),
    ladder: require('./sc2/ladder'),
    profile: require('./sc2/profile')
  };

  var d3 = {
    data: require('./d3/data.js'),
    profile: require('./d3/profile.js')
  };

  return {
    wow: wow,
    sc2: sc2,
    d3: d3
  };

})();
