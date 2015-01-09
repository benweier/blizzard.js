/**
 * World of Warcraft Auction API.
 */

module.exports = function(battlenet) {
  'use strict';

  return function() {
    var args = battlenet.args.apply(null, arguments);
    args.params.path = '/wow/auction/data/' + args.params.realm;
    battlenet.fetch(args.params, args.config, args.callback);
  };

};
