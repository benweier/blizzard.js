import { Blizzard, BlizzardClient } from '../core'
import { ProtectedResourceOptions, ResourceResponse, ResourceOptions } from '../resources'
import * as wow from '../resources/wow'

export interface WoWClient extends BlizzardClient {
  accountCharacterProfile<T = any>(
    args: ProtectedResourceOptions<wow.AccountCharacterProfileOptions>,
  ): ResourceResponse<T>
  accountCollections<T = any>(args?: ProtectedResourceOptions<wow.AccountCollectionsOptions>): ResourceResponse<T>
  accountProfile<T = any>(args: ProtectedResourceOptions<wow.AccountProfileOptions>): ResourceResponse<T>
  achievement<T = any>(args?: ResourceOptions<wow.AchievementOptions>): ResourceResponse<T>
  achievementCategory<T = any>(args?: ResourceOptions<wow.AchievementCategoryOptions>): ResourceResponse<T>
  auctionHouse<T = any>(args: ResourceOptions<wow.AuctionHouseOptions>): ResourceResponse<T>
  azeriteEssence<T = any>(args?: ResourceOptions<wow.AzeriteEssenceOptions>): ResourceResponse<T>
  azeriteEssenceSearch<T = any>(args: ResourceOptions<wow.AzeriteEssenceSearchOptions>): ResourceResponse<T>
  characterAchievements<T = any>(
    args: ProtectedResourceOptions<wow.AccountCharacterAchievementsOptions>,
  ): ResourceResponse<T>
  characterAppearance<T = any>(args: ProtectedResourceOptions<wow.CharacterAppearanceOptions>): ResourceResponse<T>
  characterCollections<T = any>(args: ProtectedResourceOptions<wow.CharacterCollectionsOptions>): ResourceResponse<T>
  characterEncounters<T = any>(args: ProtectedResourceOptions<wow.CharacterEncountersOptions>): ResourceResponse<T>
  characterEquipment<T = any>(args: ProtectedResourceOptions<wow.CharacterEquipmentOptions>): ResourceResponse<T>
  characterHunterPets<T = any>(args: ProtectedResourceOptions<wow.CharacterHunterPetsOptions>): ResourceResponse<T>
  characterMedia<T = any>(args: ProtectedResourceOptions<wow.CharacterMediaOptions>): ResourceResponse<T>
  characterMythicKeystone<T = any>(
    args: ProtectedResourceOptions<wow.CharacterMythicKeystoneOptions>,
  ): ResourceResponse<T>
  characterProfessions<T = any>(args: ProtectedResourceOptions<wow.CharacterProfessionsOptions>): ResourceResponse<T>
  characterProfile<T = any>(args: ProtectedResourceOptions<wow.CharacterProfileOptions>): ResourceResponse<T>
  characterPVP<T = any>(args: ProtectedResourceOptions<wow.CharacterPVPOptions>): ResourceResponse<T>
  characterQuests<T = any>(args: ProtectedResourceOptions<wow.CharacterQuestsOptions>): ResourceResponse<T>
  characterReputations<T = any>(args: ProtectedResourceOptions<wow.CharacterReputationsOptions>): ResourceResponse<T>
  characterSoulbinds<T = any>(args: ProtectedResourceOptions<wow.CharacterSoulbindsOptions>): ResourceResponse<T>
  characterSpecializations<T = any>(
    args: ProtectedResourceOptions<wow.CharacterSpecializationsOptions>,
  ): ResourceResponse<T>
  characterStatistics<T = any>(args: ProtectedResourceOptions<wow.CharacterStatisticsOptions>): ResourceResponse<T>
  characterTitles<T = any>(args: ProtectedResourceOptions<wow.CharacterTitlesOptions>): ResourceResponse<T>
  conduit<T = any>(args?: ResourceOptions<wow.ConduitOptions>): ResourceResponse<T>
  connectedRealm<T = any>(args?: ResourceOptions<wow.ConnectedRealmOptions>): ResourceResponse<T>
  connectedRealmSearch<T = any>(args: ResourceOptions<wow.ConnectedRealmSearchOptions>): ResourceResponse<T>
  covenant<T = any>(args?: ResourceOptions<wow.CovenantOptions>): ResourceResponse<T>
  creature<T = any>(args: ResourceOptions<wow.CreatureOptions>): ResourceResponse<T>
  creatureFamily<T = any>(args?: ResourceOptions<wow.CreatureFamilyOptions>): ResourceResponse<T>
  creatureSearch<T = any>(args: ResourceOptions<wow.CreatureSearchOptions>): ResourceResponse<T>
  creatureType<T = any>(args?: ResourceOptions<wow.CreatureTypeOptions>): ResourceResponse<T>
  guild<T = any>(args: ProtectedResourceOptions<wow.GuildOptions>): ResourceResponse<T>
  guildCrest<T = any>(args?: ResourceOptions<wow.GuildCrestOptions>): ResourceResponse<T>
  item<T = any>(args: ResourceOptions<wow.ItemOptions>): ResourceResponse<T>
  itemSearch<T = any>(args: ResourceOptions<wow.ItemSearchOptions>): ResourceResponse<T>
  journal<T = any>(args: ResourceOptions<wow.JournalOptions>): ResourceResponse<T>
  mediaSearch<T = any>(args: ResourceOptions<wow.MediaSearchOptions>): ResourceResponse<T>
  modifiedCrafting<T = any>(args?: ResourceOptions<wow.ModifiedCraftingOptions>): ResourceResponse<T>
  mount<T = any>(args?: ResourceOptions<wow.MountOptions>): ResourceResponse<T>
  mountSearch<T = any>(args: ResourceOptions<wow.MountSearchOptions>): ResourceResponse<T>
  mythicKeystone<T = any>(args?: ResourceOptions<wow.MythicKeystoneOptions>): ResourceResponse<T>
  mythicKeystoneAffix<T = any>(args?: ResourceOptions<wow.MythicKeystoneAffixOptions>): ResourceResponse<T>
  mythicKeystoneLeaderboard<T = any>(args: ResourceOptions<wow.MythicKeystoneLeaderboardOptions>): ResourceResponse<T>
  mythicRaidLeaderboard<T = any>(args: ResourceOptions<wow.MythicRaidLeaderboardOptions>): ResourceResponse<T>
  pet<T = any>(args?: ResourceOptions<wow.PetOptions>): ResourceResponse<T>
  playableClass<T = any>(args?: ResourceOptions<wow.PlayableClassOptions>): ResourceResponse<T>
  playableRace<T = any>(args?: ResourceOptions<wow.PlayableRaceOptions>): ResourceResponse<T>
  playableSpecialization<T = any>(args?: ResourceOptions<wow.PlayableSpecializationOptions>): ResourceResponse<T>
  powerType<T = any>(args?: ResourceOptions<wow.PowerTypeOptions>): ResourceResponse<T>
  profession<T = any>(args?: ResourceOptions<wow.ProfessionOptions>): ResourceResponse<T>
  pvpSeason<T = any>(args?: ResourceOptions<wow.PVPSeasonOptions>): ResourceResponse<T>
  pvpTier<T = any>(args?: ResourceOptions<wow.PVPTierOptions>): ResourceResponse<T>
  quest<T = any>(args?: ResourceOptions<wow.QuestOptions>): ResourceResponse<T>
  realm<T = any>(args?: ResourceOptions<wow.RealmOptions>): ResourceResponse<T>
  realmSearch<T = any>(args: ResourceOptions<wow.RealmSearchOptions>): ResourceResponse<T>
  recipe<T = any>(args: ResourceOptions<wow.RecipeOptions>): ResourceResponse<T>
  region<T = any>(args?: ResourceOptions<wow.RegionOptions>): ResourceResponse<T>
  reputation<T = any>(args: ResourceOptions<wow.ReputationOptions>): ResourceResponse<T>
  soulbind<T = any>(args?: ResourceOptions<wow.SoulbindOptions>): ResourceResponse<T>
  spell<T = any>(args: ResourceOptions<wow.SpellOptions>): ResourceResponse<T>
  spellSearch<T = any>(args: ResourceOptions<wow.SpellSearchOptions>): ResourceResponse<T>
  talent<T = any>(args?: ResourceOptions<wow.TalentOptions>): ResourceResponse<T>
  techTalent<T = any>(args?: ResourceOptions<wow.TechTalentOptions>): ResourceResponse<T>
  title<T = any>(args?: ResourceOptions<wow.TitleOptions>): ResourceResponse<T>
  token<T = any>(args?: ResourceOptions<wow.TokenOptions>): ResourceResponse<T>
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
  characterCollections = this.createClientResourceRequest(wow.characterCollections)
  characterEncounters = this.createClientResourceRequest(wow.characterEncounters)
  characterEquipment = this.createClientResourceRequest(wow.characterEquipment)
  characterHunterPets = this.createClientResourceRequest(wow.characterHunterPets)
  characterMedia = this.createClientResourceRequest(wow.characterMedia)
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
  mediaSearch = this.createClientResourceRequest(wow.mediaSearch)
  modifiedCrafting = this.createClientResourceRequest(wow.modifiedCrafting)
  mount = this.createClientResourceRequest(wow.mount)
  mountSearch = this.createClientResourceRequest(wow.mountSearch)
  mythicKeystone = this.createClientResourceRequest(wow.mythicKeystone)
  mythicKeystoneAffix = this.createClientResourceRequest(wow.mythicKeystoneAffix)
  mythicKeystoneLeaderboard = this.createClientResourceRequest(wow.mythicKeystoneLeaderboard)
  mythicRaidLeaderboard = this.createClientResourceRequest(wow.mythicRaidLeaderboard)
  pet = this.createClientResourceRequest(wow.pet)
  playableClass = this.createClientResourceRequest(wow.playableClass)
  playableRace = this.createClientResourceRequest(wow.playableRace)
  playableSpecialization = this.createClientResourceRequest(wow.playableSpecialization)
  powerType = this.createClientResourceRequest(wow.powerType)
  profession = this.createClientResourceRequest(wow.profession)
  pvpSeason = this.createClientResourceRequest(wow.pvpSeason)
  pvpTier = this.createClientResourceRequest(wow.pvpTier)
  quest = this.createClientResourceRequest(wow.quest)
  realm = this.createClientResourceRequest(wow.realm)
  realmSearch = this.createClientResourceRequest(wow.realmSearch)
  recipe = this.createClientResourceRequest(wow.recipe)
  region = this.createClientResourceRequest(wow.region)
  reputation = this.createClientResourceRequest(wow.reputation)
  soulbind = this.createClientResourceRequest(wow.soulbind)
  spell = this.createClientResourceRequest(wow.spell)
  spellSearch = this.createClientResourceRequest(wow.spellSearch)
  talent = this.createClientResourceRequest(wow.talent)
  techTalent = this.createClientResourceRequest(wow.techTalent)
  title = this.createClientResourceRequest(wow.title)
  token = this.createClientResourceRequest(wow.token)
}
