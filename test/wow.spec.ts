import { Blizzard } from '../src/core'
import { createInstance, WoW } from '../src/wow'

describe('World of Warcraft', () => {
  const blizzard = Blizzard.prototype as any
  let wow: WoW

  beforeAll(async () => {
    jest.spyOn(blizzard, 'get')

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
    await wow.accountProfile()

    expect(blizzard.get).toHaveBeenCalledWith('https://us.api.blizzard.com/profile/user/wow', {
      headers: {
        'user-agent': expect.any(String),
        'content-type': 'application/json',
        'battlenet-namespace': 'profile-us',
        authorization: 'bearer test_token',
      },
      params: { locale: 'en_US' },
    })
  })
})
