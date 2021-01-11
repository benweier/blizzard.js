import { Resource } from '.'

export type TmpOptions = Record<string, unknown>

export const tmp = (): Resource => {
  return {
    path: '',
  }
}

export type ActOptions = { id?: number }
export type ArtisanOptions = { id: string }
export type RecipeOptions = { artisan: string; recipe: string }
export type FollowerOptions = { id: string }
export type CharacterClassOptions = { id: string }
export type CharacterSkillOptions = { class: string; skill: string }
export type ItemOptions = { id: string }
export type ItemTypeOptions = { id?: string }
export type AccountProfile = { account: string; hero?: string; resource?: 'items' | 'follower-items' }

export type SeasonOptions = { id?: number; leadreboard?: number }
export type EraOptions = { id?: number; leaderboard?: number }
