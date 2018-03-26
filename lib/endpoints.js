/**
 * @file Exports Blizzard API regional endpoints.
 * @module lib/endpoints
 */

/**
 * Blizzard API regional endpoints.
 *
 * @typedef {Object} Endpoint
 * @prop    {String} hostname The regional hostname
 * @prop    {String} locale   A regional locale
 */
const endpoints = {
  us: {
    hostname: 'https://us.api.battle.net',
    defaultLocale: 'en_US',
    locales: ['en_US', 'es_MX', 'pt_BR'],
  },
  eu: {
    hostname: 'https://eu.api.battle.net',
    defaultLocale: 'en_GB',
    locales: ['en_GB', 'es_ES', 'fr_FR', 'ru_RU', 'de_DE', 'pt_PT', 'it_IT'],
  },
  sea: {
    hostname: 'https://sea.api.battle.net',
    defaultLocale: 'en_US',
    locales: ['en_US'],
  },
  kr: {
    hostname: 'https://kr.api.battle.net',
    defaultLocale: 'ko_KR',
    locales: ['ko_KR', 'en_GB', 'en_US'],
  },
  tw: {
    hostname: 'https://tw.api.battle.net',
    defaultLocale: 'zh_TW',
    locales: ['zh_TW', 'en_GB', 'en_US'],
  },
  cn: {
    hostname: 'https://api.battlenet.com.cn',
    defaultLocale: 'zh_CN',
    locales: ['zh_CN'],
  },
};

/**
 * Get the endpoint for a given region.
 *
 * @param  {String} [key=us] A regional key
 * @param  {String} [locale] An endpoint locale
 * @return {Endpoint}        The endpoint data object
 */
exports.getEndpoint = function getEndpoint (key, locale) {
  const endpoint = endpoints[key] || endpoints.us;

  return Object.assign(
    {},
    { hostname: endpoint.hostname },
    { locale: endpoint.locales.find(item => item === locale) || endpoint.defaultLocale }
  );
};
