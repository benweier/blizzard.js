import { AxiosRequestConfig } from 'axios'
import { Blizzard } from '../src/core'
import { createInstance, HS, HSClient } from '../src/hs'

const args = {
  headers: {
    'User-Agent': expect.any(String),
    'Content-Type': 'application/json',
    Authorization: expect.any(String),
  },
  params: { locale: expect.any(String) },
}

describe('Hearthstone', () => {
  let hs: HSClient

  beforeAll(async () => {
    jest.spyOn(Blizzard.prototype, 'getClientResource')

    hs = await createInstance({
      key: 'key',
      secret: 'secret',
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('should return a HS instance of Blizzard', async () => {
    expect(hs).toBeInstanceOf(Blizzard)
    expect(hs).toBeInstanceOf(HS)
  })

  test('card', async () => {
    await hs.card({ id: '52119-arch-villain-rafaam' })

    expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
      'https://us.api.blizzard.com/hearthstone/cards/52119-arch-villain-rafaam',
      args,
    )
  })

  describe('cardSearch', () => {
    test('basic', async () => {
      await hs.cardSearch({
        attack: 1,
        class: 'shaman',
        health: 5,
        manaCost: 4,
        minionType: 'beast',
        rarity: 'common',
        gameMode: 'constructed',
        set: 'classic',
      })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/hearthstone/cards',
        {
          headers: args.headers,
          params: {
            ...args.params,
            attack: 1,
            class: 'shaman',
            collectible: '0,1',
            gameMode: 'constructed',
            health: 5,
            keyword: undefined,
            manaCost: 4,
            minionType: 'beast',
            order: undefined,
            page: undefined,
            pageSize: undefined,
            rarity: 'common',
            set: 'classic',
            sort: undefined,
            textFilter: undefined,
            tier: undefined,
            type: undefined,
          },
        },
      )
    })

    test('detailed', async () => {
      await hs.cardSearch({
        attack: [1, 2, 3],
        class: 'druid',
        health: [3, 4, 5],
        manaCost: [2, 3, 4],
        minionType: 'beast',
        rarity: 'common',
        gameMode: 'constructed',
        set: 'classic',
        tier: [5, 6, 'hero'],
        collectible: 1,
        keyword: 'taunt',
        type: 'minion',
      })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/hearthstone/cards',
        {
          headers: args.headers,
          params: {
            ...args.params,
            attack: '1,2,3',
            class: 'shaman',
            collectible: 1,
            gameMode: 'battlegrounds',
            health: '3,4,5',
            keyword: 'taunt',
            manaCost: '2,3,4',
            minionType: 'beast',
            order: undefined,
            page: undefined,
            pageSize: undefined,
            rarity: 'common',
            set: 'classic',
            sort: undefined,
            textFilter: undefined,
            tier: '5,6,hero',
            type: 'minion',
          },
        },
      )
    })
  })

  describe('cardBacks', () => {
    test('search', async () => {
      await hs.cardBacks({ category: 'fireside', order: 'desc', sort: 'id', textFilter: 'text' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/hearthstone/cardbacks',
        {
          headers: args.headers,
          params: {
            ...args.params,
            cardBackCategory: 'fireside',
            order: 'desc',
            sort: 'id',
            textFilter: 'text',
          },
        },
      )
    })

    test('id', async () => {
      await hs.cardBacks({ id: '155-pizza-stone' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/hearthstone/cardbacks/155-pizza-stone',
        args,
      )
    })
  })

  describe('deck', () => {
    test('code', async () => {
      await hs.deck({ code: 'AAECAQcG+wyd8AKS+AKggAOblAPanQMMS6IE/web8wLR9QKD+wKe+wKz/AL1gAOXlAOalAOSnwMA' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/hearthstone/deck',
        {
          headers: args.headers,
          params: {
            ...args.params,
            code: 'AAECAQcG+wyd8AKS+AKggAOblAPanQMMS6IE/web8wLR9QKD+wKe+wKz/AL1gAOXlAOalAOSnwMA',
            hero: undefined,
            ids: undefined,
          },
        },
      )
    })

    test('cards', async () => {
      await hs.deck({
        ids: [906, 1099, 1363, 1367],
        hero: 10,
      })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/hearthstone/deck',
        {
          headers: args.headers,
          params: {
            ...args.params,
            code: undefined,
            hero: 10,
            ids: '906,1099,1363,1367',
          },
        } as AxiosRequestConfig,
      )
    })
  })

  describe('metadata', () => {
    test('default', async () => {
      await hs.metadata()

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/hearthstone/metadata',
        args,
      )
    })

    test('type', async () => {
      await hs.metadata({ type: 'classes' })

      expect(Blizzard.prototype.getClientResource).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/hearthstone/metadata/classes',
        args,
      )
    })
  })
})
