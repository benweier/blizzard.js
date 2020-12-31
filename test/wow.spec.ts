import { Blizzard } from '../src/core'
import { createInstance, WoW, WoWClient } from '../src/wow'

describe('World of Warcraft', () => {
  let wow: WoWClient

  beforeAll(async () => {
    jest.spyOn(Blizzard.prototype, 'get')

    wow = await createInstance({
      key: 'key',
      secret: 'secret',
    })
  })

  test('should return a WoW instance of Blizzard', async () => {
    expect(wow).toBeInstanceOf(Blizzard)
    expect(wow).toBeInstanceOf(WoW)
  })

  test('should request an account profile', async () => {
    await wow.accountProfile({ token: 'token' })

    expect(Blizzard.prototype.get).toHaveBeenCalledWith('https://us.api.blizzard.com/profile/user/wow', {
      headers: {
        'user-agent': expect.any(String),
        'content-type': 'application/json',
        'battlenet-namespace': 'profile-us',
        authorization: 'bearer token',
      },
      params: { locale: 'en_US' },
    })
  })
})
