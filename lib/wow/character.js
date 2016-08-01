'use strict';

/**
 * World of Warcraft Character API.
 */
module.exports = function(battlenet) {

  const character = function(params, config, callback) {
    params.path = '/wow/character/' + params.realm + '/' + params.name;
    config.qs = {
      fields: params.fields.toString()
    };
    battlenet.fetch(params, config, callback);
  };

  return {

    profile: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.fields = [];
      character(args.params, args.config, args.callback);
    },

    achievements: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.fields = ['achievements'];
      character(args.params, args.config, args.callback);
    },

    appearance: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.fields = ['appearance'];
      character(args.params, args.config, args.callback);
    },

    feed: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.fields = ['feed'];
      character(args.params, args.config, args.callback);
    },

    guild: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.fields = ['guild'];
      character(args.params, args.config, args.callback);
    },

    hunterPets: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.fields = ['hunterPets'];
      character(args.params, args.config, args.callback);
    },

    items: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.fields = ['items'];
      character(args.params, args.config, args.callback);
    },

    mounts: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.fields = ['mounts'];
      character(args.params, args.config, args.callback);
    },

    pets: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.fields = ['pets'];
      character(args.params, args.config, args.callback);
    },

    petSlots: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.fields = ['petSlots'];
      character(args.params, args.config, args.callback);
    },

    professions: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.fields = ['professions'];
      character(args.params, args.config, args.callback);
    },

    progression: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.fields = ['progression'];
      character(args.params, args.config, args.callback);
    },

    pvp: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.fields = ['pvp'];
      character(args.params, args.config, args.callback);
    },

    quests: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.fields = ['quests'];
      character(args.params, args.config, args.callback);
    },

    reputation: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.fields = ['reputation'];
      character(args.params, args.config, args.callback);
    },

    stats: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.fields = ['stats'];
      character(args.params, args.config, args.callback);
    },

    statistics: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.fields = ['statistics'];
      character(args.params, args.config, args.callback);
    },

    talents: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.fields = ['talents'];
      character(args.params, args.config, args.callback);
    },

    titles: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.fields = ['titles'];
      character(args.params, args.config, args.callback);
    },

    audit: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.fields = ['audit'];
      character(args.params, args.config, args.callback);
    },

    aggregate: function() {
      const args = battlenet.args.apply(null, arguments);

      character(args.params, args.config, args.callback);
    }

  };

};
