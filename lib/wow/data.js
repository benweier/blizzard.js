'use strict';

/**
 * World of Warcraft Data Resources API.
 */

module.exports = function(battlenet) {

  return {

    battlegroups: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.path = '/wow/data/battlegroups/';
      battlenet.fetch(args.params, args.config, args.callback);
    },

    characterRaces: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.path = '/wow/data/character/races';
      battlenet.fetch(args.params, args.config, args.callback);
    },

    characterClasses: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.path = '/wow/data/character/classes';
      battlenet.fetch(args.params, args.config, args.callback);
    },

    characterAchievements: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.path = '/wow/data/character/achievements';
      battlenet.fetch(args.params, args.config, args.callback);
    },

    guildRewards: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.path = '/wow/data/guild/rewards';
      battlenet.fetch(args.params, args.config, args.callback);
    },

    guildPerks: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.path = '/wow/data/guild/perks';
      battlenet.fetch(args.params, args.config, args.callback);
    },

    guildAchievements: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.path = '/wow/data/guild/achievements';
      battlenet.fetch(args.params, args.config, args.callback);
    },

    itemClasses: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.path = '/wow/data/item/classes';
      battlenet.fetch(args.params, args.config, args.callback);
    },

    talents: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.path = '/wow/data/talents';
      battlenet.fetch(args.params, args.config, args.callback);
    },

    petTypes: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.path = '/wow/data/pet/types';
      battlenet.fetch(args.params, args.config, args.callback);
    }

  };

};
