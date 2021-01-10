import { Resource } from '.'

/*
 * PROFILE DATA
 */

type CharacterOptions = { realm: string; name: string }

export type AccountProfileOptions = Record<string, unknown>

export const accountProfile = (): Resource => {
  return {
    path: 'profile/user/wow',
    namespace: 'profile',
  }
}

export type AccountCharacterProfileOptions = { realm: number; name: number }

export const accountCharacterProfile = (args: AccountCharacterProfileOptions): Resource => {
  return {
    path: `/profile/user/wow/protected-character/${encodeURIComponent(args.realm)}-${encodeURIComponent(args.name)}`,
    namespace: 'profile',
  }
}

export type AccountCollectionsOptions = { resource?: 'mounts' | 'pets' }

export const accountCollections = (args?: AccountCollectionsOptions): Resource => {
  return {
    path:
      args?.resource === undefined
        ? 'profile/user/wow/collections'
        : `profile/user/wow/collections${encodeURIComponent(args.resource)}`,
    namespace: 'profile',
  }
}

export type AccountCharacterAchievementsOptions = CharacterOptions & { stats?: boolean }

export const characterAchievements = (args: AccountCharacterAchievementsOptions): Resource => {
  return {
    path: args.stats
      ? `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(
          args.name,
        )}/achievements/statistics`
      : `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}/achievements`,
    namespace: 'profile',
  }
}

export type CharacterAppearanceOptions = CharacterOptions

export const characterAppearance = (args: CharacterAppearanceOptions): Resource => {
  return {
    path: `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}/appearance`,
    namespace: 'profile',
  }
}

export type CharacterCollectionsOptions = CharacterOptions & { resource?: 'mounts' | 'pets' }

export const characterCollections = (args: CharacterCollectionsOptions): Resource => {
  return {
    path:
      args.resource === undefined
        ? `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}/collections`
        : `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(
            args.name,
          )}/collections/${encodeURIComponent(args.resource)}`,
    namespace: 'profile',
  }
}

export type CharacterEncountersOptions = CharacterOptions & { resource?: 'dungeons' | 'raids' }

export const characterEncounters = (args: CharacterEncountersOptions): Resource => {
  return {
    path:
      args.resource === undefined
        ? `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}/encounters`
        : `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(
            args.name,
          )}/encounters/${encodeURIComponent(args.resource)}`,
    namespace: 'profile',
  }
}

export type CharacterEquipmentOptions = CharacterOptions

export const characterEquipment = (args: CharacterEquipmentOptions): Resource => {
  return {
    path: `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}/equipment`,
    namespace: 'profile',
  }
}

export type CharacterHunterPetsOptions = CharacterOptions

export const characterHunterPets = (args: CharacterHunterPetsOptions): Resource => {
  return {
    path: `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}/hunter-pets`,
    namespace: 'profile',
  }
}

export type CharacterMediaOptions = CharacterOptions

export const characterMedia = (args: CharacterMediaOptions): Resource => {
  return {
    path: `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}/character-media`,
    namespace: 'profile',
  }
}

export type CharacterMythicKeystoneOptions = CharacterOptions & { season?: number }

export const characterMythicKeystone = (args: CharacterMythicKeystoneOptions): Resource => {
  return {
    path:
      args.season === undefined
        ? `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(
            args.name,
          )}/mythic-keystone-profile`
        : `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(
            args.name,
          )}/mythic-keystone-profile/season/${encodeURIComponent(args.season)}`,
    namespace: 'profile',
  }
}

export type CharacterProfessionsOptions = CharacterOptions

export const characterProfessions = (args: CharacterProfessionsOptions): Resource => {
  return {
    path: `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}/professions`,
    namespace: 'profile',
  }
}

export type CharacterProfileOptions = CharacterOptions & { status?: boolean }

export const characterProfile = (args: CharacterProfileOptions): Resource => {
  return {
    path: args.status
      ? `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}/status`
      : `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}`,
    namespace: 'profile',
  }
}

export type CharacterPVPOptions = CharacterOptions & { bracket?: string }

export const characterPVP = (args: CharacterPVPOptions): Resource => {
  return {
    path:
      args.bracket === undefined
        ? `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}/pvp-summary`
        : `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(
            args.name,
          )}/pvp-bracket/${encodeURIComponent(args.bracket)}`,
    namespace: 'profile',
  }
}

export type CharacterQuestsOptions = CharacterOptions & { completed?: boolean }

export const characterQuests = (args: CharacterQuestsOptions): Resource => {
  return {
    path: args.completed
      ? `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}/quests/completed`
      : `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}/quests`,
    namespace: 'profile',
  }
}

export type CharacterReputationsOptions = CharacterOptions

export const characterReputations = (args: CharacterReputationsOptions): Resource => {
  return {
    path: `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}/reputations`,
    namespace: 'profile',
  }
}

export type CharacterSoulbindsOptions = CharacterOptions

export const characterSoulbinds = (args: CharacterSoulbindsOptions): Resource => {
  return {
    path: `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}/soulbinds`,
    namespace: 'profile',
  }
}

export type CharacterSpecializationsOptions = CharacterOptions

export const characterSpecializations = (args: CharacterSpecializationsOptions): Resource => {
  return {
    path: `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}/specializations`,
    namespace: 'profile',
  }
}

export type CharacterStatisticsOptions = CharacterOptions

export const characterStatistics = (args: CharacterStatisticsOptions): Resource => {
  return {
    path: `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}/statistics`,
    namespace: 'profile',
  }
}

export type CharacterTitlesOptions = CharacterOptions

export const characterTitles = (args: CharacterTitlesOptions): Resource => {
  return {
    path: `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}/titles`,
    namespace: 'profile',
  }
}

export type GuildOptions = { realm: string; name: string; resource?: 'activity' | 'achievements' | 'roster' }

export const guild = (args: GuildOptions): Resource => {
  return {
    path:
      args.resource !== 'activity' && args.resource !== 'achievements' && args.resource !== 'roster'
        ? `data/wow/guild/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}`
        : `data/wow/guild/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}/${encodeURIComponent(
            args.resource,
          )}`,
    namespace: 'profile',
  }
}

/*
 * GAME DATA
 */

export type AchievementOptions = { id?: number; media?: boolean }

export const achievement = (args?: AchievementOptions): Resource => {
  if (args?.id === undefined) {
    return {
      path: 'data/wow/achievement/index',
      namespace: 'static',
    }
  }

  return {
    path: args.media
      ? `data/wow/media/achievement/${encodeURIComponent(args.id)}`
      : `data/wow/achievement/${encodeURIComponent(args.id)}`,
    namespace: 'static',
  }
}

export type AchievementCategoryOptions = { id?: number }

export const achievementCategory = (args?: AchievementCategoryOptions): Resource => {
  if (args?.id === undefined) {
    return {
      path: 'data/wow/achievement-category/index',
      namespace: 'static',
    }
  }

  return {
    path: `data/wow/achievement-category/${encodeURIComponent(args.id)}`,
    namespace: 'static',
  }
}

export type AuctionHouseOptions = { id: number }

export const auctionHouse = (args: AuctionHouseOptions): Resource => {
  return {
    path: `data/wow/connected-realm/${encodeURIComponent(args.id)}/auctions`,
    namespace: 'dynamic',
  }
}

export type AzeriteEssenceOptions = { id?: number; media?: boolean }

export const azeriteEssence = (args?: AzeriteEssenceOptions): Resource => {
  if (args?.id === undefined) {
    return {
      path: 'data/wow/azerite-essence/index',
      namespace: 'static',
    }
  }

  return {
    path: args.media
      ? `data/wow/media/azerite-essence/${encodeURIComponent(args.id)}`
      : `data/wow/azerite-essence/${encodeURIComponent(args.id)}`,
    namespace: 'static',
  }
}

export type AzeriteEssenceSearchOptions = { id?: number; orderby?: string | string[]; page?: number }

export const azeriteEssenceSearch = (
  args: AzeriteEssenceSearchOptions,
): Resource<{ 'allowed_specializations.id'?: number; orderby?: string; _page?: number }> => {
  return {
    path: 'data/wow/search/azerite-essence',
    namespace: 'static',
    params: {
      'allowed_specializations.id': args.id,
      orderby: Array.isArray(args.orderby) ? args.orderby.join(',') : args.orderby,
      _page: args.page,
    },
  }
}

export type ConnectedRealmOptions = { id?: number }

export const connectedRealm = (args?: ConnectedRealmOptions): Resource => {
  if (args?.id === undefined) {
    return {
      path: 'data/wow/connected-realm/index',
      namespace: 'dynamic',
    }
  }

  return {
    path: `data/wow/connected-realm/${encodeURIComponent(args.id)}`,
    namespace: 'dynamic',
  }
}

export type ConnectedRealmSearchOptions = {
  status?: 'UP' | 'DOWN'
  timezone?: string
  orderby?: string | string[]
  page?: number
}

export const connectedRealmSearch = (
  args: ConnectedRealmSearchOptions,
): Resource<{
  'status.type'?: string
  'realms.timezone'?: string
  orderby?: string
  _page?: number
}> => {
  return {
    path: `data/wow/search/connected-realm`,
    namespace: 'dynamic',
    params: {
      'status.type': args.status,
      'realms.timezone': args.timezone,
      orderby: Array.isArray(args.orderby) ? args.orderby.join(',') : args.orderby,
      _page: args.page,
    },
  }
}

export type CovenantOptions = { id: number; media?: boolean }

export const covenant = (args?: CovenantOptions): Resource => {
  if (args?.id === undefined) {
    return {
      path: 'data/wow/covenant/index',
      namespace: 'static',
    }
  }

  return {
    path: args.media
      ? `data/wow/media/covenant/${encodeURIComponent(args.id)}`
      : `data/wow/covenant/${encodeURIComponent(args.id)}`,
    namespace: 'static',
  }
}

export type SoulbindOptions = { id?: number }

export const soulbind = (args?: SoulbindOptions): Resource => {
  if (args?.id === undefined) {
    return {
      path: 'data/wow/soulbind/index',
      namespace: 'static',
    }
  }

  return {
    path: `data/wow/soulbind/${encodeURIComponent(args.id)}`,
    namespace: 'static',
  }
}

export type ConduitOptions = { id?: number }

export const conduit = (args?: ConduitOptions): Resource => {
  if (args?.id === undefined) {
    return {
      path: 'data/wow/conduit/index',
      namespace: 'static',
    }
  }

  return {
    path: `data/wow/conduit/${encodeURIComponent(args.id)}`,
    namespace: 'static',
  }
}

export type CreatureOptions = { id: number; media?: boolean }

export const creature = (args: CreatureOptions): Resource => {
  return {
    path: args.media
      ? `data/wow/media/creature-display/${encodeURIComponent(args.id)}`
      : `data/wow/creature/${encodeURIComponent(args.id)}`,
    namespace: 'static',
  }
}

export type CreatureFamilyOptions = { id?: number; media?: boolean }

export const creatureFamily = (args?: CreatureFamilyOptions): Resource => {
  if (args?.id === undefined) {
    return {
      path: 'data/wow/creature-family/index',
      namespace: 'static',
    }
  }

  return {
    path: args.media
      ? `data/wow/media/creature-family/${encodeURIComponent(args.id)}`
      : `data/wow/creature-family/${encodeURIComponent(args.id)}`,
    namespace: 'static',
  }
}

export type CreatureTypeOptions = { id?: number }

export const creatureType = (args?: CreatureTypeOptions): Resource => {
  if (args?.id === undefined) {
    return {
      path: 'data/wow/creature-type/index',
      namespace: 'static',
    }
  }

  return {
    path: `data/wow/creature-type/${encodeURIComponent(args.id)}`,
    namespace: 'static',
  }
}

export type CreatureSearchOptions = { name?: string; orderby?: string | string[]; page?: number }

export const creatureSearch = (
  args: CreatureSearchOptions,
): Resource<{
  'name.en_US'?: string
  orderby?: string
  _page?: number
}> => {
  return {
    path: 'data/wow/search/creature',
    namespace: 'static',
    params: {
      'name.en_US': args.name,
      orderby: Array.isArray(args.orderby) ? args.orderby.join(',') : args.orderby,
      _page: args.page,
    },
  }
}

export type GuildCrestOptions = { resource: 'border' | 'emblem'; id: number }

export const guildCrest = (args?: GuildCrestOptions): Resource => {
  return {
    path:
      args?.resource === undefined && args?.id == undefined
        ? `data/wow/guild-crest/index`
        : `data/wow/media/guild-crest/${encodeURIComponent(args.resource)}/${encodeURIComponent(args.id)}`,
    namespace: 'static',
  }
}

export type ItemOptions =
  | { resource?: never; id: number; sub?: never; media?: boolean }
  | { resource: 'class'; id?: number; sub?: number; media?: never }
  | { resource: 'set'; id?: number; sub?: never; media?: never }

export const item = (args: ItemOptions): Resource => {
  if (args.resource === 'set') {
    return {
      path: args.id === undefined ? 'data/wow/item-set/index' : `data/wow/item-set/${encodeURIComponent(args.id)}`,
      namespace: 'static',
    }
  }

  if (args.resource === 'class') {
    if (args.id === undefined) {
      return {
        path: 'data/wow/item-class/index',
        namespace: 'static',
      }
    }

    return {
      path:
        args.sub === undefined
          ? `data/wow/item-class/${encodeURIComponent(args.id)}`
          : `data/wow/item-class/${encodeURIComponent(args.id)}/item-subclass/${encodeURIComponent(args.sub)}`,
      namespace: 'static',
    }
  }

  return {
    path: args.media
      ? `data/wow/media/item/${encodeURIComponent(args.id)}`
      : `data/wow/item/${encodeURIComponent(args.id)}`,
    namespace: 'static',
  }
}

export type ItemSearchOptions = { name?: string; orderby?: string | string[]; page?: number }

export const itemSearch = (
  args: ItemSearchOptions,
): Resource<{ 'name.en_US'?: string; orderby?: string; _page?: number }> => {
  const { name, orderby, page } = args

  return {
    path: 'data/wow/search/item',
    namespace: 'static',
    params: { 'name.en_US': name, orderby: Array.isArray(orderby) ? orderby.join(',') : orderby, _page: page },
  }
}

export type JournalOptions =
  | { resource: 'instance'; id?: number; media?: boolean }
  | { resource: 'encounter' | 'expansion'; id?: number; media?: never }

export const journal = (args: JournalOptions): Resource => {
  if (args.id === undefined) {
    return {
      path: `data/wow/journal-${encodeURIComponent(args.resource)}/index`,
      namespace: 'static',
    }
  }

  return {
    path:
      args.resource === 'instance' && args.media
        ? `data/wow/media/journal-${encodeURIComponent(args.resource)}/${encodeURIComponent(args.id)}`
        : `data/wow/journal-${encodeURIComponent(args.resource)}/${encodeURIComponent(args.id)}`,
    namespace: 'static',
  }
}

export type MediaSearchOptions = { tag: string; orderby?: string | string[]; page?: number }

export const mediaSearch = (args: MediaSearchOptions): Resource<{ _tag: string; orderby?: string; _page?: number }> => {
  return {
    path: 'data/wow/search/media',
    namespace: 'static',
    params: {
      _tag: args.tag,
      orderby: Array.isArray(args.orderby) ? args.orderby.join(',') : args.orderby,
      _page: args.page,
    },
  }
}

export type ModifiedCraftingOptions = { resource?: 'category' | 'reagent'; id?: number }

export const modifiedCrafting = (args?: ModifiedCraftingOptions): Resource => {
  if (args?.resource === 'category') {
    return {
      path:
        args?.id === undefined
          ? 'data/wow/modified-crafting/category/index'
          : `data/wow/modified-crafting/category/${encodeURIComponent(args.id)}`,
      namespace: 'static',
    }
  }

  if (args?.resource === 'reagent') {
    return {
      path:
        args?.id === undefined
          ? 'data/wow/modified-crafting/reagent-slot-type/index'
          : `data/wow/modified-crafting/reagent-slot-type/${encodeURIComponent(args.id)}`,
      namespace: 'static',
    }
  }

  return {
    path: 'data/wow/modified-crafting/index',
    namespace: 'static',
  }
}

export type MountOptions = { id?: number }

export const mount = (args?: MountOptions): Resource => {
  if (args?.id === undefined) {
    return {
      path: 'data/wow/mount/index',
      namespace: 'static',
    }
  }

  return {
    path: `data/wow/mount/${encodeURIComponent(args.id)}`,
    namespace: 'static',
  }
}

export type MountSearchOptions = { name?: string; orderby?: string | string[]; page?: number }

export const mountSearch = (
  args: MountSearchOptions,
): Resource<{
  'name.en_US'?: string
  orderby?: string
  _page?: number
}> => {
  return {
    path: 'data/wow/search/mount',
    namespace: 'static',
    params: {
      'name.en_US': args.name,
      orderby: Array.isArray(args.orderby) ? args.orderby.join(',') : args.orderby,
      _page: args.page,
    },
  }
}

export type MythicKeystoneOptions = { resource?: 'dungeon' | 'period' | 'season'; id?: number }

export const mythicKeystone = (args?: MythicKeystoneOptions): Resource => {
  if (args?.resource !== 'dungeon' && args?.resource !== 'period' && args?.resource !== 'season') {
    return {
      path: 'data/wow/mythic-keystone/index',
      namespace: 'dynamic',
    }
  }

  return {
    path:
      args.id === undefined
        ? `data/wow/mythic-keystone/${encodeURIComponent(args.resource)}`
        : `data/wow/mythic-keystone/${encodeURIComponent(args.resource)}/${encodeURIComponent(args.id)}`,
    namespace: 'dynamic',
  }
}

export type MythicKeystoneAffixOptions = { id?: number; media?: boolean }

export const mythicKeystoneAffix = (args?: MythicKeystoneAffixOptions): Resource => {
  if (args?.id === undefined) {
    return {
      path: 'data/wow/keystone-affix/index',
      namespace: 'static',
    }
  }

  return {
    path: args.media
      ? `data/wow/media/keystone-affix/${encodeURIComponent(args.id)}`
      : `data/wow/keystone-affix/${encodeURIComponent(args.id)}`,
    namespace: 'static',
  }
}

export type MythicKeystoneLeaderboardOptions = { realm: number; dungeon?: number; period?: number }

export const mythicKeystoneLeaderboard = (args: MythicKeystoneLeaderboardOptions): Resource => {
  return {
    path:
      args.dungeon === undefined || args.period === undefined
        ? `data/wow/connected-realm/${encodeURIComponent(args.realm)}/mythic-leaderboard/index`
        : `data/wow/connected-realm/${encodeURIComponent(args.realm)}/mythic-leaderboard/${encodeURIComponent(
            args.dungeon,
          )}/period/${encodeURIComponent(args.period)}`,
    namespace: 'dynamic',
  }
}

export type MythicRaidLeaderboardOptions = { raid: string; faction: 'alliance' | 'horde' }

export const mythicRaidLeaderboard = (args: MythicRaidLeaderboardOptions): Resource => {
  return {
    path: `data/wow/leaderboard/hall-of-fame/${encodeURIComponent(args.raid)}/${encodeURIComponent(args.faction)}`,
    namespace: 'dynamic',
  }
}

export type PetOptions = { id?: number; resource?: 'ability'; media?: boolean }

export const pet = (args?: PetOptions): Resource => {
  if (args?.resource === 'ability') {
    if (args?.id === undefined) {
      return {
        path: 'data/wow/pet-ability/index',
        namespace: 'static',
      }
    }

    return {
      path: args?.media
        ? `data/wow/media/pet-ability/${encodeURIComponent(args.id)}`
        : `data/wow/pet-ability/${encodeURIComponent(args.id)}`,
      namespace: 'static',
    }
  }

  if (args?.id === undefined) {
    return {
      path: 'data/wow/pet/index',
      namespace: 'static',
    }
  }

  return {
    path: args?.media
      ? `data/wow/media/pet/${encodeURIComponent(args.id)}`
      : `data/wow/pet/${encodeURIComponent(args.id)}`,
    namespace: 'static',
  }
}

export type PlayableClassOptions = { id?: number; media?: boolean; pvpTalents?: boolean }

export const playableClass = (args?: PlayableClassOptions): Resource => {
  if (args?.id === undefined) {
    return {
      path: `data/wow/playable-class/index`,
      namespace: 'static',
    }
  }

  if (args.pvpTalents) {
    return {
      path: `data/wow/playable-class/${encodeURIComponent(args.id)}/pvp-talent-slots`,
      namespace: 'static',
    }
  }

  return {
    path: args.media
      ? `data/wow/media/playable-class/${encodeURIComponent(args.id)}`
      : `data/wow/playable-class/${encodeURIComponent(args.id)}`,
    namespace: 'static',
  }
}

export type PlayableRaceOptions = { id?: number }

export const playableRace = (args?: PlayableRaceOptions): Resource => {
  return {
    path:
      args?.id === undefined ? 'data/wow/playable-race/index' : `data/wow/playable-race/${encodeURIComponent(args.id)}`,
    namespace: 'static',
  }
}

export type PlayableSpecializationOptions = { id?: number; media?: boolean }

export const playableSpecialization = (args?: PlayableSpecializationOptions): Resource => {
  if (args?.id === undefined) {
    return {
      path: 'data/wow/playable-specialization/index',
      namespace: 'static',
    }
  }

  return {
    path: args.media
      ? `data/wow/media/playable-specialization/${encodeURIComponent(args.id)}`
      : `data/wow/playable-specialization/${encodeURIComponent(args.id)}`,
    namespace: 'static',
  }
}

export type PowerTypeOptions = { id?: number }

export const powerType = (args?: PowerTypeOptions): Resource => {
  return {
    path: args?.id === undefined ? 'data/wow/power-type/index' : `data/wow/power-type/${encodeURIComponent(args.id)}`,
    namespace: 'static',
  }
}

export type ProfessionOptions = { id?: number; media?: boolean; skillTier?: number }

export const profession = (args?: ProfessionOptions): Resource => {
  if (args?.id === undefined) {
    return {
      path: 'data/wow/profession/index',
      namespace: 'static',
    }
  }

  if (args.skillTier !== undefined) {
    return {
      path: `data/wow/profession/${encodeURIComponent(args.id)}/skill-tier/${encodeURIComponent(args.skillTier)}`,
      namespace: 'static',
    }
  }

  return {
    path: args.media
      ? `data/wow/media/profession/${encodeURIComponent(args.id)}`
      : `data/wow/profession/${encodeURIComponent(args.id)}`,
    namespace: 'static',
  }
}

export type RecipeOptions = { id: number; media?: boolean }

export const recipe = (args: RecipeOptions): Resource => {
  return {
    path: args.media
      ? `data/wow/media/recipe/${encodeURIComponent(args.id)}`
      : `data/wow/recipe/${encodeURIComponent(args.id)}`,
    namespace: 'static',
  }
}

export type PVPSeasonOptions =
  | {
      id?: number
      resource?: never
      bracket?: never
    }
  | {
      id?: number
      resource?: 'leaderboard'
      bracket?: string
    }
  | {
      id: number
      resource?: 'reward'
      bracket?: never
    }

export const pvpSeason = (args?: PVPSeasonOptions): Resource => {
  if (args?.id === undefined) {
    return {
      path: 'data/wow/pvp-season/index',
      namespace: 'dynamic',
    }
  }

  if (args.resource === 'leaderboard') {
    return {
      path:
        args.bracket === undefined
          ? `data/wow/pvp-season/${encodeURIComponent(args.id)}/pvp-leaderboard/index`
          : `data/wow/pvp-season/${encodeURIComponent(args.id)}/pvp-leaderboard/${encodeURIComponent(args.bracket)}`,
      namespace: 'dynamic',
    }
  }

  if (args.resource === 'reward') {
    return {
      path: `data/wow/pvp-season/${encodeURIComponent(args.id)}/pvp-reward/index`,
      namespace: 'dynamic',
    }
  }

  return {
    path: `data/wow/pvp-season/${encodeURIComponent(args.id)}`,
    namespace: 'dynamic',
  }
}

export type PVPTierOptions = { id?: number; media?: boolean }

export const pvpTier = (args?: PVPTierOptions): Resource => {
  if (args?.id === undefined) {
    return {
      path: 'data/wow/pvp-tier/index',
      namespace: 'static',
    }
  }

  return {
    path: args.media
      ? `data/wow/media/pvp-tier/${encodeURIComponent(args.id)}`
      : `data/wow/pvp-tier/${encodeURIComponent(args.id)}`,
    namespace: 'static',
  }
}

export type QuestOptions = { id?: number; resource?: 'category' | 'area' | 'type' }

export const quest = (args?: QuestOptions): Resource => {
  if (args?.id === undefined) {
    return {
      path: 'data/wow/quest/index',
      namespace: 'static',
    }
  }

  if (args.resource === 'category' || args.resource === 'area' || args.resource === 'type') {
    return {
      path:
        args.id === undefined
          ? `data/wow/quest/${encodeURIComponent(args.resource)}/index`
          : `data/wow/quest/${encodeURIComponent(args.resource)}/${encodeURIComponent(args.id)}`,
      namespace: 'static',
    }
  }

  return {
    path: `data/wow/quest/${encodeURIComponent(args.id)}`,
    namespace: 'static',
  }
}

export type RealmOptions = { slug?: string }

export const realm = (args?: RealmOptions): Resource => {
  return {
    path: args?.slug === undefined ? 'data/wow/realm/index' : `data/wow/realm/${encodeURIComponent(args.slug)}`,
    namespace: 'dynamic',
  }
}

export type RealmSearchOptions = { timezone?: string; orderby?: string | string[]; page?: number }

export const realmSearch = (
  args: RealmSearchOptions,
): Resource<{
  timezone?: string
  orderby?: string
  _page?: number
}> => {
  return {
    path: 'data/wow/search/realm',
    namespace: 'dynamic',
    params: {
      timezone: args?.timezone,
      orderby: Array.isArray(args?.orderby) ? args.orderby.join(',') : args?.orderby,
      _page: args.page,
    },
  }
}

export type RegionOptions = { id?: number }

export const region = (args?: RegionOptions): Resource => {
  return {
    path: args?.id === undefined ? 'data/wow/region/index' : `data/wow/region/${encodeURIComponent(args.id)}`,
    namespace: 'dynamic',
  }
}

export type ReputationOptions = { resource: 'faction' | 'tier'; id?: number }

export const reputation = (args: ReputationOptions): Resource => {
  return {
    path:
      args.id === undefined
        ? `data/wow/reputation-${encodeURIComponent(args.resource)}/index`
        : `data/wow/reputation-${encodeURIComponent(args.resource)}/${encodeURIComponent(args.id)}`,
    namespace: 'static',
  }
}

export type SpellOptions = { id: number; media?: boolean }

export const spell = (args: SpellOptions): Resource => {
  return {
    path: args.media
      ? `data/wow/media/spell/${encodeURIComponent(args.id)}`
      : `data/wow/spell/${encodeURIComponent(args.id)}`,
    namespace: 'static',
  }
}

export type SpellSearchOptions = { name?: string; orderby?: string | string[]; page?: number }

export const spellSearch = (
  args: SpellSearchOptions,
): Resource<{
  'name.en_US'?: string
  orderby?: string
  _page?: number
}> => {
  return {
    path: `data/wow/search/spell`,
    namespace: 'static',
    params: {
      'name.en_US': args.name,
      orderby: Array.isArray(args.orderby) ? args.orderby.join(',') : args.orderby,
      _page: args.page,
    },
  }
}

export type TalentOptions = { id?: number; pvp?: boolean }

export const talent = (args?: TalentOptions): Resource => {
  if (args?.pvp) {
    return {
      path: args.id === undefined ? 'data/wow/pvp-talent/index' : `data/wow/pvp-talent/${encodeURIComponent(args.id)}`,
      namespace: 'static',
    }
  }

  return {
    path: args?.id === undefined ? 'data/wow/talent/index' : `data/wow/talent/${encodeURIComponent(args.id)}`,
    namespace: 'static',
  }
}

export type TechTalentOptions =
  | { id?: number; tree?: never; media?: boolean }
  | { id?: number; tree?: boolean; media?: never }

export const techTalent = (args?: TechTalentOptions): Resource => {
  if (args?.tree) {
    return {
      path:
        args.id === undefined
          ? 'data/wow/tech-talent-tree/index'
          : `data/wow/tech-talent-tree/${encodeURIComponent(args.id)}`,
      namespace: 'static',
    }
  }

  if (args?.id === undefined) {
    return {
      path: 'data/wow/tech-talent/index',
      namespace: 'static',
    }
  }

  return {
    path: args.media
      ? `data/wow/media/tech-talent/${encodeURIComponent(args.id)}`
      : `data/wow/tech-talent/${encodeURIComponent(args.id)}`,
    namespace: 'static',
  }
}

export type TitleOptions = { id?: number }

export const title = (args?: TitleOptions): Resource => {
  return {
    path: args?.id === undefined ? 'data/wow/title/index' : `data/wow/title/${encodeURIComponent(args.id)}`,
    namespace: 'static',
  }
}

export type TokenOptions = Record<string, unknown>

export const token = (): Resource => {
  return {
    path: 'data/wow/token/index',
    namespace: 'dynamic',
  }
}
