/**
 *
 */

var battleNetApiRequest = require('../common/battleNetApiRequest');

module.exports = (function() {
  'use strict';

  var data = {

    battlegroups: function(params, callback) {
      var region = params.region;

      battleNetApiRequest({
        region: region,
        path: '/wow/data/battlegroups'
      }, callback);
    },

    characterRaces: function(params, callback) {
      var region = params.region;

      battleNetApiRequest({
        region: region,
        path: '/wow/data/character/races'
      }, callback);
    },

    characterClasses: function(params, callback) {
      var region = params.region;

      battleNetApiRequest({
        region: region,
        path: '/wow/data/character/classes'
      }, callback);
    },

    characterAchievement: function(params, callback) {
      var region = params.region;

      battleNetApiRequest({
        region: region,
        path: '/wow/data/character/achievements'
      }, callback);
    },

    guildRewards: function(params, callback) {
      var region = params.region;

      battleNetApiRequest({
        region: region,
        path: '/wow/data/guild/rewards'
      }, callback);
    },

    guildPerks: function(params, callback) {
      var region = params.region;

      battleNetApiRequest({
        region: region,
        path: '/wow/data/guild/perks'
      }, callback);
    },

    itemClasses: function(params, callback) {
      var region = params.region;

      battleNetApiRequest({
        region: region,
        path: '/wow/data/item/classes'
      }, callback);
    },

    talents: function(params, callback) {
      var region = params.region;

      battleNetApiRequest({
        region: region,
        path: '/wow/data/talents'
      }, callback);
    },

    petTypes: function(params, callback) {
      var region = params.region;

      battleNetApiRequest({
        region: region,
        path: '/wow/data/pet/types'
      }, callback);
    }

  };

  return data;

})();
