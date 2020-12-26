import { Blizzard } from '../src/core'
import { createInstance, HS } from '../src/hs'

describe('Hearthstone', () => {
  test('should return a HS instance of Blizzard', async () => {
    const hs = await createInstance({
      key: 'key',
      secret: 'secret',
    })

    expect(hs).toBeInstanceOf(Blizzard)
    expect(hs).toBeInstanceOf(HS)
  })
})
