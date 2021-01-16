import { Blizzard } from '../src/core'
import { createInstance, WoW, WoWClient } from '../src/wow'

const headers = {
  'User-Agent': expect.any(String),
  'Content-Type': 'application/json',
  'Battlenet-Namespace': expect.stringMatching(/(profile|static|dynamic)-(us|eu|sea|kr|tw)/),
  Authorization: expect.any(String),
}
const params = { locale: expect.any(String) }

describe('World of Warcraft', () => {
  let wow: WoWClient

  beforeAll(async () => {
    jest.spyOn(Blizzard.prototype, 'getClientResource')

    wow = await createInstance({
      key: 'key',
      secret: 'secret',
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('should return a WoW instance of Blizzard', async () => {
    expect(wow).toBeInstanceOf(Blizzard)
    expect(wow).toBeInstanceOf(WoW)
  })

  test('accountProfile', async () => {
    await wow.accountProfile({ token: 'token' })

    expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith('https://us.api.blizzard.com/profile/user/wow', {
      headers,
      params,
    })
  })
})
