import { Blizzard } from '../src/core'
import { createInstance, WoWClassic, WoWClassicClient } from '../src/wow/classic'

const headers = {
  'User-Agent': expect.any(String),
  'Content-Type': 'application/json',
  'Battlenet-Namespace': expect.stringMatching(
    /^(static-classic|dynamic-classic|static-classic1x|dynamic-classic1x|profile-classic|profile-classic1x)-(us|eu|sea|kr|tw)$/,
  ),
  Authorization: expect.any(String),
}
const params = { locale: expect.any(String) }

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

  describe('auctionHouse', () => {
    test('index', async () => {
      await wow.auctionHouse({ realm: 4372 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/connected-realm/4372/auctions/index',
        {
          headers,
          params,
        },
      )
    })

    test('auctionHouse', async () => {
      await wow.auctionHouse({ realm: 4372, auctionHouse: 2 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/connected-realm/4372/auctions/2',
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

  describe('connectedRealm', () => {
    test('index', async () => {
      await wow.connectedRealm()

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/connected-realm/index',
        {
          headers,
          params,
        },
      )
    })

    test('id', async () => {
      await wow.connectedRealm({ id: 69 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/connected-realm/69',
        {
          headers,
          params,
        },
      )
    })
  })

  test('connectedRealmSearch', async () => {
    await wow.connectedRealmSearch({ status: 'UP', timezone: 'America/New_York', orderby: 'id', page: 10 })

    expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
      'https://us.api.blizzard.com/data/wow/search/connected-realm',
      {
        headers,
        params: { ...params, _page: 10, 'status.type': 'UP', 'realms.timezone': 'America/New_York', orderby: 'id' },
      },
    )
  })

  describe('creature', () => {
    test('id', async () => {
      await wow.creature({ id: 1337 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/creature/1337',
        {
          headers,
          params,
        },
      )
    })

    test('media', async () => {
      await wow.creature({ id: 1337, media: true })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/media/creature-display/1337',
        {
          headers,
          params,
        },
      )
    })
  })

  describe('creatureFamily', () => {
    test('index', async () => {
      await wow.creatureFamily()

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/creature-family/index',
        {
          headers,
          params,
        },
      )
    })

    test('id', async () => {
      await wow.creatureFamily({ id: 1337 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/creature-family/1337',
        {
          headers,
          params,
        },
      )
    })

    test('media', async () => {
      await wow.creatureFamily({ id: 1337, media: true })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/media/creature-family/1337',
        {
          headers,
          params,
        },
      )
    })
  })

  describe('creatureType', () => {
    test('index', async () => {
      await wow.creatureType()

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/creature-type/index',
        {
          headers,
          params,
        },
      )
    })

    test('id', async () => {
      await wow.creatureType({ id: 1337 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/creature-type/1337',
        {
          headers,
          params,
        },
      )
    })
  })

  test('creatureSearch', async () => {
    await wow.creatureSearch({ name: 'Dragon', orderby: 'id', page: 3, locale: 'en_GB' })

    expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
      'https://us.api.blizzard.com/data/wow/search/creature',
      {
        headers,
        params: {
          ...params,
          'name.en_GB': 'Dragon',
          orderby: 'id',
          _page: 3,
        },
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

  describe('guildCrest', () => {
    test('index', async () => {
      await wow.guildCrest()

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/guild-crest/index',
        {
          headers,
          params,
        },
      )
    })

    test('media', async () => {
      await wow.guildCrest({ id: 101, resource: 'emblem' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/media/guild-crest/emblem/101',
        {
          headers,
          params,
        },
      )
    })
  })

  describe('item', () => {
    test('id', async () => {
      await wow.item({ id: 1001 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/item/1001',
        {
          headers,
          params,
        },
      )
    })

    test('media', async () => {
      await wow.item({ id: 1001, media: true })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/media/item/1001',
        {
          headers,
          params,
        },
      )
    })

    test('class', async () => {
      await wow.item({ resource: 'class' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/item-class/index',
        {
          headers,
          params,
        },
      )
    })
  })

  describe('itemSet', () => {
    test('index', async () => {
      await wow.item({ resource: 'set' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/item-set/index',
        {
          headers,
          params,
        },
      )
    })

    test('id', async () => {
      await wow.item({ resource: 'set', id: 1001 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/item-set/1001',
        {
          headers,
          params,
        },
      )
    })
  })

  describe('itemClass', () => {
    test('index', async () => {
      await wow.item({ resource: 'class' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/item-class/index',
        {
          headers,
          params,
        },
      )
    })

    test('id', async () => {
      await wow.item({ resource: 'class', id: 1001 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/item-class/1001',
        {
          headers,
          params,
        },
      )
    })

    test('sub', async () => {
      await wow.item({ resource: 'class', id: 1001, sub: 999 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/item-class/1001/item-subclass/999',
        {
          headers,
          params,
        },
      )
    })
  })

  test('itemSearch', async () => {
    await wow.itemSearch({ name: 'Garrosh', orderby: 'id', page: 10, locale: 'es_ES' })

    expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
      'https://us.api.blizzard.com/data/wow/search/item',
      {
        headers,
        params: {
          ...params,
          'name.es_ES': 'Garrosh',
          orderby: 'id',
          _page: 10,
        },
      },
    )
  })

  test('mediaSearxh', async () => {
    await wow.mediaSearch({ tag: 'item', orderby: 'id', page: 5 })

    expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
      'https://us.api.blizzard.com/data/wow/search/media',
      {
        headers,
        params: {
          ...params,
          _tag: 'item',
          orderby: 'id',
          _page: 5,
        },
      },
    )
  })

  describe('playableClass', () => {
    test('index', async () => {
      await wow.playableClass()

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/playable-class/index',
        {
          headers,
          params,
        },
      )
    })

    test('id', async () => {
      await wow.playableClass({ id: 1 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/playable-class/1',
        {
          headers,
          params,
        },
      )
    })

    test('pvpTalents', async () => {
      await wow.playableClass({ id: 1, pvpTalents: true })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/playable-class/1/pvp-talent-slots',
        {
          headers,
          params,
        },
      )
    })

    test('media', async () => {
      await wow.playableClass({ id: 1, media: true })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/media/playable-class/1',
        {
          headers,
          params,
        },
      )
    })
  })

  describe('playableRace', () => {
    test('index', async () => {
      await wow.playableRace()

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/playable-race/index',
        {
          headers,
          params,
        },
      )
    })

    test('id', async () => {
      await wow.playableRace({ id: 1 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/playable-race/1',
        {
          headers,
          params,
        },
      )
    })
  })

  describe('powerType', () => {
    test('index', async () => {
      await wow.powerType()

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/power-type/index',
        {
          headers,
          params,
        },
      )
    })

    test('id', async () => {
      await wow.powerType({ id: 1 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/power-type/1',
        {
          headers,
          params,
        },
      )
    })
  })

  describe('realm', () => {
    test('index', async () => {
      await wow.realm()

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/realm/index',
        {
          headers,
          params,
        },
      )
    })

    test('slug', async () => {
      await wow.realm({ slug: 'proudmoore' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/realm/proudmoore',
        {
          headers,
          params,
        },
      )
    })
  })

  test('realmSearch', async () => {
    await wow.realmSearch({ timezone: 'America/New_York', orderby: 'id', page: 10 })

    expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
      'https://us.api.blizzard.com/data/wow/search/realm',
      {
        headers,
        params: { ...params, _page: 10, timezone: 'America/New_York', orderby: 'id' },
      },
    )
  })

  describe('region', () => {
    test('index', async () => {
      await wow.region()

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/region/index',
        {
          headers,
          params,
        },
      )
    })

    test('id', async () => {
      await wow.region({ id: 1 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/region/1',
        {
          headers,
          params,
        },
      )
    })
  })

  test('token', async () => {
    await wow.token()

    expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
      'https://us.api.blizzard.com/data/wow/token/index',
      {
        headers,
        params,
      },
    )
  })
})
