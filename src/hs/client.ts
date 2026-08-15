import { Blizzard } from '../core'
import * as hs from '../resources/hs'

export class HS extends Blizzard {
  cardSearch = this.createClientResourceRequest(hs.cardSearch)
  card = this.createClientResourceRequest(hs.card)
  cardBacks = this.createClientResourceRequest(hs.cardBacks)
  deck = this.createClientResourceRequest(hs.deck)
  metadata = this.createClientResourceRequest(hs.metadata)
}

export type HSClient = HS
