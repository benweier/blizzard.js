/**
 * Blizzard User Account API.
 */

module.exports = function(battlenet) {
  'use strict';

  var account = function(params, config, callback) {
    args.config.qs = {
      access_token: args.params.accessToken
    };
    battlenet.fetch(params, config, callback);
  };

  return {

    id: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/account/user/id';
      account(args.params, args.config, args.callback);
    },

    battletag: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/account/user/battletag';
      account(args.params, args.config, args.callback);
    },

    wow: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/wow/user/characters';
      account(args.params, args.config, args.callback);
    },

    sc2: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/sc2/profile/user';
      account(args.params, args.config, args.callback);
    }

  };

};
