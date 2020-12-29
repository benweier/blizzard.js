import { Blizzard } from '../src/core'
import { createClient } from '../src/create-client'

const token = {
  access_token: 'token',
  token_type: 'type',
  expires_in: 9999999999,
  scope: '',
}

class Client extends Blizzard {}

describe('Create Client', () => {
  beforeAll(() => {
    jest.spyOn(Blizzard.prototype, 'getApplicationToken')
    jest.spyOn(Blizzard.prototype, 'validateApplicationToken')
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('should throw if missing `key`', async () => {
    const createInstance = async () => await createClient(Client)({ key: '', secret: 'secret' })

    await expect(createInstance()).rejects.toThrow(new Error(`Client missing 'key' parameter`))
  })

  test('should throw if missing `secret`', async () => {
    const createInstance = async () => await createClient(Client)({ key: 'key', secret: '' })

    await expect(createInstance()).rejects.toThrow(new Error(`Client missing 'secret' parameter`))
  })

  test('should validate an application token', async () => {
    await createClient(Client)({ key: 'key', secret: 'secret', token })

    expect(Blizzard.prototype.validateApplicationToken).toHaveBeenCalled()
    expect(Blizzard.prototype.getApplicationToken).not.toHaveBeenCalled()
  })

  test('should get an application token', async () => {
    await createClient(Client)({ key: 'key', secret: 'secret' })

    expect(Blizzard.prototype.validateApplicationToken).not.toHaveBeenCalled()
    expect(Blizzard.prototype.getApplicationToken).toHaveBeenCalled()
  })
})
