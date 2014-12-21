/**
 * World of Warcraft Challenge API.
 */

module.exports = function(battlenet) {
  'use strict';

  return {

    realmLeaderboard: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/wow/challenge/' + args.params.realm;
      battlenet.fetch(args.params, args.config, args.callback);
    },

    regionLeaderboard: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/wow/challenge/region';
      battlenet.fetch(args.params, args.config, args.callback);
    }

  };

};
