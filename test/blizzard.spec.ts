import { Blizzard } from '../src/core'

describe('Blizzard', () => {
  test('should implement all core methods', async () => {
    expect(Blizzard.prototype).toHaveProperty('get', expect.any(Function))
    expect(Blizzard.prototype).toHaveProperty('post', expect.any(Function))
    expect(Blizzard.prototype).toHaveProperty('getApplicationToken', expect.any(Function))
    expect(Blizzard.prototype).toHaveProperty('setApplicationToken', expect.any(Function))
    expect(Blizzard.prototype).toHaveProperty('validateApplicationToken', expect.any(Function))
    expect(Blizzard.prototype).toHaveProperty('battletag', expect.any(Function))
  })
})