/**
 * World of Warcraft Data Resources API.
 */

module.exports = function(battlenet) {
  'use strict';

  return {

    battlegroups: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/wow/data/battlegroups/';
      battlenet.fetch(args.params, args.config, args.callback);
    },

    characterRaces: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/wow/data/character/races';
      battlenet.fetch(args.params, args.config, args.callback);
    },

    characterClasses: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/wow/data/character/classes';
      battlenet.fetch(args.params, args.config, args.callback);
    },

    characterAchievement: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/wow/data/character/achievements';
      battlenet.fetch(args.params, args.config, args.callback);
    },

    guildRewards: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/wow/data/guild/rewards';
      battlenet.fetch(args.params, args.config, args.callback);
    },

    guildPerks: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/wow/data/guild/perks';
      battlenet.fetch(args.params, args.config, args.callback);
    },

    guildAchievements: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/wow/data/guild/achievements';
      battlenet.fetch(args.params, args.config, args.callback);
    },

    itemClasses: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/wow/data/item/classes';
      battlenet.fetch(args.params, args.config, args.callback);
    },

    talents: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/wow/data/talents';
      battlenet.fetch(args.params, args.config, args.callback);
    },

    petTypes: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/wow/data/pet/types';
      battlenet.fetch(args.params, args.config, args.callback);
    }

  };

};
