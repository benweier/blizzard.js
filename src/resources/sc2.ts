import { Resource } from '.'

export type ProfileOptions = { region: 1 | 2 | 3; realm?: 1 | 2; profile?: number }

export const profile = (args: ProfileOptions): Resource => {
  return {
    path:
      args.realm === undefined || args.profile === undefined
        ? `sc2/static/profile/${args.region}`
        : `sc2/static/profile/${args.region}`,
  }
}

export type MetaDataOptions = { region: 1 | 2 | 3; realm: 1 | 2; profile: number }

export const metadata = (args: MetaDataOptions): Resource => {
  return {
    path: `sc2/metadata/profile/${args.region}/${args.realm}/${args.profile}`,
  }
}

export type ProfileLadderOptions = { region: 1 | 2 | 3; realm: 1 | 2; profile: number; id?: number }

export const profileLadder = (args: ProfileLadderOptions): Resource => {
  return {
    path:
      args.id === undefined
        ? `sc2/profile/${args.region}/${args.realm}/${args.profile}/ladder/summary`
        : `sc2/profile/${args.region}/${args.realm}/${args.profile}/ladder/${args.id}`,
  }
}

export type LadderOptions = { region: 1 | 2 | 3; resource: 'grandmaster' | 'season' }

export const ladder = (args: LadderOptions): Resource => {
  return {
    path: `sc2/ladder/${args.resource}/${args.region}`,
  }
}

export type AccountOptions = { id: string }

export const account = (args: AccountOptions): Resource => {
  return {
    path: `sc2/player/${args.id}`,
  }
}

export type LegacyProfileOptions = {
  region: 1 | 2 | 3
  realm: 1 | 2
  profile: number
  resource?: 'ladders' | 'matches'
}

export const legacyProfile = (args: LegacyProfileOptions): Resource => {
  return {
    path:
      args.resource === undefined
        ? `sc2/legacy/profile/${args.region}/${args.realm}/${args.profile}`
        : `sc2/legacy/profile/${args.region}/${args.realm}/${args.profile}/${args.resource}`,
  }
}

export type LegacyLadderOptions = { region: 1 | 2 | 3; ladder: number }

export const legacyLadder = (args: LegacyLadderOptions): Resource => {
  return {
    path: `sc2/legacy/ladder/${args.region}/${args.ladder}`,
  }
}

export type LegacyAchievementsOptions = { region: 1 | 2 | 3 }

export const legacyAchievements = (args: LegacyAchievementsOptions): Resource => {
  return {
    path: `sc2/legacy/achievements/${args.region}`,
  }
}

export type LegacyRewardsOptions = { region: 1 | 2 | 3 }

export const legacyRewards = (args: LegacyRewardsOptions): Resource => {
  return {
    path: `sc2/legacy/rewards/${args.region}`,
  }
}

export type LeagueOptions = { season: number; queue: number; teamType: 0 | 1; league: 0 | 1 | 2 | 3 | 4 | 5 | 6 }

export const league = (args: LeagueOptions): Resource => {
  return {
    path: `data/sc2/league/${args.season}/${args.queue}/${args.teamType}/${args.league}`,
  }
}
