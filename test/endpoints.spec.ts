import { getEndpoint } from '../src/endpoints'

describe('Endpoints', () => {
  test('returns endpoint with default origin and locale', () => {
    const endpoint = getEndpoint()

    expect(endpoint).toEqual({
      origin: 'us',
      hostname: 'https://us.api.blizzard.com',
      locale: 'en_US',
    })
  })

  test('returns EU endpoint with locale', () => {
    const endpoint = getEndpoint('eu', 'es_ES')

    expect(endpoint).toEqual({
      origin: 'eu',
      hostname: 'https://eu.api.blizzard.com',
      locale: 'es_ES',
    })
  })

  test('returns SEA endpoint with default locale', () => {
    const endpoint = getEndpoint('sea')

    expect(endpoint).toEqual({
      origin: 'sea',
      hostname: 'https://sea.api.blizzard.com',
      locale: 'en_US',
    })
  })
})
