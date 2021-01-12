import { Resource } from '.'

export type CardSearchOptions = {
  attack?: number | number[]
  class?: string
  collectible?: 0 | 1
  gameMode?: 'constructed' | 'battlegrounds'
  health?: number | number[]
  keyword?: string
  manaCost?: number | number[]
  minionType?: string
  order?: 'asc' | 'desc'
  page?: number
  pageSize?: number
  rarity?: string
  set?: string
  sort?: 'manaCost' | 'attack' | 'health' | 'name'
  textFilter?: string
  tier?: 1 | 2 | 3 | 4 | 5 | 6 | 'hero' | Array<1 | 2 | 3 | 4 | 5 | 6 | 'hero'>
  type?: string
}

export const cardSearch = (
  args: CardSearchOptions,
): Resource<{
  attack?: number | string
  class?: string
  collectible?: 0 | 1 | '0,1'
  gameMode?: 'constructed' | 'battlegrounds'
  health?: number | string
  keyword?: string
  manaCost?: number | string
  minionType?: string
  order?: 'asc' | 'desc'
  page?: number
  pageSize?: number
  rarity?: string
  set?: string
  sort?: 'manaCost' | 'attack' | 'health' | 'name'
  textFilter?: string
  tier?: number | 'hero' | string
  type?: string
}> => {
  return {
    path: 'hearthstone/cards ',
    params: {
      attack: Array.isArray(args.attack) ? args.attack.join(',') : args.attack,
      class: args.class,
      collectible: args.collectible === undefined ? '0,1' : args.collectible,
      gameMode: args.tier === undefined ? args.gameMode : 'battlegrounds',
      health: Array.isArray(args.health) ? args.health.join(',') : args.health,
      keyword: args.keyword,
      manaCost: Array.isArray(args.manaCost) ? args.manaCost.join(',') : args.manaCost,
      minionType: args.minionType,
      order: args.order,
      page: args.page,
      pageSize: args.pageSize,
      rarity: args.rarity,
      set: args.set,
      sort: args.sort,
      textFilter: args.textFilter,
      tier: Array.isArray(args.tier) ? args.tier.join(',') : args.tier,
      type: args.type,
    },
  }
}

export type CardOptions = { id: number | string }

export const card = (args: CardOptions): Resource => {
  return {
    path: `hearthstone/cards/${encodeURIComponent(args.id)}`,
  }
}

export type CardBacksOptions = {
  id?: number | string
  category?: string
  order?: string
  sort?: string
  textFilter?: string
}

export const cardBacks = (
  args?: CardBacksOptions,
): Resource<{
  cardBackCategory?: string
  order?: string
  sort?: string
  textFilter?: string
}> => {
  if (args?.id !== undefined) {
    return {
      path: `hearthstone/cardbacks/${encodeURIComponent(args.id)}`,
    }
  }
  return {
    path: 'hearthstone/cardbacks',
    params: {
      cardBackCategory: args?.category,
      order: args?.order,
      sort: args?.sort,
      textFilter: args?.textFilter,
    },
  }
}

export type DeckOptions = { code?: string; ids?: number | number[]; hero?: number }

export const deck = (args?: DeckOptions): Resource<{ code?: string; ids?: number | string; hero?: number }> => {
  return {
    path: 'hearthstone/deck',
    params: {
      code: args?.code,
      ids: Array.isArray(args?.ids) ? args?.ids.join(',') : args?.ids,
      hero: args?.hero,
    },
  }
}

export type MetaDataOptions = {
  type: 'sets' | 'setGroups' | 'types' | 'rarities' | 'classes' | 'minionTypes' | 'keywords'
}

export const metadata = (args?: MetaDataOptions): Resource => {
  return {
    path: args?.type === undefined ? 'hearthstone/metadata' : `hearthstone/metadata/${encodeURIComponent(args.type)}`,
  }
}
