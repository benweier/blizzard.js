/**
 * World of Warcraft Character API.
 */

module.exports = function(battlenet) {
  'use strict';

  var character = function(params, config, callback) {
    params.path = '/wow/character/' + params.realm + '/' + params.name;
    params.qs = {
      fields: params.fields.join(','),
    };

    battlenet.fetch(params, config, callback);
  };

  return {

    profile: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.fields = [];
      character(args.params, args.config, args.callback);
    },

    achievements: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.fields = ['achievements'];
      character(args.params, args.config, args.callback);
    },

    appearance: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.fields = ['appearance'];
      character(args.params, args.config, args.callback);
    },

    guild: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.fields = ['guild'];
      character(args.params, args.config, args.callback);
    },

    hunterPets: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.fields = ['hunterPets'];
      character(args.params, args.config, args.callback);
    },

    items: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.fields = ['items'];
      character(args.params, args.config, args.callback);
    },

    mounts: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.fields = ['mounts'];
      character(args.params, args.config, args.callback);
    },

    pets: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.fields = ['pets'];
      character(args.params, args.config, args.callback);
    },

    petSlots: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.fields = ['petSlots'];
      character(args.params, args.config, args.callback);
    },

    progression: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.fields = ['progression'];
      character(args.params, args.config, args.callback);
    },

    pvp: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.fields = ['pvp'];
      character(args.params, args.config, args.callback);
    },

    quests: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.fields = ['quests'];
      character(args.params, args.config, args.callback);
    },

    reputation: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.fields = ['reputation'];
      character(args.params, args.config, args.callback);
    },

    stats: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.fields = ['stats'];
      character(args.params, args.config, args.callback);
    },

    talents: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.fields = ['talents'];
      character(args.params, args.config, args.callback);
    },

    titles: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.fields = ['titles'];
      character(args.params, args.config, args.callback);
    },

    audit: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.fields = ['audit'];
      character(args.params, args.config, args.callback);
    },

    aggregate: function() {
      var args = battlenet.args.apply(null, arguments);
      character(args.params, args.config, args.callback);
    }

  };

};
