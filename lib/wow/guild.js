'use strict';

/**
 * World of Warcraft Guild API.
 */
module.exports = function(battlenet) {

  const guild = function(params, config, callback) {
    params.path = '/wow/guild/' + params.realm + '/' + params.name;
    config.qs = {
      fields: params.fields.toString()
    };
    battlenet.fetch(params, config, callback);
  };

  return {

    profile: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.fields = [];
      guild(args.params, args.config, args.callback);
    },

    members: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.fields = ['members'];
      guild(args.params, args.config, args.callback);
    },

    achievements: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.fields = ['achievements'];
      guild(args.params, args.config, args.callback);
    },

    news: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.fields = ['news'];
      guild(args.params, args.config, args.callback);
    },

    challenge: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.fields = ['challenge'];
      guild(args.params, args.config, args.callback);
    },

    aggregate: function() {
      const args = battlenet.args.apply(null, arguments);

      guild(args.params, args.config, args.callback);
    }

  };

};
