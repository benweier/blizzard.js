import { afterEach, beforeAll, describe, expect, test, vi } from 'vitest'
import { Blizzard } from '../src/core'
import { createClient } from '../src/create-client'

class Client extends Blizzard {}

describe('Create Client', () => {
  beforeAll(() => {
    vi.spyOn(Blizzard.prototype, 'getApplicationToken')
    vi.spyOn(Blizzard.prototype, 'validateApplicationToken')
  })

  afterEach(() => {
    vi.clearAllMocks()
    vi.useRealTimers()
  })

  test('should throw if missing `key`', async () => {
    const createInstance = async () => await createClient(Client)({ key: '', secret: 'secret' })

    await expect(createInstance()).rejects.toThrow(new Error(`Client missing 'key' parameter`))
  })

  test('should throw if missing `secret`', async () => {
    const createInstance = async () => await createClient(Client)({ key: 'key', secret: '' })

    await expect(createInstance()).rejects.toThrow(new Error(`Client missing 'secret' parameter`))
  })

  test('should validate an application token if provided', async () => {
    await createClient(Client)({ key: 'key', secret: 'secret', token: 'token' })

    expect(Blizzard.prototype.validateApplicationToken).toHaveBeenCalled()
    expect(Blizzard.prototype.getApplicationToken).not.toHaveBeenCalled()
  })

  test('should get an application token if expiring token provided', async () => {
    await createClient(Client)({ key: 'key', secret: 'secret', token: 'expiring' })

    expect(Blizzard.prototype.validateApplicationToken).toHaveBeenCalled()
    expect(Blizzard.prototype.getApplicationToken).toHaveBeenCalled()
  })

  test('should get an application token if expired token provided', async () => {
    await createClient(Client)({ key: 'key', secret: 'secret', token: 'expired' })

    expect(Blizzard.prototype.validateApplicationToken).toHaveBeenCalled()
    expect(Blizzard.prototype.getApplicationToken).toHaveBeenCalled()
  })

  test('should get an application token if not provided', async () => {
    await createClient(Client)({ key: 'key', secret: 'secret' })

    expect(Blizzard.prototype.validateApplicationToken).not.toHaveBeenCalled()
    expect(Blizzard.prototype.getApplicationToken).toHaveBeenCalled()
  })

  test('should not validate or refresh an application token if callback disabled', async () => {
    await createClient(Client)({ key: 'key', secret: 'secret' }, false)

    expect(Blizzard.prototype.validateApplicationToken).not.toHaveBeenCalled()
    expect(Blizzard.prototype.getApplicationToken).not.toHaveBeenCalled()
  })

  test('should return an application token if callback provided', async () => {
    const callback = vi.fn()
    await createClient(Client)({ key: 'key', secret: 'secret' }, callback)

    expect(callback).toHaveBeenCalledWith({
      access_token: expect.any(String),
      expires_in: expect.any(Number),
      token_type: expect.any(String),
    })
  })

  test('should cancel a scheduled token refresh', async () => {
    vi.useFakeTimers()

    const callback = vi.fn()
    const client = await createClient(Client)({ key: 'key', secret: 'secret' }, callback)

    expect(callback).toHaveBeenCalledTimes(1)

    client.cancelTokenRefresh()
    await vi.advanceTimersByTimeAsync(86400 * 1000 * 2)

    expect(callback).toHaveBeenCalledTimes(1)
  })

  test('should retry a failed scheduled token refresh', async () => {
    vi.useFakeTimers()

    const onTokenRefreshError = vi.fn()
    const client = await createClient(Client)({ key: 'key', secret: 'secret' }, true, onTokenRefreshError)

    vi.spyOn(client, 'getApplicationToken').mockRejectedValueOnce(new Error('boom'))
    client.setApplicationToken('stale')

    await vi.advanceTimersByTimeAsync(86400 * 1000 - 60000)

    expect(onTokenRefreshError).toHaveBeenCalledWith(new Error('boom'))
    expect(client.defaults.token).toBe('stale')

    await vi.advanceTimersByTimeAsync(60000)

    expect(client.defaults.token).toBe('test_token')
  })
})
