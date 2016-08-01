'use strict';

/**
 * Blizzard User Account API.
 */
module.exports = function(battlenet) {

  const account = function(params, config, callback) {
    config.qs = {
      access_token: params.access_token
    };
    battlenet.fetch(params, config, callback);
  };

  return {

    user: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.path = '/account/user';
      account(args.params, args.config, args.callback);
    },

    wow: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.path = '/wow/user/characters';
      account(args.params, args.config, args.callback);
    },

    sc2: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.path = '/sc2/profile/user';
      account(args.params, args.config, args.callback);
    }

  };

};
