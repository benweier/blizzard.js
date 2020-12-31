import { Blizzard, BlizzardClient } from '../core'
import { ProtectedResourceOptions, ResourceResponse, ResourceOptions } from '../resources'
import * as wow from '../resources/wow'

export interface WoWClient extends BlizzardClient {
  accountCharacterProfile(args: ProtectedResourceOptions<wow.AccountCharacterProfileOptions>): ResourceResponse
  accountCollections(args: ProtectedResourceOptions<wow.AccountCollectionsOptions>): ResourceResponse
  accountProfile(args: ProtectedResourceOptions<wow.AccountProfileOptions>): ResourceResponse
  achievement(args?: ResourceOptions<wow.AchievementOptions>): ResourceResponse
  achievementCategory(args?: ResourceOptions<wow.AchievementCategoryOptions>): ResourceResponse
  auctionHouse(args: ResourceOptions<wow.AuctionHouseOptions>): ResourceResponse
  azeriteEssence(args?: ResourceOptions<wow.AzeriteEssenceOptions>): ResourceResponse
  azeriteEssenceSearch(args: ResourceOptions<wow.AzeriteEssenceSearchOptions>): ResourceResponse
  characterAchievements(args: ProtectedResourceOptions<wow.AccountCharacterAchievementsOptions>): ResourceResponse
  characterAppearance(args: ProtectedResourceOptions<wow.CharacterAppearanceOptions>): ResourceResponse
  characterEncounters(args: ProtectedResourceOptions<wow.CharacterEncountersOptions>): ResourceResponse
  characterEquipment(args: ProtectedResourceOptions<wow.CharacterEquipmentOptions>): ResourceResponse
  characterHunterPets(args: ProtectedResourceOptions<wow.CharacterHunterPetsOptions>): ResourceResponse
  characterMythicKeystone(args: ProtectedResourceOptions<wow.CharacterMythicKeystoneOptions>): ResourceResponse
  characterProfessions(args: ProtectedResourceOptions<wow.CharacterProfessionsOptions>): ResourceResponse
  characterProfile(args: ProtectedResourceOptions<wow.CharacterProfileOptions>): ResourceResponse
  characterPVP(args: ProtectedResourceOptions<wow.CharacterPVPOptions>): ResourceResponse
  characterQuests(args: ProtectedResourceOptions<wow.CharacterQuestsOptions>): ResourceResponse
  characterReputations(args: ProtectedResourceOptions<wow.CharacterReputationsOptions>): ResourceResponse
  characterSoulbinds(args: ProtectedResourceOptions<wow.CharacterSoulbindsOptions>): ResourceResponse
  characterSpecializations(args: ProtectedResourceOptions<wow.CharacterSpecializationsOptions>): ResourceResponse
  characterStatistics(args: ProtectedResourceOptions<wow.CharacterStatisticsOptions>): ResourceResponse
  characterTitles(args: ProtectedResourceOptions<wow.CharacterTitlesOptions>): ResourceResponse
  conduit(args?: ResourceOptions<wow.ConduitOptions>): ResourceResponse
  connectedRealm(args: ResourceOptions<wow.ConnectedRealmOptions>): ResourceResponse
  connectedRealmSearch(args?: ResourceOptions<wow.ConnectedRealmSearchOptions>): ResourceResponse
  covenant(args?: ResourceOptions<wow.CovenantOptions>): ResourceResponse
  creature(args: ResourceOptions<wow.CreatureOptions>): ResourceResponse
  creatureFamily(args?: ResourceOptions<wow.CreatureFamilyOptions>): ResourceResponse
  creatureSearch(args: ResourceOptions<wow.CreatureSearchOptions>): ResourceResponse
  creatureType(args?: ResourceOptions<wow.CreatureTypeOptions>): ResourceResponse
  guild(args: ProtectedResourceOptions<wow.GuildOptions>): ResourceResponse
  guildCrest(args?: ResourceOptions<wow.GuildCrestOptions>): ResourceResponse
  item(args: ResourceOptions<wow.ItemOptions>): ResourceResponse
  itemSearch(args: ResourceOptions<wow.ItemSearchOptions>): ResourceResponse
  journal(args: ResourceOptions<wow.JournalOptions>): ResourceResponse
  soulbind(args?: ResourceOptions<wow.SoulbindOptions>): ResourceResponse
}

export class WoW extends Blizzard implements WoWClient {
  accountCharacterProfile = this.createClientResourceRequest(wow.accountCharacterProfile)
  accountCollections = this.createClientResourceRequest(wow.accountCollections)
  accountProfile = this.createClientResourceRequest(wow.accountProfile)
  achievement = this.createClientResourceRequest(wow.achievement)
  achievementCategory = this.createClientResourceRequest(wow.achievementCategory)
  auctionHouse = this.createClientResourceRequest(wow.auctionHouse)
  azeriteEssence = this.createClientResourceRequest(wow.azeriteEssence)
  azeriteEssenceSearch = this.createClientResourceRequest(wow.azeriteEssenceSearch)
  characterAchievements = this.createClientResourceRequest(wow.characterAchievements)
  characterAppearance = this.createClientResourceRequest(wow.characterAppearance)
  characterEncounters = this.createClientResourceRequest(wow.characterEncounters)
  characterEquipment = this.createClientResourceRequest(wow.characterEquipment)
  characterHunterPets = this.createClientResourceRequest(wow.characterHunterPets)
  characterMythicKeystone = this.createClientResourceRequest(wow.characterMythicKeystone)
  characterProfessions = this.createClientResourceRequest(wow.characterProfessions)
  characterProfile = this.createClientResourceRequest(wow.characterProfile)
  characterPVP = this.createClientResourceRequest(wow.characterPVP)
  characterQuests = this.createClientResourceRequest(wow.characterQuests)
  characterReputations = this.createClientResourceRequest(wow.characterReputations)
  characterSoulbinds = this.createClientResourceRequest(wow.characterSoulbinds)
  characterSpecializations = this.createClientResourceRequest(wow.characterSpecializations)
  characterStatistics = this.createClientResourceRequest(wow.characterStatistics)
  characterTitles = this.createClientResourceRequest(wow.characterTitles)
  conduit = this.createClientResourceRequest(wow.conduit)
  connectedRealm = this.createClientResourceRequest(wow.connectedRealm)
  connectedRealmSearch = this.createClientResourceRequest(wow.connectedRealmSearch)
  covenant = this.createClientResourceRequest(wow.covenant)
  creature = this.createClientResourceRequest(wow.creature)
  creatureFamily = this.createClientResourceRequest(wow.creatureFamily)
  creatureSearch = this.createClientResourceRequest(wow.creatureSearch)
  creatureType = this.createClientResourceRequest(wow.creatureType)
  guild = this.createClientResourceRequest(wow.guild)
  guildCrest = this.createClientResourceRequest(wow.guildCrest)
  item = this.createClientResourceRequest(wow.item)
  itemSearch = this.createClientResourceRequest(wow.itemSearch)
  journal = this.createClientResourceRequest(wow.journal)
  soulbind = this.createClientResourceRequest(wow.soulbind)
}
