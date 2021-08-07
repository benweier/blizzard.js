import { Blizzard } from '../src/core'
import { createInstance, SC2, SC2Client } from '../src/sc2'

const headers = {
  'User-Agent': expect.any(String),
  'Content-Type': 'application/json',
  Authorization: expect.any(String),
}
const params = { locale: expect.any(String) }

describe('Diablo 3', () => {
  let sc2: SC2Client

  beforeAll(async () => {
    jest.spyOn(Blizzard.prototype, 'getClientResource')

    sc2 = await createInstance({
      key: 'key',
      secret: 'secret',
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('instance', async () => {
    expect(sc2).toBeInstanceOf(Blizzard)
    expect(sc2).toBeInstanceOf(SC2)
  })

  describe('profile', () => {
    test('default', async () => {
      await sc2.profile({ region: 1 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenLastCalledWith(
        'https://us.api.blizzard.com/sc2/static/profile/1',
        { headers, params },
      )
    })

    test('profile', async () => {
      await sc2.profile({ region: 1, realm: 2, profile: 3 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenLastCalledWith(
        'https://us.api.blizzard.com/sc2/static/profile/1/2/3',
        { headers, params },
      )
    })
  })

  test('metadata', async () => {
    await sc2.metadata({ region: 1, realm: 2, profile: 3 })

    expect(Blizzard.prototype.getClientResource).toHaveBeenLastCalledWith(
      'https://us.api.blizzard.com/sc2/metadata/profile/1/2/3',
      { headers, params },
    )
  })

  describe('profileLadder', () => {
    test('default', async () => {
      await sc2.profileLadder({ region: 1, realm: 2, profile: 3 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenLastCalledWith(
        'https://us.api.blizzard.com/sc2/profile/1/2/3/ladder/summary',
        { headers, params },
      )
    })

    test('ladder', async () => {
      await sc2.profileLadder({ region: 1, realm: 2, profile: 3, id: 0 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenLastCalledWith(
        'https://us.api.blizzard.com/sc2/profile/1/2/3/ladder/0',
        { headers, params },
      )
    })
  })

  describe('ladder', () => {
    test('grandmaster', async () => {
      await sc2.ladder({ region: 1, resource: 'grandmaster' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenLastCalledWith(
        'https://us.api.blizzard.com/sc2/ladder/grandmaster/1',
        { headers, params },
      )
    })

    test('season', async () => {
      await sc2.ladder({ region: 1, resource: 'season' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenLastCalledWith(
        'https://us.api.blizzard.com/sc2/ladder/season/1',
        { headers, params },
      )
    })
  })

  test('league', async () => {
    await sc2.league({ league: 5, queue: 1, season: 2, teamType: 0 })

    expect(Blizzard.prototype.getClientResource).toHaveBeenLastCalledWith(
      'https://us.api.blizzard.com/data/sc2/league/2/1/0/5',
      { headers, params },
    )
  })

  describe('legacyProfile', () => {
    test('profile', async () => {
      await sc2.legacyProfile({ region: 1, realm: 2, profile: 3 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenLastCalledWith(
        'https://us.api.blizzard.com/sc2/legacy/profile/1/2/3',
        { headers, params },
      )
    })

    test('ladders', async () => {
      await sc2.legacyProfile({ region: 1, realm: 2, profile: 3, resource: 'ladders' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenLastCalledWith(
        'https://us.api.blizzard.com/sc2/legacy/profile/1/2/3/ladders',
        { headers, params },
      )
    })

    test('matches', async () => {
      await sc2.legacyProfile({ region: 1, realm: 2, profile: 3, resource: 'matches' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenLastCalledWith(
        'https://us.api.blizzard.com/sc2/legacy/profile/1/2/3/matches',
        { headers, params },
      )
    })
  })

  test('legacyLadder', async () => {
    await sc2.legacyLadder({ region: 1, ladder: 3 })

    expect(Blizzard.prototype.getClientResource).toHaveBeenLastCalledWith(
      'https://us.api.blizzard.com/sc2/legacy/ladder/1/3',
      { headers, params },
    )
  })

  test('legacyAchievements', async () => {
    await sc2.legacyAchievements({ region: 1 })

    expect(Blizzard.prototype.getClientResource).toHaveBeenLastCalledWith(
      'https://us.api.blizzard.com/sc2/legacy/achievements/1',
      { headers, params },
    )
  })

  test('legacyRewards', async () => {
    await sc2.legacyRewards({ region: 1 })

    expect(Blizzard.prototype.getClientResource).toHaveBeenLastCalledWith(
      'https://us.api.blizzard.com/sc2/legacy/rewards/1',
      { headers, params },
    )
  })

  test('account', async () => {
    await sc2.account({ id: 777 })

    expect(Blizzard.prototype.getClientResource).toHaveBeenLastCalledWith(
      'https://us.api.blizzard.com/sc2/player/777',
      { headers, params },
    )
  })
})
