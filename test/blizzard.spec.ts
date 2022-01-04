import { Blizzard } from '../src/core'

class Client extends Blizzard {}

describe('Blizzard', () => {
  test('it prepares a client resource request', async () => {
    const blizzard = new Client({
      key: 'key',
      secret: 'secret',
      token: 'token',
      origin: 'us',
      locale: 'en_US',
    })

    const [url, request] = blizzard.prepareResourceRequest(
      { path: 'test', params: { key: 'value' } },
      { locale: 'en_GB' },
      { 'X-Test-Key': 'X-Test-Value' },
    )

    expect(url).toBe('https://us.api.blizzard.com/test')
    expect(request).toEqual({
      headers: {
        Authorization: 'Bearer token',
        'Content-Type': 'application/json',
        'User-Agent': expect.any(String),
        'X-Test-Key': 'X-Test-Value',
      },
      params: {
        key: 'value',
        locale: 'en_US',
      },
    })
  })

  test('it creates a client resource request', async () => {
    const blizzard = new Client({
      key: 'key',
      secret: 'secret',
      token: 'token',
    })

    const createResource = jest.fn().mockImplementation((args) => args)
    const getClientResource = jest.spyOn(Blizzard.prototype, 'getClientResource')

    const requestResource = blizzard.createClientResourceRequest(createResource)

    requestResource({ path: 'test', params: { key: 'value' } }, { 'X-Test-Key': 'X-Test-Value' })

    expect(createResource).toHaveBeenCalledWith({ params: { key: 'value' }, path: 'test' })
    expect(getClientResource).toHaveBeenCalledWith('https://us.api.blizzard.com/test', {
      headers: {
        Authorization: 'Bearer token',
        'Content-Type': 'application/json',
        'User-Agent': expect.any(String),
        'X-Test-Key': 'X-Test-Value',
      },
      params: {
        key: 'value',
        locale: 'en_US',
      },
    })
  })

  test('it sets an application token', async () => {
    const blizzard = new Client({
      key: 'key',
      secret: 'secret',
      token: 'token',
    })

    blizzard.setApplicationToken('new-token')

    expect(blizzard.defaults.token).toBe('new-token')
  })

  test('it gets an application token', async () => {
    const blizzard = new Client({
      key: 'key',
      secret: 'secret',
      token: 'token',
    })

    const spy = jest.spyOn(blizzard.axios, 'post')

    blizzard.getApplicationToken()

    expect(spy).toHaveBeenCalledWith('https://us.battle.net/oauth/token', null, {
      auth: { password: 'secret', username: 'key' },
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': expect.any(String),
      },
      params: { grant_type: 'client_credentials' },
    })
  })

  test('it validates an application token', async () => {
    const blizzard = new Client({
      key: 'key',
      secret: 'secret',
      token: 'token',
    })

    const spy = jest.spyOn(blizzard.axios, 'post')

    blizzard.validateApplicationToken()

    expect(spy).toHaveBeenCalledWith('https://us.battle.net/oauth/check_token', 'token=token', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': expect.any(String),
      },
    })
  })

  test('it refreshes an application token', async () => {
    const blizzard = new Client({
      key: 'key',
      secret: 'secret',
      token: 'token',
    })

    const spy = jest.spyOn(blizzard.axios, 'post')

    await blizzard.refreshApplicationToken()

    expect(spy).toHaveBeenCalledWith('https://us.battle.net/oauth/token', null, {
      auth: { password: 'secret', username: 'key' },
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': expect.any(String),
      },
      params: { grant_type: 'client_credentials' },
    })
    expect(blizzard.defaults.token).toBe('test_token')
  })
})
