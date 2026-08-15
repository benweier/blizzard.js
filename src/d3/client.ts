import { Blizzard } from '../core'
import * as d3 from '../resources/d3'

export class D3 extends Blizzard {
  act = this.createClientResourceRequest(d3.act)
  artisan = this.createClientResourceRequest(d3.artisan)
  recipe = this.createClientResourceRequest(d3.recipe)
  follower = this.createClientResourceRequest(d3.follower)
  characterClass = this.createClientResourceRequest(d3.characterClass)
  characterSkill = this.createClientResourceRequest(d3.characterSkill)
  item = this.createClientResourceRequest(d3.item)
  itemType = this.createClientResourceRequest(d3.itemType)
  accountProfile = this.createClientResourceRequest(d3.accountProfile)
  season = this.createClientResourceRequest(d3.season)
  era = this.createClientResourceRequest(d3.era)
}

export type D3Client = D3
