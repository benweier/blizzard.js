import { Blizzard, BlizzardClient, Headers } from '../core'
import { ResourceResponse, ResourceOptions } from '../resources'
import * as d3 from '../resources/d3'

export interface D3Client extends BlizzardClient {
  act<T = any>(args?: null | ResourceOptions<d3.ActOptions>, headers?: Headers): ResourceResponse<T>
  artisan<T = any>(args: ResourceOptions<d3.ArtisanOptions>, headers?: Headers): ResourceResponse<T>
  recipe<T = any>(args: ResourceOptions<d3.RecipeOptions>, headers?: Headers): ResourceResponse<T>
  follower<T = any>(args: ResourceOptions<d3.FollowerOptions>, headers?: Headers): ResourceResponse<T>
  characterClass<T = any>(args: ResourceOptions<d3.CharacterClassOptions>, headers?: Headers): ResourceResponse<T>
  characterSkill<T = any>(args: ResourceOptions<d3.CharacterSkillOptions>, headers?: Headers): ResourceResponse<T>
  item<T = any>(args: ResourceOptions<d3.ItemOptions>, headers?: Headers): ResourceResponse<T>
  itemType<T = any>(args?: null | ResourceOptions<d3.ItemTypeOptions>, headers?: Headers): ResourceResponse<T>
  accountProfile<T = any>(args: ResourceOptions<d3.AccountProfile>, headers?: Headers): ResourceResponse<T>
  season<T = any>(args?: null | ResourceOptions<d3.SeasonOptions>, headers?: Headers): ResourceResponse<T>
  era<T = any>(args?: null | ResourceOptions<d3.EraOptions>, headers?: Headers): ResourceResponse<T>
}

export class D3 extends Blizzard implements D3Client {
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
