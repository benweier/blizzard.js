/**
 *
 */

var battleNetApiRequest = require('../common/battleNetApiRequest');

module.exports = (function() {
  'use strict';

  var character = {

    profile: function(params, callback) {
      var region = params.region,
          realm = params.realm,
          name = params.name;

      battleNetApiRequest({
        region: region,
        path: '/wow/character/' + realm + '/' + name
      }, callback);
    },

    achievements: function(params, callback) {
      var region = params.region,
          realm = params.realm,
          name = params.name;

      battleNetApiRequest({
        region: region,
        path: '/wow/character/' + realm + '/' + name,
        qs: {
          fields: 'achievements'
        }
      }, callback);
    },

    appearance: function(params, callback) {
      var region = params.region,
          realm = params.realm,
          name = params.name;

      battleNetApiRequest({
        region: region,
        path: '/wow/character/' + realm + '/' + name,
        qs: {
          fields: 'appearance'
        }
      }, callback);
    },

    guild: function(params, callback) {
      var region = params.region,
          realm = params.realm,
          name = params.name;

      battleNetApiRequest({
        region: region,
        path: '/wow/character/' + realm + '/' + name,
        qs: {
          fields: 'guild'
        }
      }, callback);
    },

    hunterPets: function(params, callback) {
      var region = params.region,
          realm = params.realm,
          name = params.name;

      battleNetApiRequest({
        region: region,
        path: '/wow/character/' + realm + '/' + name,
        qs: {
          fields: 'hunterPets'
        }
      }, callback);
    },

    items: function(params, callback) {
      var region = params.region,
          realm = params.realm,
          name = params.name;

      battleNetApiRequest({
        region: region,
        path: '/wow/character/' + realm + '/' + name,
        qs: {
          fields: 'items'
        }
      }, callback);
    },

    mounts: function(params, callback) {
      var region = params.region,
          realm = params.realm,
          name = params.name;

      battleNetApiRequest({
        region: region,
        path: '/wow/character/' + realm + '/' + name,
        qs: {
          fields: 'mounts'
        }
      }, callback);
    },

    pets: function(params, callback) {
      var region = params.region,
          realm = params.realm,
          name = params.name;

      battleNetApiRequest({
        region: region,
        path: '/wow/character/' + realm + '/' + name,
        qs: {
          fields: 'pets'
        }
      }, callback);
    },

    petSlots: function(params, callback) {
      var region = params.region,
          realm = params.realm,
          name = params.name;

      battleNetApiRequest({
        region: region,
        path: '/wow/character/' + realm + '/' + name,
        qs: {
          fields: 'petSlots'
        }
      }, callback);
    },

    progression: function(params, callback) {
      var region = params.region,
          realm = params.realm,
          name = params.name;

      battleNetApiRequest({
        region: region,
        path: '/wow/character/' + realm + '/' + name,
        qs: {
          fields: 'progression'
        }
      }, callback);
    },

    pvp: function(params, callback) {
      var region = params.region,
          realm = params.realm,
          name = params.name;

      battleNetApiRequest({
        region: region,
        path: '/wow/character/' + realm + '/' + name,
        qs: {
          fields: 'pvp'
        }
      }, callback);
    },

    quests: function(params, callback) {
      var region = params.region,
          realm = params.realm,
          name = params.name;

      battleNetApiRequest({
        region: region,
        path: '/wow/character/' + realm + '/' + name,
        qs: {
          fields: 'quests'
        }
      }, callback);
    },

    reputation: function(params, callback) {
      var region = params.region,
          realm = params.realm,
          name = params.name;

      battleNetApiRequest({
        region: region,
        path: '/wow/character/' + realm + '/' + name,
        qs: {
          fields: 'reputation'
        }
      }, callback);
    },

    stats: function(params, callback) {
      var region = params.region,
          realm = params.realm,
          name = params.name;

      battleNetApiRequest({
        region: region,
        path: '/wow/character/' + realm + '/' + name,
        qs: {
          fields: 'stats'
        }
      }, callback);
    },

    talents: function(params, callback) {
      var region = params.region,
          realm = params.realm,
          name = params.name;

      battleNetApiRequest({
        region: region,
        path: '/wow/character/' + realm + '/' + name,
        qs: {
          fields: 'talents'
        }
      }, callback);
    },

    titles: function(params, callback) {
      var region = params.region,
          realm = params.realm,
          name = params.name;

      battleNetApiRequest({
        region: region,
        path: '/wow/character/' + realm + '/' + name,
        qs: {
          fields: 'titles'
        }
      }, callback);
    },

    audit: function(params, callback) {
      var region = params.region,
          realm = params.realm,
          name = params.name;

      battleNetApiRequest({
        region: region,
        path: '/wow/character/' + realm + '/' + name,
        qs: {
          fields: 'audit'
        }
      }, callback);
    }

  };

  return character;

})();
