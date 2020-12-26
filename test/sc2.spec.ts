import { Blizzard } from '../src/core'
import { createInstance, SC2 } from '../src/sc2'

describe('Starcraft 2', () => {
  test('should return a SC2 instance of Blizzard', async () => {
    const sc2 = await createInstance({
      key: 'key',
      secret: 'secret',
    })

    expect(sc2).toBeInstanceOf(Blizzard)
    expect(sc2).toBeInstanceOf(SC2)
  })
})
