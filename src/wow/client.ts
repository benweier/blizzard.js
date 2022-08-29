import { Blizzard, BlizzardClient, Headers } from '../core'
import { ProtectedResourceOptions, ResourceResponse, ResourceOptions } from '../resources'
import * as wow from '../resources/wow'

export interface WoWClient extends BlizzardClient {
  accountCharacterProfile<T = any>(
    args: ProtectedResourceOptions<wow.AccountCharacterProfileOptions>,
    headers?: Headers,
  ): ResourceResponse<T>
  accountCollections<T = any>(
    args: ProtectedResourceOptions<wow.AccountCollectionsOptions>,
    headers?: Headers,
  ): ResourceResponse<T>
  accountProfile<T = any>(
    args: ProtectedResourceOptions<wow.AccountProfileOptions>,
    headers?: Headers,
  ): ResourceResponse<T>
  achievement<T = any>(args?: null | ResourceOptions<wow.AchievementOptions>, headers?: Headers): ResourceResponse<T>
  achievementCategory<T = any>(
    args?: null | ResourceOptions<wow.AchievementCategoryOptions>,
    headers?: Headers,
  ): ResourceResponse<T>
  auctionHouse<T = any>(args: ResourceOptions<wow.AuctionHouseOptions>, headers?: Headers): ResourceResponse<T>
  azeriteEssence<T = any>(
    args?: null | ResourceOptions<wow.AzeriteEssenceOptions>,
    headers?: Headers,
  ): ResourceResponse<T>
  azeriteEssenceSearch<T = any>(
    args: ResourceOptions<wow.AzeriteEssenceSearchOptions>,
    headers?: Headers,
  ): ResourceResponse<T>
  characterAchievements<T = any>(
    args: ResourceOptions<wow.AccountCharacterAchievementsOptions>,
    headers?: Headers,
  ): ResourceResponse<T>
  characterAppearance<T = any>(
    args: ResourceOptions<wow.CharacterAppearanceOptions>,
    headers?: Headers,
  ): ResourceResponse<T>
  characterCollections<T = any>(
    args: ResourceOptions<wow.CharacterCollectionsOptions>,
    headers?: Headers,
  ): ResourceResponse<T>
  characterEncounters<T = any>(
    args: ResourceOptions<wow.CharacterEncountersOptions>,
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
  characterMythicKeystone<T = any>(
    args: ResourceOptions<wow.CharacterMythicKeystoneOptions>,
    headers?: Headers,
  ): ResourceResponse<T>
  characterProfessions<T = any>(
    args: ResourceOptions<wow.CharacterProfessionsOptions>,
    headers?: Headers,
  ): ResourceResponse<T>
  characterProfile<T = any>(args: ResourceOptions<wow.CharacterProfileOptions>, headers?: Headers): ResourceResponse<T>
  characterPVP<T = any>(args: ResourceOptions<wow.CharacterPVPOptions>, headers?: Headers): ResourceResponse<T>
  characterQuests<T = any>(args: ResourceOptions<wow.CharacterQuestsOptions>, headers?: Headers): ResourceResponse<T>
  characterReputations<T = any>(
    args: ResourceOptions<wow.CharacterReputationsOptions>,
    headers?: Headers,
  ): ResourceResponse<T>
  characterSoulbinds<T = any>(
    args: ResourceOptions<wow.CharacterSoulbindsOptions>,
    headers?: Headers,
  ): ResourceResponse<T>
  characterSpecializations<T = any>(
    args: ResourceOptions<wow.CharacterSpecializationsOptions>,
    headers?: Headers,
  ): ResourceResponse<T>
  characterStatistics<T = any>(
    args: ResourceOptions<wow.CharacterStatisticsOptions>,
    headers?: Headers,
  ): ResourceResponse<T>
  characterTitles<T = any>(args: ResourceOptions<wow.CharacterTitlesOptions>, headers?: Headers): ResourceResponse<T>
  conduit<T = any>(args?: null | ResourceOptions<wow.ConduitOptions>, headers?: Headers): ResourceResponse<T>
  connectedRealm<T = any>(
    args?: null | ResourceOptions<wow.ConnectedRealmOptions>,
    headers?: Headers,
  ): ResourceResponse<T>
  connectedRealmSearch<T = any>(
    args: ResourceOptions<wow.ConnectedRealmSearchOptions>,
    headers?: Headers,
  ): ResourceResponse<T>
  commodities<T = any>(args?: null | ResourceOptions<wow.CommoditiesOptions>, headers?: Headers): ResourceResponse<T>
  covenant<T = any>(args?: null | ResourceOptions<wow.CovenantOptions>, headers?: Headers): ResourceResponse<T>
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
  journal<T = any>(args: ResourceOptions<wow.JournalOptions>, headers?: Headers): ResourceResponse<T>
  mediaSearch<T = any>(args: ResourceOptions<wow.MediaSearchOptions>, headers?: Headers): ResourceResponse<T>
  modifiedCrafting<T = any>(
    args?: null | ResourceOptions<wow.ModifiedCraftingOptions>,
    headers?: Headers,
  ): ResourceResponse<T>
  mount<T = any>(args?: null | ResourceOptions<wow.MountOptions>, headers?: Headers): ResourceResponse<T>
  mountSearch<T = any>(args: ResourceOptions<wow.MountSearchOptions>, headers?: Headers): ResourceResponse<T>
  mythicKeystone<T = any>(
    args?: null | ResourceOptions<wow.MythicKeystoneOptions>,
    headers?: Headers,
  ): ResourceResponse<T>
  mythicKeystoneAffix<T = any>(
    args?: null | ResourceOptions<wow.MythicKeystoneAffixOptions>,
    headers?: Headers,
  ): ResourceResponse<T>
  mythicKeystoneLeaderboard<T = any>(
    args: ResourceOptions<wow.MythicKeystoneLeaderboardOptions>,
    headers?: Headers,
  ): ResourceResponse<T>
  mythicRaidLeaderboard<T = any>(
    args: ResourceOptions<wow.MythicRaidLeaderboardOptions>,
    headers?: Headers,
  ): ResourceResponse<T>
  pet<T = any>(args?: null | ResourceOptions<wow.PetOptions>, headers?: Headers): ResourceResponse<T>
  playableClass<T = any>(
    args?: null | ResourceOptions<wow.PlayableClassOptions>,
    headers?: Headers,
  ): ResourceResponse<T>
  playableRace<T = any>(args?: null | ResourceOptions<wow.PlayableRaceOptions>, headers?: Headers): ResourceResponse<T>
  playableSpecialization<T = any>(
    args?: null | ResourceOptions<wow.PlayableSpecializationOptions>,
    headers?: Headers,
  ): ResourceResponse<T>
  powerType<T = any>(args?: null | ResourceOptions<wow.PowerTypeOptions>, headers?: Headers): ResourceResponse<T>
  profession<T = any>(args?: null | ResourceOptions<wow.ProfessionOptions>, headers?: Headers): ResourceResponse<T>
  pvpSeason<T = any>(args?: null | ResourceOptions<wow.PVPSeasonOptions>, headers?: Headers): ResourceResponse<T>
  pvpTier<T = any>(args?: null | ResourceOptions<wow.PVPTierOptions>, headers?: Headers): ResourceResponse<T>
  quest<T = any>(args?: null | ResourceOptions<wow.QuestOptions>, headers?: Headers): ResourceResponse<T>
  realm<T = any>(args?: null | ResourceOptions<wow.RealmOptions>, headers?: Headers): ResourceResponse<T>
  realmSearch<T = any>(args: ResourceOptions<wow.RealmSearchOptions>, headers?: Headers): ResourceResponse<T>
  recipe<T = any>(args: ResourceOptions<wow.RecipeOptions>, headers?: Headers): ResourceResponse<T>
  region<T = any>(args?: null | ResourceOptions<wow.RegionOptions>, headers?: Headers): ResourceResponse<T>
  reputation<T = any>(args: ResourceOptions<wow.ReputationOptions>, headers?: Headers): ResourceResponse<T>
  soulbind<T = any>(args?: null | ResourceOptions<wow.SoulbindOptions>, headers?: Headers): ResourceResponse<T>
  spell<T = any>(args: ResourceOptions<wow.SpellOptions>, headers?: Headers): ResourceResponse<T>
  spellSearch<T = any>(args: ResourceOptions<wow.SpellSearchOptions>, headers?: Headers): ResourceResponse<T>
  talent<T = any>(args?: null | ResourceOptions<wow.TalentOptions>, headers?: Headers): ResourceResponse<T>
  techTalent<T = any>(args?: null | ResourceOptions<wow.TechTalentOptions>, headers?: Headers): ResourceResponse<T>
  title<T = any>(args?: null | ResourceOptions<wow.TitleOptions>, headers?: Headers): ResourceResponse<T>
  token<T = any>(args?: null | ResourceOptions<wow.TokenOptions>, headers?: Headers): ResourceResponse<T>
}

export class WoW extends Blizzard implements WoWClient {
  accountCharacterProfile = this.createClientResourceRequest(wow.accountCharacterProfile.bind(this, 'profile'))
  accountCollections = this.createClientResourceRequest(wow.accountCollections.bind(this, 'profile'))
  accountProfile = this.createClientResourceRequest(wow.accountProfile.bind(this, 'profile'))
  achievement = this.createClientResourceRequest(wow.achievement.bind(this, 'static'))
  achievementCategory = this.createClientResourceRequest(wow.achievementCategory.bind(this, 'static'))
  auctionHouse = this.createClientResourceRequest(wow.auctionHouse.bind(this, 'dynamic'))
  azeriteEssence = this.createClientResourceRequest(wow.azeriteEssence.bind(this, 'static'))
  azeriteEssenceSearch = this.createClientResourceRequest(wow.azeriteEssenceSearch.bind(this, 'static'))
  characterAchievements = this.createClientResourceRequest(wow.characterAchievements.bind(this, 'profile'))
  characterAppearance = this.createClientResourceRequest(wow.characterAppearance.bind(this, 'profile'))
  characterCollections = this.createClientResourceRequest(wow.characterCollections.bind(this, 'profile'))
  characterEncounters = this.createClientResourceRequest(wow.characterEncounters.bind(this, 'profile'))
  characterEquipment = this.createClientResourceRequest(wow.characterEquipment.bind(this, 'profile'))
  characterHunterPets = this.createClientResourceRequest(wow.characterHunterPets.bind(this, 'profile'))
  characterMedia = this.createClientResourceRequest(wow.characterMedia.bind(this, 'profile'))
  characterMythicKeystone = this.createClientResourceRequest(wow.characterMythicKeystone.bind(this, 'profile'))
  characterProfessions = this.createClientResourceRequest(wow.characterProfessions.bind(this, 'profile'))
  characterProfile = this.createClientResourceRequest(wow.characterProfile.bind(this, 'profile'))
  characterPVP = this.createClientResourceRequest(wow.characterPVP.bind(this, 'profile'))
  characterQuests = this.createClientResourceRequest(wow.characterQuests.bind(this, 'profile'))
  characterReputations = this.createClientResourceRequest(wow.characterReputations.bind(this, 'profile'))
  characterSoulbinds = this.createClientResourceRequest(wow.characterSoulbinds.bind(this, 'profile'))
  characterSpecializations = this.createClientResourceRequest(wow.characterSpecializations.bind(this, 'profile'))
  characterStatistics = this.createClientResourceRequest(wow.characterStatistics.bind(this, 'profile'))
  characterTitles = this.createClientResourceRequest(wow.characterTitles.bind(this, 'profile'))
  conduit = this.createClientResourceRequest(wow.conduit.bind(this, 'static'))
  commodities = this.createClientResourceRequest(wow.commodities.bind(this, 'dynamic'))
  connectedRealm = this.createClientResourceRequest(wow.connectedRealm.bind(this, 'dynamic'))
  connectedRealmSearch = this.createClientResourceRequest(wow.connectedRealmSearch.bind(this, 'dynamic'))
  covenant = this.createClientResourceRequest(wow.covenant.bind(this, 'static'))
  creature = this.createClientResourceRequest(wow.creature.bind(this, 'static'))
  creatureFamily = this.createClientResourceRequest(wow.creatureFamily.bind(this, 'static'))
  creatureSearch = this.createClientResourceRequest(wow.creatureSearch.bind(this, 'static'))
  creatureType = this.createClientResourceRequest(wow.creatureType.bind(this, 'static'))
  guild = this.createClientResourceRequest(wow.guild.bind(this, 'profile'))
  guildCrest = this.createClientResourceRequest(wow.guildCrest.bind(this, 'static'))
  item = this.createClientResourceRequest(wow.item.bind(this, 'static'))
  itemSearch = this.createClientResourceRequest(wow.itemSearch.bind(this, 'static'))
  journal = this.createClientResourceRequest(wow.journal.bind(this, 'static'))
  mediaSearch = this.createClientResourceRequest(wow.mediaSearch.bind(this, 'static'))
  modifiedCrafting = this.createClientResourceRequest(wow.modifiedCrafting.bind(this, 'static'))
  mount = this.createClientResourceRequest(wow.mount.bind(this, 'static'))
  mountSearch = this.createClientResourceRequest(wow.mountSearch.bind(this, 'static'))
  mythicKeystone = this.createClientResourceRequest(wow.mythicKeystone.bind(this, 'dynamic'))
  mythicKeystoneAffix = this.createClientResourceRequest(wow.mythicKeystoneAffix.bind(this, 'static'))
  mythicKeystoneLeaderboard = this.createClientResourceRequest(wow.mythicKeystoneLeaderboard.bind(this, 'dynamic'))
  mythicRaidLeaderboard = this.createClientResourceRequest(wow.mythicRaidLeaderboard.bind(this, 'dynamic'))
  pet = this.createClientResourceRequest(wow.pet.bind(this, 'static'))
  playableClass = this.createClientResourceRequest(wow.playableClass.bind(this, 'static'))
  playableRace = this.createClientResourceRequest(wow.playableRace.bind(this, 'static'))
  playableSpecialization = this.createClientResourceRequest(wow.playableSpecialization.bind(this, 'static'))
  powerType = this.createClientResourceRequest(wow.powerType.bind(this, 'static'))
  profession = this.createClientResourceRequest(wow.profession.bind(this, 'static'))
  pvpSeason = this.createClientResourceRequest(wow.pvpSeason.bind(this, 'dynamic'))
  pvpTier = this.createClientResourceRequest(wow.pvpTier.bind(this, 'static'))
  quest = this.createClientResourceRequest(wow.quest.bind(this, 'static'))
  realm = this.createClientResourceRequest(wow.realm.bind(this, 'dynamic'))
  realmSearch = this.createClientResourceRequest(wow.realmSearch.bind(this, 'dynamic'))
  recipe = this.createClientResourceRequest(wow.recipe.bind(this, 'static'))
  region = this.createClientResourceRequest(wow.region.bind(this, 'dynamic'))
  reputation = this.createClientResourceRequest(wow.reputation.bind(this, 'static'))
  soulbind = this.createClientResourceRequest(wow.soulbind.bind(this, 'static'))
  spell = this.createClientResourceRequest(wow.spell.bind(this, 'static'))
  spellSearch = this.createClientResourceRequest(wow.spellSearch.bind(this, 'static'))
  talent = this.createClientResourceRequest(wow.talent.bind(this, 'static'))
  techTalent = this.createClientResourceRequest(wow.techTalent.bind(this, 'static'))
  title = this.createClientResourceRequest(wow.title.bind(this, 'static'))
  token = this.createClientResourceRequest(wow.token.bind(this, 'dynamic'))
}
