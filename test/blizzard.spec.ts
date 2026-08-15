import { afterEach, describe, expect, test, vi } from 'vitest'
import { Blizzard } from '../src/core'

class Client extends Blizzard {}

describe('Blizzard', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

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

    const createResource = vi.fn().mockImplementation((args) => args)
    const getClientResource = vi.spyOn(Blizzard.prototype, 'getClientResource')

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

  test('it fetches a client resource with encoded params', async () => {
    const blizzard = new Client({
      key: 'key',
      secret: 'secret',
      token: 'token',
    })

    const response = await blizzard.getClientResource('https://us.api.blizzard.com/test', {
      headers: { Authorization: 'Bearer token' },
      params: { key: 'value', locale: 'en_US', skipped: undefined },
    })

    expect(fetch).toHaveBeenCalledWith('https://us.api.blizzard.com/test?key=value&locale=en_US', {
      method: 'GET',
      headers: { Authorization: 'Bearer token' },
    })
    expect(response).toEqual({
      data: {},
      status: 200,
      statusText: expect.any(String),
      headers: expect.any(Object),
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

    await blizzard.getApplicationToken()

    expect(fetch).toHaveBeenCalledWith('https://us.battle.net/oauth/token?grant_type=client_credentials', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from('key:secret').toString('base64')}`,
        'Content-Type': 'application/json',
        'User-Agent': expect.any(String),
      },
    })
  })

  test('it validates an application token', async () => {
    const blizzard = new Client({
      key: 'key',
      secret: 'secret',
      token: 'token',
    })

    await blizzard.validateApplicationToken()

    const [url, init] = vi.mocked(fetch).mock.calls.at(-1) as [string, { method: string; body: URLSearchParams }]

    expect(url).toBe('https://us.battle.net/oauth/check_token')
    expect(init.method).toBe('POST')
    expect(String(init.body)).toBe('token=token')
  })

  test('it throws a response error on a failed request', async () => {
    const blizzard = new Client({
      key: 'key',
      secret: 'secret',
      token: 'expired',
    })

    await expect(blizzard.validateApplicationToken()).rejects.toMatchObject({
      name: 'ResponseError',
      response: expect.objectContaining({
        status: 400,
        data: expect.objectContaining({ error: 'invalid_token' }),
      }),
    })
  })

  test('it refreshes an application token', async () => {
    const blizzard = new Client({
      key: 'key',
      secret: 'secret',
      token: 'token',
    })

    await blizzard.refreshApplicationToken()

    expect(fetch).toHaveBeenCalledWith(
      'https://us.battle.net/oauth/token?grant_type=client_credentials',
      expect.objectContaining({ method: 'POST' }),
    )
    expect(blizzard.defaults.token).toBe('test_token')
  })
})
