/**
 * World of Warcraft User Account API.
 */

module.exports = function(battlenet) {
  'use strict';

  return function() {
    var args = battlenet.args.apply(null, arguments);
    args.params.path = '/wow/user/characters';
    args.params.qs = {
      access_token: args.params.accessToken
    };
    battlenet.fetch(args.params, args.config, args.callback);
  };

};
