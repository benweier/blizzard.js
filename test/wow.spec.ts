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

  test('instance', async () => {
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

  describe('achievement', () => {
    test('index', async () => {
      await wow.achievement()

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/achievement/index',
        {
          headers,
          params,
        },
      )
    })

    test('id', async () => {
      await wow.achievement({ id: 1337 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/achievement/1337',
        {
          headers,
          params,
        },
      )
    })

    test('media', async () => {
      await wow.achievement({ id: 1337, media: true })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/media/achievement/1337',
        {
          headers,
          params,
        },
      )
    })
  })

  describe('achievementCategory', () => {
    test('index', async () => {
      await wow.achievementCategory()

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/achievement-category/index',
        {
          headers,
          params,
        },
      )
    })

    test('id', async () => {
      await wow.achievementCategory({ id: 1337 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/achievement-category/1337',
        {
          headers,
          params,
        },
      )
    })
  })

  test('auctionHouse', async () => {
    await wow.auctionHouse({ id: 101 })

    expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
      'https://us.api.blizzard.com/data/wow/connected-realm/101/auctions',
      {
        headers,
        params,
      },
    )
  })

  describe('azeriteEssence', () => {
    test('index', async () => {
      await wow.azeriteEssence()

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/azerite-essence/index',
        {
          headers,
          params,
        },
      )
    })

    test('id', async () => {
      await wow.azeriteEssence({ id: 69 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/azerite-essence/69',
        {
          headers,
          params,
        },
      )
    })

    test('media', async () => {
      await wow.azeriteEssence({ id: 69, media: true })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/media/azerite-essence/69',
        {
          headers,
          params,
        },
      )
    })
  })

  test('azeriteEssenceSearch', async () => {
    await wow.azeriteEssenceSearch({ id: 420, orderby: 'id', page: 10 })

    expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
      'https://us.api.blizzard.com/data/wow/search/azerite-essence',
      {
        headers,
        params: { ...params, _page: 10, 'allowed_specializations.id': 420, orderby: 'id' },
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

  describe('covenant', () => {
    test('index', async () => {
      await wow.covenant()

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/covenant/index',
        {
          headers,
          params,
        },
      )
    })

    test('id', async () => {
      await wow.covenant({ id: 3 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/covenant/3',
        {
          headers,
          params,
        },
      )
    })

    test('media', async () => {
      await wow.covenant({ id: 3, media: true })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/media/covenant/3',
        {
          headers,
          params,
        },
      )
    })
  })

  describe('soulbind', () => {
    test('index', async () => {
      await wow.soulbind()

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/soulbind/index',
        {
          headers,
          params,
        },
      )
    })

    test('id', async () => {
      await wow.soulbind({ id: 3 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/soulbind/3',
        {
          headers,
          params,
        },
      )
    })
  })

  describe('conduit', () => {
    test('index', async () => {
      await wow.conduit()

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/conduit/index',
        {
          headers,
          params,
        },
      )
    })

    test('id', async () => {
      await wow.conduit({ id: 3 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/conduit/3',
        {
          headers,
          params,
        },
      )
    })
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

  describe('journal', () => {
    test('expansion', async () => {
      await wow.journal({ resource: 'expansion' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/journal-expansion/index',
        {
          headers,
          params,
        },
      )
    })

    test('encounter', async () => {
      await wow.journal({ resource: 'encounter', id: 777 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/journal-encounter/777',
        {
          headers,
          params,
        },
      )
    })

    test('media', async () => {
      await wow.journal({ resource: 'instance', id: 101, media: true })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/media/journal-instance/101',
        {
          headers,
          params,
        },
      )
    })
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

  describe('modifiedCrafting', () => {
    test('index', async () => {
      await wow.modifiedCrafting()

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/modified-crafting/index',
        {
          headers,
          params,
        },
      )
    })

    test('reagent', async () => {
      await wow.modifiedCrafting({ resource: 'reagent', id: 1001 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/modified-crafting/reagent-slot-type/1001',
        {
          headers,
          params,
        },
      )
    })

    test('category', async () => {
      await wow.modifiedCrafting({ resource: 'category', id: 1001 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/modified-crafting/category/1001',
        {
          headers,
          params,
        },
      )
    })
  })

  describe('mount', () => {
    test('index', async () => {
      await wow.mount()

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/mount/index',
        {
          headers,
          params,
        },
      )
    })

    test('id', async () => {
      await wow.mount({ id: 1001 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/mount/1001',
        {
          headers,
          params,
        },
      )
    })
  })

  test('mountSearch', async () => {
    await wow.mountSearch({ name: 'Turtle', orderby: 'id', page: 5, locale: 'de_DE' })

    expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
      'https://us.api.blizzard.com/data/wow/search/mount',
      {
        headers,
        params: {
          ...params,
          'name.de_DE': 'Turtle',
          orderby: 'id',
          _page: 5,
        },
      },
    )
  })

  describe('mythicKeystone', () => {
    test('index', async () => {
      await wow.mythicKeystone()

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/mythic-keystone/index',
        {
          headers,
          params,
        },
      )
    })

    test('dungeon', async () => {
      await wow.mythicKeystone({ resource: 'dungeon' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/mythic-keystone/dungeon/index',
        {
          headers,
          params,
        },
      )
    })

    test('id', async () => {
      await wow.mythicKeystone({ resource: 'period', id: 1001 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/mythic-keystone/period/1001',
        {
          headers,
          params,
        },
      )
    })
  })

  describe('mythicKeystoneAffix', () => {
    test('index', async () => {
      await wow.mythicKeystoneAffix()

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/keystone-affix/index',
        {
          headers,
          params,
        },
      )
    })

    test('id', async () => {
      await wow.mythicKeystoneAffix({ id: 101 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/keystone-affix/101',
        {
          headers,
          params,
        },
      )
    })

    test('media', async () => {
      await wow.mythicKeystoneAffix({ id: 1001, media: true })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/media/keystone-affix/1001',
        {
          headers,
          params,
        },
      )
    })
  })

  describe('mythicKeystoneLeaderboard', () => {
    test('index', async () => {
      await wow.mythicKeystoneLeaderboard({ realm: 7 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/connected-realm/7/mythic-leaderboard/index',
        {
          headers,
          params,
        },
      )
    })

    test('id', async () => {
      await wow.mythicKeystoneLeaderboard({ realm: 7, dungeon: 101, period: 1001 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/connected-realm/7/mythic-leaderboard/101/period/1001',
        {
          headers,
          params,
        },
      )
    })
  })

  describe('mythicRaidLeaderboard', () => {
    test('index', async () => {
      await wow.mythicRaidLeaderboard({ raid: 'uldir', faction: 'alliance' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/leaderboard/hall-of-fame/uldir/alliance',
        {
          headers,
          params,
        },
      )
    })
  })

  describe('pet', () => {
    test('index', async () => {
      await wow.pet()

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/pet/index',
        {
          headers,
          params,
        },
      )
    })

    test('id', async () => {
      await wow.pet({ id: 1 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith('https://us.api.blizzard.com/data/wow/pet/1', {
        headers,
        params,
      })
    })

    test('media', async () => {
      await wow.pet({ id: 1, media: true })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/media/pet/1',
        {
          headers,
          params,
        },
      )
    })
  })

  describe('petAbility', () => {
    test('index', async () => {
      await wow.pet({ resource: 'ability' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/pet-ability/index',
        {
          headers,
          params,
        },
      )
    })

    test('id', async () => {
      await wow.pet({ resource: 'ability', id: 1 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/pet-ability/1',
        {
          headers,
          params,
        },
      )
    })

    test('media', async () => {
      await wow.pet({ resource: 'ability', id: 1, media: true })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/media/pet-ability/1',
        {
          headers,
          params,
        },
      )
    })
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

  describe('playableSpecialization', () => {
    test('index', async () => {
      await wow.playableSpecialization()

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/playable-specialization/index',
        {
          headers,
          params,
        },
      )
    })

    test('id', async () => {
      await wow.playableSpecialization({ id: 1 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/playable-specialization/1',
        {
          headers,
          params,
        },
      )
    })

    test('media', async () => {
      await wow.playableSpecialization({ id: 1, media: true })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/media/playable-specialization/1',
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

  describe('profession', () => {
    test('index', async () => {
      await wow.profession()

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/profession/index',
        {
          headers,
          params,
        },
      )
    })

    test('id', async () => {
      await wow.profession({ id: 1 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/profession/1',
        {
          headers,
          params,
        },
      )
    })

    test('skillTier', async () => {
      await wow.profession({ id: 1, skillTier: 2 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/profession/1/skill-tier/2',
        {
          headers,
          params,
        },
      )
    })

    test('media', async () => {
      await wow.profession({ id: 1, media: true })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/media/profession/1',
        {
          headers,
          params,
        },
      )
    })
  })

  describe('recipe', () => {
    test('id', async () => {
      await wow.recipe({ id: 1 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/recipe/1',
        {
          headers,
          params,
        },
      )
    })

    test('media', async () => {
      await wow.recipe({ id: 2, media: true })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/media/recipe/2',
        {
          headers,
          params,
        },
      )
    })
  })

  describe('pvpSeason', () => {
    test('index', async () => {
      await wow.pvpSeason()

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/pvp-season/index',
        {
          headers,
          params,
        },
      )
    })

    test('id', async () => {
      await wow.pvpSeason({ id: 2 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/pvp-season/2',
        {
          headers,
          params,
        },
      )
    })

    test('leaderboard', async () => {
      await wow.pvpSeason({ id: 2, resource: 'leaderboard' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/pvp-season/2/pvp-leaderboard/index',
        {
          headers,
          params,
        },
      )
    })

    test('bracket', async () => {
      await wow.pvpSeason({ id: 2, resource: 'leaderboard', bracket: '2v2' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/pvp-season/2/pvp-leaderboard/2v2',
        {
          headers,
          params,
        },
      )
    })

    test('reward', async () => {
      await wow.pvpSeason({ id: 2, resource: 'reward' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/pvp-season/2/pvp-reward/index',
        {
          headers,
          params,
        },
      )
    })
  })

  describe('pvpTier', () => {
    test('index', async () => {
      await wow.pvpTier()

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/pvp-tier/index',
        {
          headers,
          params,
        },
      )
    })

    test('id', async () => {
      await wow.pvpTier({ id: 2 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/pvp-tier/2',
        {
          headers,
          params,
        },
      )
    })

    test('media', async () => {
      await wow.pvpTier({ id: 2, media: true })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/media/pvp-tier/2',
        {
          headers,
          params,
        },
      )
    })
  })

  describe('quest', () => {
    test('index', async () => {
      await wow.quest()

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/quest/index',
        {
          headers,
          params,
        },
      )
    })

    test('id', async () => {
      await wow.quest({ id: 2 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/quest/2',
        {
          headers,
          params,
        },
      )
    })

    test('resource', async () => {
      await wow.quest({ resource: 'category' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/quest/category/index',
        {
          headers,
          params,
        },
      )
    })

    test('resource id', async () => {
      await wow.quest({ id: 2, resource: 'category' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/quest/category/2',
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

  describe('reputation', () => {
    test('resource', async () => {
      await wow.reputation({ resource: 'faction' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/reputation-faction/index',
        {
          headers,
          params,
        },
      )
    })

    test('id', async () => {
      await wow.reputation({ resource: 'tier', id: 1 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/reputation-tier/1',
        {
          headers,
          params,
        },
      )
    })
  })

  describe('spell', () => {
    test('id', async () => {
      await wow.spell({ id: 1 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/spell/1',
        {
          headers,
          params,
        },
      )
    })

    test('media', async () => {
      await wow.spell({ id: 2, media: true })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/media/spell/2',
        {
          headers,
          params,
        },
      )
    })
  })

  test('spellSearch', async () => {
    await wow.spellSearch({ name: 'Magic Missile', orderby: 'id', page: 3, locale: 'en_GB' })

    expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
      'https://us.api.blizzard.com/data/wow/search/spell',
      {
        headers,
        params: {
          ...params,
          'name.en_GB': 'Magic Missile',
          orderby: 'id',
          _page: 3,
        },
      },
    )
  })

  describe('talent', () => {
    test('index', async () => {
      await wow.talent()

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/talent/index',
        {
          headers,
          params,
        },
      )
    })

    test('pvp', async () => {
      await wow.talent({ pvp: true })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/pvp-talent/index',
        {
          headers,
          params,
        },
      )
    })

    test('id', async () => {
      await wow.talent({ id: 2 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/talent/2',
        {
          headers,
          params,
        },
      )
    })

    test('pvp id', async () => {
      await wow.talent({ id: 2, pvp: true })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/pvp-talent/2',
        {
          headers,
          params,
        },
      )
    })
  })

  describe('techTalent', () => {
    test('index', async () => {
      await wow.techTalent()

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/tech-talent/index',
        {
          headers,
          params,
        },
      )
    })

    test('tree', async () => {
      await wow.techTalent({ tree: true })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/tech-talent-tree/index',
        {
          headers,
          params,
        },
      )
    })

    test('tree id', async () => {
      await wow.techTalent({ tree: true, id: 1 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/tech-talent-tree/1',
        {
          headers,
          params,
        },
      )
    })

    test('id', async () => {
      await wow.techTalent({ id: 2 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/tech-talent/2',
        {
          headers,
          params,
        },
      )
    })

    test('media', async () => {
      await wow.techTalent({ id: 2, media: true })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/media/tech-talent/2',
        {
          headers,
          params,
        },
      )
    })
  })

  describe('title', () => {
    test('index', async () => {
      await wow.title()

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/title/index',
        {
          headers,
          params,
        },
      )
    })

    test('id', async () => {
      await wow.title({ id: 1 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/wow/title/1',
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
