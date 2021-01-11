import { Blizzard, BlizzardClient } from '../core'
import { ResourceResponse, ResourceOptions } from '../resources'
import * as hs from '../resources/hs'

export interface HSClient extends BlizzardClient {
  cardSearch<T = any>(args: ResourceOptions<hs.CardSearchOptions>): ResourceResponse<T>
  card<T = any>(args: ResourceOptions<hs.CardOptions>): ResourceResponse<T>
  cardBacks<T = any>(args?: ResourceOptions<hs.CardBacksOptions>): ResourceResponse<T>
  deck<T = any>(args?: ResourceOptions<hs.DeckOptions>): ResourceResponse<T>
  metadata<T = any>(args?: ResourceOptions<hs.MetaDataOptions>): ResourceResponse<T>
}

export class HS extends Blizzard implements HSClient {
  cardSearch = this.createClientResourceRequest(hs.cardSearch)
  card = this.createClientResourceRequest(hs.card)
  cardBacks = this.createClientResourceRequest(hs.cardBacks)
  deck = this.createClientResourceRequest(hs.deck)
  metadata = this.createClientResourceRequest(hs.metadata)
}
