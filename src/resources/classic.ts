import { Resource } from './index'

type NamespaceOptions = 'dynamic-classic' | 'static-classic'

export type AuctionHouseOptions = { realm: number; auctionHouse?: number }

export const auctionHouse = (
  namespace: Extract<NamespaceOptions, 'dynamic-classic'>,
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
