/**
 * World of Warcraft Achievement API.
 */

module.exports = function(battlenet) {
  'use strict';

  return function() {
    var args = battlenet.args.apply(null, arguments);
    args.params.path = '/wow/achievement/' + args.params.id;
    battlenet.fetch(args.params, args.config, args.callback);
  };

};
