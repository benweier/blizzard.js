/**
 *
 */

var battleNetApiRequest = require('../common/battleNetApiRequest');

module.exports = (function() {
  'use strict';

  return {

    battlegroups: function(params, callback) {
      var origin = params.origin,
          locale = params.locale || '';

      battleNetApiRequest({
        origin: origin,
        path: '/wow/data/battlegroups/',
        qs: {
          locale: locale
        }
      }, callback);
    },

    characterRaces: function(params, callback) {
      var origin = params.origin,
          locale = params.locale || '';

      battleNetApiRequest({
        origin: origin,
        path: '/wow/data/character/races',
        qs: {
          locale: locale
        }
      }, callback);
    },

    characterClasses: function(params, callback) {
      var origin = params.origin,
          locale = params.locale || '';

      battleNetApiRequest({
        origin: origin,
        path: '/wow/data/character/classes',
        qs: {
          locale: locale
        }
      }, callback);
    },

    characterAchievement: function(params, callback) {
      var origin = params.origin,
          locale = params.locale || '';

      battleNetApiRequest({
        origin: origin,
        path: '/wow/data/character/achievements',
        qs: {
          locale: locale
        }
      }, callback);
    },

    guildRewards: function(params, callback) {
      var origin = params.origin,
          locale = params.locale || '';

      battleNetApiRequest({
        origin: origin,
        path: '/wow/data/guild/rewards',
        qs: {
          locale: locale
        }
      }, callback);
    },

    guildPerks: function(params, callback) {
      var origin = params.origin,
          locale = params.locale || '';

      battleNetApiRequest({
        origin: origin,
        path: '/wow/data/guild/perks',
        qs: {
          locale: locale
        }
      }, callback);
    },

    guildAchievements: function(params, callback) {
      var origin = params.origin,
          locale = params.locale || '';

      battleNetApiRequest({
        origin: origin,
        path: '/wow/data/guild/achievements',
        qs: {
          locale: locale
        }
      }, callback);
    },

    itemClasses: function(params, callback) {
      var origin = params.origin,
          locale = params.locale || '';

      battleNetApiRequest({
        origin: origin,
        path: '/wow/data/item/classes',
        qs: {
          locale: locale
        }
      }, callback);
    },

    talents: function(params, callback) {
      var origin = params.origin,
          locale = params.locale || '';

      battleNetApiRequest({
        origin: origin,
        path: '/wow/data/talents',
        qs: {
          locale: locale
        }
      }, callback);
    },

    petTypes: function(params, callback) {
      var origin = params.origin,
          locale = params.locale || '';

      battleNetApiRequest({
        origin: origin,
        path: '/wow/data/pet/types',
        qs: {
          locale: locale
        }
      }, callback);
    }

  };

})();
