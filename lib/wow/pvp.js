/**
 * World of Warcraft PVP API.
 */

module.exports = function(battlenet) {
  'use strict';

  return {

    leaderboards: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/wow/leaderboard/' + args.params.bracket;
      battlenet.fetch(args.params, args.config, args.callback);
    }

  };

};
