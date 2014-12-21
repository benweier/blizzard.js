/**
 * Starcraft II Data API.
 */

module.exports = function(battlenet) {
  'use strict';

  return {

    achievements: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/sc2/data/achievements';
      battlenet.fetch(args.params, args.config, args.callback);
    },

    rewards: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/sc2/data/rewards';
      battlenet.fetch(args.params, args.config, args.callback);
    }

  };

};
