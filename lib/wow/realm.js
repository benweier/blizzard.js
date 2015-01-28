/**
 * World of Warcraft Realm Status API.
 */

module.exports = function(battlenet) {
  'use strict';

  return function() {
    var args = battlenet.args.apply(null, arguments);
    args.params.path = '/wow/realm/status';
    args.config.qs = {
      realms: args.params.realms.toString()
    };
    battlenet.fetch(args.params, args.config, args.callback);
  };

};
