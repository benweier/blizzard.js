export type Origins = 'us' | 'eu' | 'sea' | 'kr' | 'tw'

export type Endpoint = {
  hostname: string
  defaultLocale: string
  locales: string[]
}

export type Endpoints = {
  us: Endpoint
  eu: Endpoint
  sea: Endpoint
  kr: Endpoint
  tw: Endpoint
}

const endpoints: Endpoints = {
  us: {
    hostname: 'https://us.api.blizzard.com',
    defaultLocale: 'en_US',
    locales: ['en_US', 'es_MX', 'pt_BR', 'multi'],
  },
  eu: {
    hostname: 'https://eu.api.blizzard.com',
    defaultLocale: 'en_GB',
    locales: ['en_GB', 'es_ES', 'fr_FR', 'ru_RU', 'de_DE', 'pt_PT', 'it_IT', 'multi'],
  },
  sea: {
    hostname: 'https://sea.api.blizzard.com',
    defaultLocale: 'en_US',
    locales: ['en_US', 'multi'],
  },
  kr: {
    hostname: 'https://kr.api.blizzard.com',
    defaultLocale: 'ko_KR',
    locales: ['ko_KR', 'en_GB', 'en_US', 'multi'],
  },
  tw: {
    hostname: 'https://tw.api.blizzard.com',
    defaultLocale: 'zh_TW',
    locales: ['zh_TW', 'en_GB', 'en_US', 'multi'],
  },
}

export function getEndpoint(
  origin: Origins = 'us',
  locale?: string,
): { origin: Origins; locale: string; hostname: string } {
  const endpoint = endpoints[origin]

  return {
    origin,
    hostname: endpoint.hostname,
    locale: endpoint.locales.find((item: string) => item === locale) ?? endpoint.defaultLocale,
  }
}
