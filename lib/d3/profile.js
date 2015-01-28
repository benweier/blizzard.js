/**
 * Diablo III Profile API.
 */

module.exports = function(battlenet) {
  'use strict';

  return {

    career: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/d3/profile/' + args.params.tag + '/';
      battlenet.fetch(args.params, args.config, args.callback);
    },

    hero: function() {
      var args = battlenet.args.apply(null, arguments);
      args.params.path = '/d3/profile/' + [args.params.tag, 'hero', args.params.hero].join('/');
      battlenet.fetch(args.params, args.config, args.callback);
    }

  };

};
