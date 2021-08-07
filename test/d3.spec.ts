import { Blizzard } from '../src/core'
import { createInstance, D3, D3Client } from '../src/d3'

const headers = {
  'User-Agent': expect.any(String),
  'Content-Type': 'application/json',
  Authorization: expect.any(String),
}
const params = { locale: expect.any(String) }

describe('Diablo 3', () => {
  let d3: D3Client

  beforeAll(async () => {
    jest.spyOn(Blizzard.prototype, 'getClientResource')

    d3 = await createInstance({
      key: 'key',
      secret: 'secret',
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('instance', async () => {
    expect(d3).toBeInstanceOf(Blizzard)
    expect(d3).toBeInstanceOf(D3)
  })

  describe('accountProfile', () => {
    test('default', async () => {
      await d3.accountProfile({ account: 'account' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/d3/profile/account/',
        { headers, params },
      )
    })

    test('hero', async () => {
      await d3.accountProfile({ account: 'account', hero: 'hero' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/d3/profile/account/hero/hero',
        { headers, params },
      )
    })

    test('hero items', async () => {
      await d3.accountProfile({ account: 'account', hero: 'hero', resource: 'items' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/d3/profile/account/hero/hero/items',
        { headers, params },
      )
    })

    test('hero follower-items', async () => {
      await d3.accountProfile({ account: 'account', hero: 'hero', resource: 'follower-items' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/d3/profile/account/hero/hero/follower-items',
        {
          headers,
          params,
        },
      )
    })
  })

  describe('act', () => {
    test('default', async () => {
      await d3.act()

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith('https://us.api.blizzard.com/d3/data/act', {
        headers,
        params,
      })
    })

    test('id', async () => {
      await d3.act({ id: 1 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith('https://us.api.blizzard.com/d3/data/act/1', {
        headers,
        params,
      })
    })
  })

  test('artisan', async () => {
    await d3.artisan({ id: 'mystic' })

    expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
      'https://us.api.blizzard.com/d3/data/artisan/mystic',
      { headers, params },
    )
  })

  test('recipe', async () => {
    await d3.recipe({ artisan: 'blacksmith', recipe: 'recipe' })

    expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
      'https://us.api.blizzard.com/d3/data/artisan/blacksmith/recipe/recipe',
      { headers, params },
    )
  })

  test('characterClass', async () => {
    await d3.characterClass({ id: 'demon-hunter' })

    expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
      'https://us.api.blizzard.com/d3/data/hero/demon-hunter',
      { headers, params },
    )
  })

  test('characterSkill', async () => {
    await d3.characterSkill({ class: 'barbarian', skill: 'bash' })

    expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
      'https://us.api.blizzard.com/d3/data/hero/barbarian/skill/bash',
      { headers, params },
    )
  })

  test('follower', async () => {
    await d3.follower({ id: 'scoundrel' })

    expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
      'https://us.api.blizzard.com/d3/data/follower/scoundrel',
      { headers, params },
    )
  })

  test('item', async () => {
    await d3.item({ id: 'corrupted-ashbringer-Unique_Sword_2H_104_x1' })

    expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
      'https://us.api.blizzard.com/d3/data/item/corrupted-ashbringer-Unique_Sword_2H_104_x1',
      {
        headers,
        params,
      },
    )
  })

  describe('itemType', () => {
    test('default', async () => {
      await d3.itemType()

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/d3/data/item-type',
        { headers, params },
      )
    })

    test('id', async () => {
      await d3.itemType({ id: 'sword2h' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/d3/data/item-type/sword2h',
        { headers, params },
      )
    })
  })

  describe('season', () => {
    test('default', async () => {
      await d3.season()

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith('https://us.api.blizzard.com/data/d3/season/', {
        headers,
        params,
      })
    })

    test('id', async () => {
      await d3.season({ id: 1 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/d3/season/1',
        { headers, params },
      )
    })

    test('leaderboard', async () => {
      await d3.season({ id: 3, leaderboard: 7 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/d3/season/3/leaderboard/7',
        { headers, params },
      )
    })
  })

  describe('era', () => {
    test('default', async () => {
      await d3.era()

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith('https://us.api.blizzard.com/data/d3/era/', {
        headers,
        params,
      })
    })

    test('id', async () => {
      await d3.era({ id: 1 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith('https://us.api.blizzard.com/data/d3/era/1', {
        headers,
        params,
      })
    })

    test('leaderboard', async () => {
      await d3.era({ id: 2, leaderboard: 5 })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/data/d3/era/2/leaderboard/5',
        { headers, params },
      )
    })
  })
})
