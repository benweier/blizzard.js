/**
 * World of Warcraft Spell API.
 */

module.exports = function(battlenet) {
  'use strict';

  return function() {
    var args = battlenet.args.apply(null, arguments);
    args.params.path = '/wow/spell/' + args.params.id;
    battlenet.fetch(args.params, args.config, args.callback);
  };

};
