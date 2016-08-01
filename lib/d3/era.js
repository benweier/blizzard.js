'use strict';

/**
 * Diablo III Era API.
 */
module.exports = function(battlenet) {

  return {

    index: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.path = '/data/d3/era/';
      battlenet.fetch(args.params, args.config, args.callback);
    },

    era: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.path = '/data/d3/era/' + args.params.id;
      battlenet.fetch(args.params, args.config, args.callback);
    },

    leaderboard: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.path = '/data/d3/era/' + args.params.id + '/' + args.params.leaderboard;
      battlenet.fetch(args.params, args.config, args.callback);
    }

  };

};
