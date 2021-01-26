import { Blizzard, BlizzardClient } from '../../core'
import { ResourceResponse, ResourceOptions } from '../../resources'
import * as wow from '../../resources/wow'

export interface WoWClassicClient extends BlizzardClient {
  connectedRealm<T = any>(args?: ResourceOptions<wow.ConnectedRealmOptions>): ResourceResponse<T>
  connectedRealmSearch<T = any>(args: ResourceOptions<wow.ConnectedRealmSearchOptions>): ResourceResponse<T>
  creature<T = any>(args: ResourceOptions<wow.CreatureOptions>): ResourceResponse<T>
  guildCrest<T = any>(args?: ResourceOptions<wow.GuildCrestOptions>): ResourceResponse<T>
  item<T = any>(args: ResourceOptions<wow.ItemOptions>): ResourceResponse<T>
  itemSearch<T = any>(args: ResourceOptions<wow.ItemSearchOptions>): ResourceResponse<T>
  mediaSearch<T = any>(args: ResourceOptions<wow.MediaSearchOptions>): ResourceResponse<T>
  playableClass<T = any>(args?: ResourceOptions<wow.PlayableClassOptions>): ResourceResponse<T>
  playableRace<T = any>(args?: ResourceOptions<wow.PlayableRaceOptions>): ResourceResponse<T>
  powerType<T = any>(args?: ResourceOptions<wow.PowerTypeOptions>): ResourceResponse<T>
  realm<T = any>(args?: ResourceOptions<wow.RealmOptions>): ResourceResponse<T>
  realmSearch<T = any>(args: ResourceOptions<wow.RealmSearchOptions>): ResourceResponse<T>
  region<T = any>(args?: ResourceOptions<wow.RegionOptions>): ResourceResponse<T>
  token<T = any>(args?: ResourceOptions<wow.TokenOptions>): ResourceResponse<T>
}

export class WoWClassic extends Blizzard implements WoWClassicClient {
  connectedRealm = this.createClientResourceRequest(wow.connectedRealm)
  connectedRealmSearch = this.createClientResourceRequest(wow.connectedRealmSearch)
  creature = this.createClientResourceRequest(wow.creature)
  creatureFamily = this.createClientResourceRequest(wow.creatureFamily)
  creatureSearch = this.createClientResourceRequest(wow.creatureSearch)
  creatureType = this.createClientResourceRequest(wow.creatureType)
  guildCrest = this.createClientResourceRequest(wow.guildCrest)
  item = this.createClientResourceRequest(wow.item)
  itemSearch = this.createClientResourceRequest(wow.itemSearch)
  mediaSearch = this.createClientResourceRequest(wow.mediaSearch)
  playableClass = this.createClientResourceRequest(wow.playableClass)
  playableRace = this.createClientResourceRequest(wow.playableRace)
  powerType = this.createClientResourceRequest(wow.powerType)
  realm = this.createClientResourceRequest(wow.realm)
  realmSearch = this.createClientResourceRequest(wow.realmSearch)
  region = this.createClientResourceRequest(wow.region)
  token = this.createClientResourceRequest(wow.token)
}
