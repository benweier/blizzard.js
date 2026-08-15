import { Resource } from './types'

type NamespaceOptions =
  | 'dynamic-classic'
  | 'static-classic'
  | 'dynamic-classic1x'
  | 'static-classic1x'
  | 'profile-classic'
  | 'profile-classic1x'

export type AuctionHouseOptions = { realm: number; auctionHouse?: number }

export const auctionHouse = (
  namespace: Extract<NamespaceOptions, 'dynamic-classic' | 'dynamic-classic1x'>,
  args: AuctionHouseOptions,
): Resource => {
  if (args.auctionHouse === undefined) {
    return {
      path: `data/wow/connected-realm/${encodeURIComponent(args.realm)}/auctions/index`,
      namespace,
    }
  }

  return {
    path: `data/wow/connected-realm/${encodeURIComponent(args.realm)}/auctions/${encodeURIComponent(
      args.auctionHouse,
    )}`,
    namespace,
  }
}

export type PVPSeasonOptions =
  | { region?: never; season?: never; resource?: never; bracket?: never }
  | { region: number; season?: number; resource?: never; bracket?: never }
  | { region: number; season: number; resource: 'leaderboard'; bracket?: string }
  | { region: number; season: number; resource: 'reward'; bracket?: never }

export const pvpSeason = (
  namespace: Extract<NamespaceOptions, 'dynamic-classic' | 'dynamic-classic1x'>,
  args?: null | PVPSeasonOptions,
): Resource => {
  if (args?.region === undefined) {
    return {
      path: 'data/wow/pvp-region/index',
      namespace,
    }
  }

  if (args.season === undefined) {
    return {
      path: `data/wow/pvp-region/${encodeURIComponent(args.region)}/pvp-season/index`,
      namespace,
    }
  }

  if (args.resource === 'leaderboard') {
    return {
      path:
        args.bracket === undefined
          ? `data/wow/pvp-region/${encodeURIComponent(args.region)}/pvp-season/${encodeURIComponent(
              args.season,
            )}/pvp-leaderboard/index`
          : `data/wow/pvp-region/${encodeURIComponent(args.region)}/pvp-season/${encodeURIComponent(
              args.season,
            )}/pvp-leaderboard/${encodeURIComponent(args.bracket)}`,
      namespace,
    }
  }

  if (args.resource === 'reward') {
    return {
      path: `data/wow/pvp-region/${encodeURIComponent(args.region)}/pvp-season/${encodeURIComponent(
        args.season,
      )}/pvp-reward/index`,
      namespace,
    }
  }

  return {
    path: `data/wow/pvp-region/${encodeURIComponent(args.region)}/pvp-season/${encodeURIComponent(args.season)}`,
    namespace,
  }
}
