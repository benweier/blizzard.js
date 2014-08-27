/**
 *
 */

var battleNetApiRequest = require('../common/battleNetApiRequest');

module.exports = (function() {
  'use strict';

  return {

    battlegroups: function(params, callback) {
      var origin = params.origin;

      battleNetApiRequest({
        origin: origin,
        path: '/wow/data/battlegroups/'
      }, callback);
    },

    characterRaces: function(params, callback) {
      var origin = params.origin;

      battleNetApiRequest({
        origin: origin,
        path: '/wow/data/character/races'
      }, callback);
    },

    characterClasses: function(params, callback) {
      var origin = params.origin;

      battleNetApiRequest({
        origin: origin,
        path: '/wow/data/character/classes'
      }, callback);
    },

    characterAchievement: function(params, callback) {
      var origin = params.origin;

      battleNetApiRequest({
        origin: origin,
        path: '/wow/data/character/achievements'
      }, callback);
    },

    guildRewards: function(params, callback) {
      var origin = params.origin;

      battleNetApiRequest({
        origin: origin,
        path: '/wow/data/guild/rewards'
      }, callback);
    },

    guildPerks: function(params, callback) {
      var origin = params.origin;

      battleNetApiRequest({
        origin: origin,
        path: '/wow/data/guild/perks'
      }, callback);
    },

    guildAchievements: function(params, callback) {
      var origin = params.origin;

      battleNetApiRequest({
        origin: origin,
        path: '/wow/data/guild/achievements'
      }, callback);
    },

    itemClasses: function(params, callback) {
      var origin = params.origin;

      battleNetApiRequest({
        origin: origin,
        path: '/wow/data/item/classes'
      }, callback);
    },

    talents: function(params, callback) {
      var origin = params.origin;

      battleNetApiRequest({
        origin: origin,
        path: '/wow/data/talents'
      }, callback);
    },

    petTypes: function(params, callback) {
      var origin = params.origin;

      battleNetApiRequest({
        origin: origin,
        path: '/wow/data/pet/types'
      }, callback);
    }

  };

})();
