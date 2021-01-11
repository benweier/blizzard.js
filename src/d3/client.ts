import { Blizzard, BlizzardClient } from '../core'
import { ResourceResponse, ResourceOptions } from '../resources'
import * as d3 from '../resources/d3'

export interface D3Client extends BlizzardClient {
  act<T = any>(args?: ResourceOptions<d3.ActOptions>): ResourceResponse<T>
  artisan<T = any>(args: ResourceOptions<d3.ArtisanOptions>): ResourceResponse<T>
  recipe<T = any>(args: ResourceOptions<d3.RecipeOptions>): ResourceResponse<T>
  follower<T = any>(args: ResourceOptions<d3.FollowerOptions>): ResourceResponse<T>
  characterClass<T = any>(args: ResourceOptions<d3.CharacterClassOptions>): ResourceResponse<T>
  characterSkill<T = any>(args: ResourceOptions<d3.CharacterSkillOptions>): ResourceResponse<T>
  item<T = any>(args: ResourceOptions<d3.ItemOptions>): ResourceResponse<T>
  itemType<T = any>(args: ResourceOptions<d3.ItemTypeOptions>): ResourceResponse<T>
  accountProfile<T = any>(args: ResourceOptions<d3.AccountProfile>): ResourceResponse<T>
}

export class D3 extends Blizzard implements D3Client {
  tmp = this.createClientResourceRequest(d3.tmp)
}
