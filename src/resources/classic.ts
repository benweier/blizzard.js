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
