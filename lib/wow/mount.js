/**
 * World of Warcraft Mount API.
 */

module.exports = function(battlenet) {
  'use strict';

  return function() {
    var args = battlenet.args.apply(null, arguments);
    args.params.path = '/wow/mount/';

    battlenet.fetch(args.params, args.config, args.callback);
  };

};
