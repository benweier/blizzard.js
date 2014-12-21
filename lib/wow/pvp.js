/**
 * World of Warcraft PVP API.
 */

module.exports = function(battlenet) {
  'use strict';

  return {

    leaderboards: function(params, callback) {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/wow/leaderboard/' + params.bracket;
      battlenet.fetch(args.params, args.config, args.callback);
    }

  };

};
