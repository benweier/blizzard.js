import { Blizzard } from '../src/core'
import { createInstance, WoWClassic, WoWClassicClient } from '../src/wow/classic'

describe('World of Warcraft', () => {
  let wow: WoWClassicClient

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

  test('instance', async () => {
    expect(wow).toBeInstanceOf(Blizzard)
    expect(wow).toBeInstanceOf(WoWClassic)
  })
})
