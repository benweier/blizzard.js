/**
 * World of Warcraft Quest API.
 */

module.exports = function(battlenet) {
  'use strict';

  return function() {
    var args = battlenet.args.apply(null, arguments);
    args.params.path = '/wow/quest/' + args.params.id;
    battlenet.fetch(args.params, args.config, args.callback);
  };

};
