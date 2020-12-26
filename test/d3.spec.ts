import { Blizzard } from '../src/core'
import { createInstance, D3 } from '../src/d3'

describe('Diablo 3', () => {
  test('should return a D3 instance of Blizzard', async () => {
    const d3 = await createInstance({
      key: 'key',
      secret: 'secret',
    })

    expect(d3).toBeInstanceOf(Blizzard)
    expect(d3).toBeInstanceOf(D3)
  })
})
