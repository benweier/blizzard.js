import { Blizzard, BlizzardClient, Headers } from '../../core'
import { ResourceResponse, ResourceOptions, ProtectedResourceOptions } from '../../resources'
import * as classic from '../../resources/classic'
import * as wow from '../../resources/wow'

export interface WoWClassicClient extends BlizzardClient {
  accountCharacterProfile<T = any>(
    args: ProtectedResourceOptions<wow.AccountCharacterProfileOptions>,
    headers?: Headers,
  ): ResourceResponse<T>
  accountProfile<T = any>(
    args: ProtectedResourceOptions<wow.AccountProfileOptions>,
    headers?: Headers,
  ): ResourceResponse<T>
  auctionHouse<T = any>(args: ResourceOptions<classic.AuctionHouseOptions>, headers?: Headers): ResourceResponse<T>
  characterAchievements<T = any>(
    args: ResourceOptions<wow.AccountCharacterAchievementsOptions>,
    headers?: Headers,
  ): ResourceResponse<T>
  characterAppearance<T = any>(
    args: ResourceOptions<wow.CharacterAppearanceOptions>,
    headers?: Headers,
  ): ResourceResponse<T>
  characterEquipment<T = any>(
    args: ResourceOptions<wow.CharacterEquipmentOptions>,
    headers?: Headers,
  ): ResourceResponse<T>
  characterHunterPets<T = any>(
    args: ResourceOptions<wow.CharacterHunterPetsOptions>,
    headers?: Headers,
  ): ResourceResponse<T>
  characterMedia<T = any>(args: ResourceOptions<wow.CharacterMediaOptions>, headers?: Headers): ResourceResponse<T>
  characterProfile<T = any>(args: ResourceOptions<wow.CharacterProfileOptions>, headers?: Headers): ResourceResponse<T>
  characterPVP<T = any>(args: ResourceOptions<wow.CharacterPVPOptions>, headers?: Headers): ResourceResponse<T>
  characterStatistics<T = any>(
    args: ResourceOptions<wow.CharacterStatisticsOptions>,
    headers?: Headers,
  ): ResourceResponse<T>
  connectedRealm<T = any>(
    args?: null | ResourceOptions<wow.ConnectedRealmOptions>,
    headers?: Headers,
  ): ResourceResponse<T>
  connectedRealmSearch<T = any>(
    args: ResourceOptions<wow.ConnectedRealmSearchOptions>,
    headers?: Headers,
  ): ResourceResponse<T>
  creature<T = any>(args: ResourceOptions<wow.CreatureOptions>, headers?: Headers): ResourceResponse<T>
  creatureFamily<T = any>(
    args?: null | ResourceOptions<wow.CreatureFamilyOptions>,
    headers?: Headers,
  ): ResourceResponse<T>
  creatureSearch<T = any>(args: ResourceOptions<wow.CreatureSearchOptions>, headers?: Headers): ResourceResponse<T>
  creatureType<T = any>(args?: null | ResourceOptions<wow.CreatureTypeOptions>, headers?: Headers): ResourceResponse<T>
  guild<T = any>(args: ResourceOptions<wow.GuildOptions>, headers?: Headers): ResourceResponse<T>
  guildCrest<T = any>(args?: null | ResourceOptions<wow.GuildCrestOptions>, headers?: Headers): ResourceResponse<T>
  item<T = any>(args: ResourceOptions<wow.ItemOptions>, headers?: Headers): ResourceResponse<T>
  itemSearch<T = any>(args: ResourceOptions<wow.ItemSearchOptions>, headers?: Headers): ResourceResponse<T>
  mediaSearch<T = any>(args: ResourceOptions<wow.MediaSearchOptions>, headers?: Headers): ResourceResponse<T>
  playableClass<T = any>(
    args?: null | ResourceOptions<wow.PlayableClassOptions>,
    headers?: Headers,
  ): ResourceResponse<T>
  playableRace<T = any>(args?: null | ResourceOptions<wow.PlayableRaceOptions>, headers?: Headers): ResourceResponse<T>
  powerType<T = any>(args?: null | ResourceOptions<wow.PowerTypeOptions>, headers?: Headers): ResourceResponse<T>
  realm<T = any>(args?: null | ResourceOptions<wow.RealmOptions>, headers?: Headers): ResourceResponse<T>
  realmSearch<T = any>(args: ResourceOptions<wow.RealmSearchOptions>, headers?: Headers): ResourceResponse<T>
  region<T = any>(args?: null | ResourceOptions<wow.RegionOptions>, headers?: Headers): ResourceResponse<T>
  token<T = any>(args?: null | ResourceOptions<wow.TokenOptions>, headers?: Headers): ResourceResponse<T>
}

export class WoWClassic extends Blizzard implements WoWClassicClient {
  accountCharacterProfile = this.createClientResourceRequest(wow.accountCharacterProfile.bind(this, 'profile-classic'))
  accountProfile = this.createClientResourceRequest(wow.accountProfile.bind(this, 'profile-classic'))
  auctionHouse = this.createClientResourceRequest(classic.auctionHouse.bind(this, 'dynamic-classic'))
  characterAchievements = this.createClientResourceRequest(wow.characterAchievements.bind(this, 'profile-classic'))
  characterAppearance = this.createClientResourceRequest(wow.characterAppearance.bind(this, 'profile-classic'))
  characterEquipment = this.createClientResourceRequest(wow.characterEquipment.bind(this, 'profile-classic'))
  characterHunterPets = this.createClientResourceRequest(wow.characterHunterPets.bind(this, 'profile-classic'))
  characterMedia = this.createClientResourceRequest(wow.characterMedia.bind(this, 'profile-classic'))
  characterPVP = this.createClientResourceRequest(wow.characterPVP.bind(this, 'profile-classic'))
  characterProfile = this.createClientResourceRequest(wow.characterProfile.bind(this, 'profile-classic'))
  characterStatistics = this.createClientResourceRequest(wow.characterStatistics.bind(this, 'profile-classic'))
  connectedRealm = this.createClientResourceRequest(wow.connectedRealm.bind(this, 'dynamic-classic'))
  connectedRealmSearch = this.createClientResourceRequest(wow.connectedRealmSearch.bind(this, 'dynamic-classic'))
  creature = this.createClientResourceRequest(wow.creature.bind(this, 'static-classic'))
  creatureFamily = this.createClientResourceRequest(wow.creatureFamily.bind(this, 'static-classic'))
  creatureSearch = this.createClientResourceRequest(wow.creatureSearch.bind(this, 'static-classic'))
  creatureType = this.createClientResourceRequest(wow.creatureType.bind(this, 'static-classic'))
  guild = this.createClientResourceRequest(wow.guild.bind(this, 'profile-classic'))
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

export class WoWClassicEra extends Blizzard implements WoWClassicClient {
  accountCharacterProfile = this.createClientResourceRequest(
    wow.accountCharacterProfile.bind(this, 'profile-classic1x'),
  )
  accountProfile = this.createClientResourceRequest(wow.accountProfile.bind(this, 'profile-classic1x'))
  auctionHouse = this.createClientResourceRequest(classic.auctionHouse.bind(this, 'dynamic-classic'))
  characterAchievements = this.createClientResourceRequest(wow.characterAchievements.bind(this, 'profile-classic1x'))
  characterAppearance = this.createClientResourceRequest(wow.characterAppearance.bind(this, 'profile-classic1x'))
  characterEquipment = this.createClientResourceRequest(wow.characterEquipment.bind(this, 'profile-classic1x'))
  characterHunterPets = this.createClientResourceRequest(wow.characterHunterPets.bind(this, 'profile-classic1x'))
  characterMedia = this.createClientResourceRequest(wow.characterMedia.bind(this, 'profile-classic1x'))
  characterPVP = this.createClientResourceRequest(wow.characterPVP.bind(this, 'profile-classic1x'))
  characterProfile = this.createClientResourceRequest(wow.characterProfile.bind(this, 'profile-classic1x'))
  characterStatistics = this.createClientResourceRequest(wow.characterStatistics.bind(this, 'profile-classic1x'))
  connectedRealm = this.createClientResourceRequest(wow.connectedRealm.bind(this, 'dynamic-classic1x'))
  connectedRealmSearch = this.createClientResourceRequest(wow.connectedRealmSearch.bind(this, 'dynamic-classic1x'))
  creature = this.createClientResourceRequest(wow.creature.bind(this, 'static-classic1x'))
  creatureFamily = this.createClientResourceRequest(wow.creatureFamily.bind(this, 'static-classic1x'))
  creatureSearch = this.createClientResourceRequest(wow.creatureSearch.bind(this, 'static-classic1x'))
  creatureType = this.createClientResourceRequest(wow.creatureType.bind(this, 'static-classic1x'))
  guild = this.createClientResourceRequest(wow.guild.bind(this, 'profile-classic1x'))
  guildCrest = this.createClientResourceRequest(wow.guildCrest.bind(this, 'static-classic1x'))
  item = this.createClientResourceRequest(wow.item.bind(this, 'static-classic1x'))
  itemSearch = this.createClientResourceRequest(wow.itemSearch.bind(this, 'static-classic1x'))
  mediaSearch = this.createClientResourceRequest(wow.mediaSearch.bind(this, 'static-classic1x'))
  playableClass = this.createClientResourceRequest(wow.playableClass.bind(this, 'static-classic1x'))
  playableRace = this.createClientResourceRequest(wow.playableRace.bind(this, 'static-classic1x'))
  powerType = this.createClientResourceRequest(wow.powerType.bind(this, 'static-classic1x'))
  realm = this.createClientResourceRequest(wow.realm.bind(this, 'dynamic-classic1x'))
  realmSearch = this.createClientResourceRequest(wow.realmSearch.bind(this, 'dynamic-classic1x'))
  region = this.createClientResourceRequest(wow.region.bind(this, 'dynamic-classic1x'))
  token = this.createClientResourceRequest(wow.token.bind(this, 'dynamic-classic1x'))
}
