/**
 * @file Exports Blizzard API regional endpoints.
 * @module
 */
'use strict';

/**
 * Blizzard API regional endpoints.
 *
 * @typedef {Object} Endpoint
 * @prop    {String} hostname      The regional hostname
 * @prop    {String} defaultLocale The default locale for the region
 * @prop    {Array} locales        A list of available locales for the region
 */
const endpoints = {
  us: {
    hostname: 'https://us.api.battle.net',
    defaultLocale: 'en_US',
    locales: ['en_US', 'es_MX', 'pt_BR']
  },
  eu: {
    hostname: 'https://eu.api.battle.net',
    defaultLocale: 'en_GB',
    locales: ['en_GB', 'es_ES', 'fr_FR', 'ru_RU', 'de_DE', 'pt_PT', 'it_IT']
  },
  sea: {
    hostname: 'https://sea.api.battle.net',
    defaultLocale: 'en_US',
    locales: ['en_US']
  },
  kr: {
    hostname: 'https://kr.api.battle.net',
    defaultLocale: 'ko_KR',
    locales: ['ko_KR']
  },
  tw: {
    hostname: 'https://tw.api.battle.net',
    defaultLocale: 'zh_TW',
    locales: ['zh_TW']
  },
  cn: {
    hostname: 'https://api.battlenet.com.cn',
    defaultLocale: 'zh_CN',
    locales: ['zh_CN']
  }
};

/**
 * Return the endpoint data for a given region key.
 *
 * @param  {String} [key=us] The region to get endpoint for.
 * @return {Endpoint}        The regional endpoint
 */
exports.getEndpoint = function getEndpoint (key) {
  const origin = key || 'us';

  return endpoints[origin];
};
