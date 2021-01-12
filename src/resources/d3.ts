import { Resource } from '.'

export type ActOptions = { id?: number }

export const act = (args?: ActOptions): Resource => {
  return {
    path: args?.id === undefined ? 'd3/data/act' : `d3/data/act/${args.id}`,
  }
}

export type ArtisanOptions = { id: string }

export const artisan = (args: ArtisanOptions): Resource => {
  return {
    path: `d3/data/artisan/${args.id}`,
  }
}

export type RecipeOptions = { artisan: string; recipe: string }

export const recipe = (args: RecipeOptions): Resource => {
  return {
    path: `d3/data/artisan/${args.artisan}/recipe/${args.recipe}`,
  }
}

export type FollowerOptions = { id: string }

export const follower = (args: FollowerOptions): Resource => {
  return {
    path: `d3/data/follower/${args.id}`,
  }
}

export type CharacterClassOptions = { id: string }

export const characterClass = (args: CharacterClassOptions): Resource => {
  return {
    path: `d3/data/hero/${args.id}`,
  }
}

export type CharacterSkillOptions = { class: string; skill: string }

export const characterSkill = (args: CharacterSkillOptions): Resource => {
  return {
    path: `d3/data/hero/${args.class}/skill/${args.skill}`,
  }
}

export type ItemOptions = { id: string }

export const item = (args: ItemOptions): Resource => {
  return {
    path: `d3/data/item/${args.id}`,
  }
}

export type ItemTypeOptions = { id?: string }

export const itemType = (args?: ItemTypeOptions): Resource => {
  return {
    path: args?.id === undefined ? 'd3/data/item-type' : `d3/data/item-type/${args.id}`,
  }
}

export type AccountProfile = { account: string; hero?: string; resource?: 'items' | 'follower-items' }

export const accountProfile = (args: AccountProfile): Resource => {
  if (args.hero === undefined) {
    return {
      path: `d3/profile/${args.account}/`,
    }
  }

  return {
    path:
      args.resource === undefined
        ? `d3/profile/${args.account}/hero/${args.hero}`
        : `d3/profile/${args.account}/hero/${args.hero}/${args.resource}`,
  }
}

export type SeasonOptions = { id?: number; leaderboard?: number }

export const season = (args?: SeasonOptions): Resource => {
  if (args?.id === undefined) {
    return {
      path: 'data/d3/season/',
    }
  }

  return {
    path:
      args.leaderboard === undefined
        ? `data/d3/season/${args.id}`
        : `data/d3/season/${args.id}/leaderboard/${args.leaderboard}`,
  }
}

export type EraOptions = { id?: number; leaderboard?: number }

export const era = (args?: EraOptions): Resource => {
  if (args?.id === undefined) {
    return {
      path: 'data/d3/era/',
    }
  }

  return {
    path:
      args.leaderboard === undefined
        ? `data/d3/era/${args.id}`
        : `data/d3/era/${args.id}/leaderboard/${args.leaderboard}`,
  }
}
