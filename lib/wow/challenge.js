'use strict';

/**
 * World of Warcraft Challenge API.
 */
module.exports = function(battlenet) {

  return {

    realmLeaderboard: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.path = '/wow/challenge/' + args.params.realm;
      battlenet.fetch(args.params, args.config, args.callback);
    },

    regionLeaderboard: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.path = '/wow/challenge/region';
      battlenet.fetch(args.params, args.config, args.callback);
    }

  };

};
