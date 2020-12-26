import { Blizzard } from '../src/core'
import { createInstance, WoW } from '../src/wow'

describe('World of Warcraft', () => {
  test('should return a WoW instance of Blizzard', async () => {
    const wow = await createInstance({
      key: 'key',
      secret: 'secret',
    })

    expect(wow).toBeInstanceOf(Blizzard)
    expect(wow).toBeInstanceOf(WoW)
  })
})
