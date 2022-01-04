import { Blizzard, BlizzardClient, Headers } from '../../core'
import { ResourceResponse, ResourceOptions } from '../../resources'
import * as wow from '../../resources/wow'

export interface WoWClassicClient extends BlizzardClient {
  connectedRealm<T = any>(args?: ResourceOptions<wow.ConnectedRealmOptions>, headers?: Headers): ResourceResponse<T>
  connectedRealmSearch<T = any>(
    args: ResourceOptions<wow.ConnectedRealmSearchOptions>,
    headers?: Headers,
  ): ResourceResponse<T>
  creature<T = any>(args: ResourceOptions<wow.CreatureOptions>, headers?: Headers): ResourceResponse<T>
  creatureFamily<T = any>(args?: ResourceOptions<wow.CreatureFamilyOptions>, headers?: Headers): ResourceResponse<T>
  creatureSearch<T = any>(args: ResourceOptions<wow.CreatureSearchOptions>, headers?: Headers): ResourceResponse<T>
  creatureType<T = any>(args?: ResourceOptions<wow.CreatureTypeOptions>, headers?: Headers): ResourceResponse<T>
  guildCrest<T = any>(args?: ResourceOptions<wow.GuildCrestOptions>, headers?: Headers): ResourceResponse<T>
  item<T = any>(args: ResourceOptions<wow.ItemOptions>, headers?: Headers): ResourceResponse<T>
  itemSearch<T = any>(args: ResourceOptions<wow.ItemSearchOptions>, headers?: Headers): ResourceResponse<T>
  mediaSearch<T = any>(args: ResourceOptions<wow.MediaSearchOptions>, headers?: Headers): ResourceResponse<T>
  playableClass<T = any>(args?: ResourceOptions<wow.PlayableClassOptions>, headers?: Headers): ResourceResponse<T>
  playableRace<T = any>(args?: ResourceOptions<wow.PlayableRaceOptions>, headers?: Headers): ResourceResponse<T>
  powerType<T = any>(args?: ResourceOptions<wow.PowerTypeOptions>, headers?: Headers): ResourceResponse<T>
  realm<T = any>(args?: ResourceOptions<wow.RealmOptions>, headers?: Headers): ResourceResponse<T>
  realmSearch<T = any>(args: ResourceOptions<wow.RealmSearchOptions>, headers?: Headers): ResourceResponse<T>
  region<T = any>(args?: ResourceOptions<wow.RegionOptions>, headers?: Headers): ResourceResponse<T>
  token<T = any>(args?: ResourceOptions<wow.TokenOptions>, headers?: Headers): ResourceResponse<T>
}

export class WoWClassic extends Blizzard implements WoWClassicClient {
  connectedRealm = this.createClientResourceRequest(wow.connectedRealm.bind(this, 'dynamic-classic'))
  connectedRealmSearch = this.createClientResourceRequest(wow.connectedRealmSearch.bind(this, 'dynamic-classic'))
  creature = this.createClientResourceRequest(wow.creature.bind(this, 'static-classic'))
  creatureFamily = this.createClientResourceRequest(wow.creatureFamily.bind(this, 'static-classic'))
  creatureSearch = this.createClientResourceRequest(wow.creatureSearch.bind(this, 'static-classic'))
  creatureType = this.createClientResourceRequest(wow.creatureType.bind(this, 'static-classic'))
  guildCrest = this.createClientResourceRequest(wow.guildCrest.bind(this, 'static-classic'))
  item = this.createClientResourceRequest(wow.item.bind(this, 'static-classic'))
  itemSearch = this.createClientResourceRequest(wow.itemSearch.bind(this, 'static-classic'))
  mediaSearch = this.createClientResourceRequest(wow.mediaSearch.bind(this, 'static-classic'))
  playableClass = this.createClientResourceRequest(wow.playableClass.bind(this, 'static-classic'))
  playableRace = this.createClientResourceRequest(wow.playableRace.bind(this, 'static-classic'))
  powerType = this.createClientResourceRequest(wow.powerType.bind(this, 'static-classic'))
  realm = this.createClientResourceRequest(wow.realm.bind(this, 'dynamic-classic'))
  realmSearch = this.createClientResourceRequest(wow.realmSearch.bind(this, 'dynamic-classic'))
  region = this.createClientResourceRequest(wow.region.bind(this, 'dynamic-classic'))
  token = this.createClientResourceRequest(wow.token.bind(this, 'dynamic-classic'))
}
