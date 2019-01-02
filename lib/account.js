/**
 * @file Exports the Account API methods.
 * @module lib/account
 */

/**
 * Account class constructor.
 *
 * @constructor
 * @param {Object} blizzard A Blizzard.js instance
 */
const Account = function Account(blizzard) {
  this.blizzard = blizzard;
};

/**
 * Fetch user account data.
 *
 * @param {Object} args
 * @param {Object} args.token The user authentication token
 * @return {Promise} A thenable Promises/A+ reference
 */
Account.prototype.userInfo = function getUserInfo(args) {
  return this.blizzard.get('/oauth/userinfo', args);
};

module.exports = Account;
