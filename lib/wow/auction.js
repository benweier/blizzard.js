'use strict';

/**
 * World of Warcraft Auction API.
 */
module.exports = function(battlenet) {

  return function() {
    const args = battlenet.args.apply(null, arguments);

    args.params.path = '/wow/auction/data/' + args.params.realm;
    battlenet.fetch(args.params, args.config, args.callback);
  };

};
