/**
 * World of Warcraft Realm Status API.
 */

module.exports = function(battlenet) {
  'use strict';

  return function() {
    var args = battlenet.args.apply(null, arguments);
    args.params.path = '/wow/realm/status';
    if (args.params.realms instanceof Array) {
      args.params.qs = {
        realms: args.params.realms.join(',')
      };
    }
    battlenet.fetch(args.params, args.config, args.callback);
  };

};
