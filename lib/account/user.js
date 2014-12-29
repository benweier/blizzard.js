/**
 * Blizzard User Account API.
 */

module.exports = function(battlenet) {
  'use strict';

  return {

    id: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/account/user/id';
      args.params.qs = {
        access_token: args.params.accessToken
      };
      battlenet.fetch(args.params, args.config, args.callback);
    },

    battletag: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/account/user/battletag';
      args.params.qs = {
        access_token: args.params.accessToken
      };
      battlenet.fetch(args.params, args.config, args.callback);
    }

  };

};
