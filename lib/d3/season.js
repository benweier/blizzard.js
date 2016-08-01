'use strict';

/**
 * Diablo III Season API.
 */
module.exports = function(battlenet) {

  return {

    index: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.path = '/data/d3/season/';
      battlenet.fetch(args.params, args.config, args.callback);
    },

    season: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.path = '/data/d3/season/' + args.params.id;
      battlenet.fetch(args.params, args.config, args.callback);
    },

    leaderboard: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.path = '/data/d3/season/' + args.params.id + '/' + args.params.leaderboard;
      battlenet.fetch(args.params, args.config, args.callback);
    }

  };

};
