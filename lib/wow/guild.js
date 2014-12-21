/**
 * World of Warcraft Guild API.
 */

module.exports = function(battlenet) {
  'use strict';

  var guild = function(params, config, callback) {
    params.path = '/wow/guild/' + params.realm + '/' + params.name;
    params.qs = {
      fields: params.fields.join(','),
    };

    battlenet.fetch(params, config, callback);
  };

  return {

    profile: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.fields = [];
      guild(args.params, args.config, args.callback);
    },

    members: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.fields = ['members'];
      guild(args.params, args.config, args.callback);
    },

    achievements: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.fields = ['achievements'];
      guild(args.params, args.config, args.callback);
    },

    news: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.fields = ['news'];
      guild(args.params, args.config, args.callback);
    },

    challenge: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.fields = ['challenge'];
      guild(args.params, args.config, args.callback);
    },

    aggregate: function() {
      var args = battlenet.args.apply(null, arguments);
      guild(args.params, args.config, args.callback);
    }

  };

};
