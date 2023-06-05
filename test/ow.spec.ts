import { Blizzard } from '../src/core'
import { createInstance, Overwatch, OverwatchClient } from '../src/ow'

const headers = {
  'User-Agent': expect.any(String),
  'Content-Type': 'application/json',
  Authorization: expect.any(String),
}
const params = { locale: expect.any(String) }

describe('Hearthstone', () => {
  let ow: OverwatchClient

  beforeAll(async () => {
    jest.spyOn(Blizzard.prototype, 'getClientResource')

    ow = await createInstance({
      key: 'key',
      secret: 'secret',
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('instance', async () => {
    expect(ow).toBeInstanceOf(Blizzard)
    expect(ow).toBeInstanceOf(Overwatch)
  })

  test('summary', async () => {
    await ow.summary()

    expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith('https://us.api.blizzard.com/owl/v1/owl2', {
      headers,
      params,
    })
  })

  test('players', async () => {
    await ow.players({ id: '1234' })

    expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
      'https://us.api.blizzard.com/owl/v1/players/1234',
      {
        headers,
        params,
      },
    )
  })

  test('matches', async () => {
    await ow.matches({ id: '1234' })

    expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
      'https://us.api.blizzard.com/owl/v1/matches/1234',
      {
        headers,
        params,
      },
    )
  })

  test('segments', async () => {
    await ow.segments({ id: '1234' })

    expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
      'https://us.api.blizzard.com/owl/v1/segments/1234',
      {
        headers,
        params,
      },
    )
  })

  test('teams', async () => {
    await ow.teams({ id: '1234' })

    expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith('https://us.api.blizzard.com/owl/v1/teams/1234', {
      headers,
      params,
    })
  })
})
