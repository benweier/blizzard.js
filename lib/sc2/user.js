/**
 * Starcraft II User Account API.
 */

module.exports = function(battlenet) {
  'use strict';

  return function() {
    var args = battlenet.args.apply(null, arguments);
    args.params.path = '/sc2/profile/user';
    args.params.qs = {
      access_token: args.params.accessToken
    };
    battlenet.fetch(args.params, args.config, args.callback);
  };

};
