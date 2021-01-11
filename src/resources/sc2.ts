import { Resource } from '.'

export type TmpOptions = Record<string, unknown>

export const tmp = (): Resource => {
  return {
    path: '',
  }
}

export type ProfileOptions = { region: number; realm?: number; profile?: number }
export type MetaDataOptions = { region: number; realm: number; profile: number }
export type ProfileLadderOptions = { id?: number }
export type LadderOptions = { region: number; resource: 'grandmaster' | 'season' }
export type AccountOptions = { id: string }
export type LegacyProfileOptions = { region: number; realm: number; profile: number; resource?: 'ladders' | 'matches' }
export type LegacyLadderOptions = { region: number; ladder: number }
export type LegacyAchievementsOptions = { region: number }
export type LegacyRewardsOptions = { region: number }
export type LeagueOptions = { season: number; queue: number; teamType: number; league: number }
