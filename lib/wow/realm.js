'use strict';

/**
 * World of Warcraft Realm Status API.
 */
module.exports = function(battlenet) {

  return function() {
    const args = battlenet.args.apply(null, arguments);

    args.params.path = '/wow/realm/status';

    if (args.params.realms) {
      args.config.qs = {
        realms: args.params.realms.toString()
      };
    }

    battlenet.fetch(args.params, args.config, args.callback);
  };

};
