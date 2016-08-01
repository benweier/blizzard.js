'use strict';

/**
 * Diablo III Profile API.
 */
module.exports = function(battlenet) {

  return {

    career: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.path = '/d3/profile/' + args.params.tag + '/';
      battlenet.fetch(args.params, args.config, args.callback);
    },

    hero: function() {
      const args = battlenet.args.apply(null, arguments);

      args.params.path = '/d3/profile/' + args.params.tag + '/hero/' + args.params.hero;
      battlenet.fetch(args.params, args.config, args.callback);
    }

  };

};
