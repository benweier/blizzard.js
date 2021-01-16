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

  test('accountCharacterProfile', async () => {
    await wow.accountCharacterProfile({ realm: 69, character: 420, token: 'token' })

    expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
      'https://us.api.blizzard.com/profile/user/wow/protected-character/69-420',
      {
        headers,
        params,
      },
    )
  })

  describe('accountCollections', () => {
    test('index', async () => {
      await wow.accountCollections({ token: 'token' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/profile/user/wow/collections',
        {
          headers,
          params,
        },
      )
    })

    test('resource', async () => {
      await wow.accountCollections({ token: 'token', resource: 'mounts' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/profile/user/wow/collections/mounts',
        {
          headers,
          params,
        },
      )
    })
  })

  describe('characterAchievements', () => {
    test('index', async () => {
      await wow.characterAchievements({ realm: 'proudmoore', name: 'name' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/profile/wow/character/proudmoore/name/achievements',
        {
          headers,
          params,
        },
      )
    })

    test('statistics', async () => {
      await wow.characterAchievements({ realm: 'proudmoore', name: 'name', stats: true })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/profile/wow/character/proudmoore/name/achievements/statistics',
        {
          headers,
          params,
        },
      )
    })
  })

  test('characterAppearance', async () => {
    await wow.characterAppearance({ realm: 'proudmoore', name: 'name' })

    expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
      'https://us.api.blizzard.com/profile/wow/character/proudmoore/name/appearance',
      {
        headers,
        params,
      },
    )
  })

  describe('characterCollections', () => {
    test('index', async () => {
      await wow.characterCollections({ realm: 'proudmoore', name: 'name' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/profile/wow/character/proudmoore/name/collections',
        {
          headers,
          params,
        },
      )
    })

    test('resource', async () => {
      await wow.characterCollections({ realm: 'proudmoore', name: 'name', resource: 'pets' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/profile/wow/character/proudmoore/name/collections/pets',
        {
          headers,
          params,
        },
      )
    })
  })

  describe('characterEncounters', () => {
    test('index', async () => {
      await wow.characterEncounters({ realm: 'proudmoore', name: 'name' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/profile/wow/character/proudmoore/name/encounters',
        {
          headers,
          params,
        },
      )
    })

    test('resource', async () => {
      await wow.characterEncounters({ realm: 'proudmoore', name: 'name', resource: 'raids' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/profile/wow/character/proudmoore/name/encounters/raids',
        {
          headers,
          params,
        },
      )
    })
  })

  test('characterEquipment', async () => {
    await wow.characterEquipment({ realm: 'proudmoore', name: 'name' })

    expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
      'https://us.api.blizzard.com/profile/wow/character/proudmoore/name/equipment',
      {
        headers,
        params,
      },
    )
  })

  test('characterHunterPets', async () => {
    await wow.characterHunterPets({ realm: 'proudmoore', name: 'name' })

    expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
      'https://us.api.blizzard.com/profile/wow/character/proudmoore/name/hunter-pets',
      {
        headers,
        params,
      },
    )
  })

  test('characterMedia', async () => {
    await wow.characterMedia({ realm: 'proudmoore', name: 'name' })

    expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
      'https://us.api.blizzard.com/profile/wow/character/proudmoore/name/character-media',
      {
        headers,
        params,
      },
    )
  })

  describe('characterMythicKeystone', () => {
    test('index', async () => {
      await wow.characterMythicKeystone({ realm: 'proudmoore', name: 'name' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/profile/wow/character/proudmoore/name/mythic-keystone-profile',
        {
          headers,
          params,
        },
      )
    })

    test('season', async () => {
      await wow.characterMythicKeystone({ realm: 'proudmoore', name: 'name', season: 3 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/profile/wow/character/proudmoore/name/mythic-keystone-profile/season/3',
        {
          headers,
          params,
        },
      )
    })
  })

  test('characterProfessions', async () => {
    await wow.characterProfessions({ realm: 'proudmoore', name: 'name' })

    expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
      'https://us.api.blizzard.com/profile/wow/character/proudmoore/name/professions',
      {
        headers,
        params,
      },
    )
  })

  describe('characterProfile', () => {
    test('index', async () => {
      await wow.characterProfile({ realm: 'proudmoore', name: 'name' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/profile/wow/character/proudmoore/name',
        {
          headers,
          params,
        },
      )
    })

    test('status', async () => {
      await wow.characterProfile({ realm: 'proudmoore', name: 'name', status: true })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/profile/wow/character/proudmoore/name/status',
        {
          headers,
          params,
        },
      )
    })
  })

  describe('characterPVP', () => {
    test('index', async () => {
      await wow.characterPVP({ realm: 'proudmoore', name: 'name' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/profile/wow/character/proudmoore/name/pvp-summary',
        {
          headers,
          params,
        },
      )
    })

    test('bracket', async () => {
      await wow.characterPVP({ realm: 'proudmoore', name: 'name', bracket: '2v2' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/profile/wow/character/proudmoore/name/pvp-bracket/2v2',
        {
          headers,
          params,
        },
      )
    })
  })

  describe('characterQuests', () => {
    test('index', async () => {
      await wow.characterQuests({ realm: 'proudmoore', name: 'name' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/profile/wow/character/proudmoore/name/quests',
        {
          headers,
          params,
        },
      )
    })

    test('completed', async () => {
      await wow.characterQuests({ realm: 'proudmoore', name: 'name', completed: true })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/profile/wow/character/proudmoore/name/quests/completed',
        {
          headers,
          params,
        },
      )
    })
  })

  test('characterReputations', async () => {
    await wow.characterReputations({ realm: 'proudmoore', name: 'name' })

    expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
      'https://us.api.blizzard.com/profile/wow/character/proudmoore/name/reputations',
      {
        headers,
        params,
      },
    )
  })

  test('characterSoulbinds', async () => {
    await wow.characterSoulbinds({ realm: 'proudmoore', name: 'name' })

    expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
      'https://us.api.blizzard.com/profile/wow/character/proudmoore/name/soulbinds',
      {
        headers,
        params,
      },
    )
  })

  test('characterSpecializations', async () => {
    await wow.characterSpecializations({ realm: 'proudmoore', name: 'name' })

    expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
      'https://us.api.blizzard.com/profile/wow/character/proudmoore/name/specializations',
      {
        headers,
        params,
      },
    )
  })

  test('characterStatistics', async () => {
    await wow.characterStatistics({ realm: 'proudmoore', name: 'name' })

    expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
      'https://us.api.blizzard.com/profile/wow/character/proudmoore/name/statistics',
      {
        headers,
        params,
      },
    )
  })

  test('characterTitles', async () => {
    await wow.characterTitles({ realm: 'proudmoore', name: 'name' })

    expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
      'https://us.api.blizzard.com/profile/wow/character/proudmoore/name/titles',
      {
        headers,
        params,
      },
    )
  })

  describe('guild', () => {
    test('index', async () => {
      await wow.guild({ realm: 'proudmoore', name: 'name' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/guild/proudmoore/name',
        {
          headers,
          params,
        },
      )
    })

    test('resource', async () => {
      await wow.guild({ realm: 'proudmoore', name: 'name', resource: 'activity' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/guild/proudmoore/name/activity',
        {
          headers,
          params,
        },
      )
    })
  })
})
