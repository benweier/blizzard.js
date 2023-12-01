import { Locales } from '../endpoints'
import { Resource } from './types'

/*
 * PROFILE DATA
 */

type NamespaceOptions =
  | 'profile'
  | 'static'
  | 'dynamic'
  | 'static-classic'
  | 'dynamic-classic'
  | 'static-classic1x'
  | 'dynamic-classic1x'
type CharacterOptions = { realm: string; name: string }
type SearchOptions = { orderby?: string | string[]; page?: number }
type SearchParams = {
  orderby?: string
  _page?: number
}

export type AccountProfileOptions = Record<string, unknown>

export const accountProfile = (namespace: Extract<NamespaceOptions, 'profile'>): Resource => {
  return {
    path: 'profile/user/wow',
    namespace,
  }
}

export type AccountCharacterProfileOptions = { realm: number; character: number }

export const accountCharacterProfile = (
  namespace: Extract<NamespaceOptions, 'profile'>,
  args: AccountCharacterProfileOptions,
): Resource => {
  return {
    path: `profile/user/wow/protected-character/${encodeURIComponent(args.realm)}-${encodeURIComponent(
      args.character,
    )}`,
    namespace,
  }
}

export type AccountCollectionsOptions = { resource?: 'mounts' | 'pets' }

export const accountCollections = (
  namespace: Extract<NamespaceOptions, 'profile'>,
  args?: null | AccountCollectionsOptions,
): Resource => {
  return {
    path:
      args?.resource === undefined
        ? 'profile/user/wow/collections'
        : `profile/user/wow/collections/${encodeURIComponent(args.resource)}`,
    namespace,
  }
}

export type AccountCharacterAchievementsOptions = CharacterOptions & { stats?: boolean }

export const characterAchievements = (
  namespace: Extract<NamespaceOptions, 'profile'>,
  args: AccountCharacterAchievementsOptions,
): Resource => {
  return {
    path: args.stats
      ? `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(
          args.name,
        )}/achievements/statistics`
      : `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}/achievements`,
    namespace,
  }
}

export type CharacterAppearanceOptions = CharacterOptions

export const characterAppearance = (
  namespace: Extract<NamespaceOptions, 'profile'>,
  args: CharacterAppearanceOptions,
): Resource => {
  return {
    path: `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}/appearance`,
    namespace,
  }
}

export type CharacterCollectionsOptions = CharacterOptions & { resource?: 'mounts' | 'pets' }

export const characterCollections = (
  namespace: Extract<NamespaceOptions, 'profile'>,
  args: CharacterCollectionsOptions,
): Resource => {
  return {
    path:
      args.resource === undefined
        ? `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}/collections`
        : `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(
            args.name,
          )}/collections/${encodeURIComponent(args.resource)}`,
    namespace,
  }
}

export type CharacterEncountersOptions = CharacterOptions & { resource?: 'dungeons' | 'raids' }

export const characterEncounters = (
  namespace: Extract<NamespaceOptions, 'profile'>,
  args: CharacterEncountersOptions,
): Resource => {
  return {
    path:
      args.resource === undefined
        ? `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}/encounters`
        : `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(
            args.name,
          )}/encounters/${encodeURIComponent(args.resource)}`,
    namespace,
  }
}

export type CharacterEquipmentOptions = CharacterOptions

export const characterEquipment = (
  namespace: Extract<NamespaceOptions, 'profile'>,
  args: CharacterEquipmentOptions,
): Resource => {
  return {
    path: `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}/equipment`,
    namespace,
  }
}

export type CharacterHunterPetsOptions = CharacterOptions

export const characterHunterPets = (
  namespace: Extract<NamespaceOptions, 'profile'>,
  args: CharacterHunterPetsOptions,
): Resource => {
  return {
    path: `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}/hunter-pets`,
    namespace,
  }
}

export type CharacterMediaOptions = CharacterOptions

export const characterMedia = (
  namespace: Extract<NamespaceOptions, 'profile'>,
  args: CharacterMediaOptions,
): Resource => {
  return {
    path: `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}/character-media`,
    namespace,
  }
}

export type CharacterMythicKeystoneOptions = CharacterOptions & { season?: number }

export const characterMythicKeystone = (
  namespace: Extract<NamespaceOptions, 'profile'>,
  args: CharacterMythicKeystoneOptions,
): Resource => {
  return {
    path:
      args.season === undefined
        ? `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(
            args.name,
          )}/mythic-keystone-profile`
        : `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(
            args.name,
          )}/mythic-keystone-profile/season/${encodeURIComponent(args.season)}`,
    namespace,
  }
}

export type CharacterProfessionsOptions = CharacterOptions

export const characterProfessions = (
  namespace: Extract<NamespaceOptions, 'profile'>,
  args: CharacterProfessionsOptions,
): Resource => {
  return {
    path: `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}/professions`,
    namespace,
  }
}

export type CharacterProfileOptions = CharacterOptions & { status?: boolean }

export const characterProfile = (
  namespace: Extract<NamespaceOptions, 'profile'>,
  args: CharacterProfileOptions,
): Resource => {
  return {
    path: args.status
      ? `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}/status`
      : `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}`,
    namespace,
  }
}

export type CharacterPVPOptions = CharacterOptions & { bracket?: string }

export const characterPVP = (namespace: Extract<NamespaceOptions, 'profile'>, args: CharacterPVPOptions): Resource => {
  return {
    path:
      args.bracket === undefined
        ? `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}/pvp-summary`
        : `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(
            args.name,
          )}/pvp-bracket/${encodeURIComponent(args.bracket)}`,
    namespace,
  }
}

export type CharacterQuestsOptions = CharacterOptions & { completed?: boolean }

export const characterQuests = (
  namespace: Extract<NamespaceOptions, 'profile'>,
  args: CharacterQuestsOptions,
): Resource => {
  return {
    path: args.completed
      ? `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}/quests/completed`
      : `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}/quests`,
    namespace,
  }
}

export type CharacterReputationsOptions = CharacterOptions

export const characterReputations = (
  namespace: Extract<NamespaceOptions, 'profile'>,
  args: CharacterReputationsOptions,
): Resource => {
  return {
    path: `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}/reputations`,
    namespace,
  }
}

export type CharacterSoulbindsOptions = CharacterOptions

export const characterSoulbinds = (
  namespace: Extract<NamespaceOptions, 'profile'>,
  args: CharacterSoulbindsOptions,
): Resource => {
  return {
    path: `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}/soulbinds`,
    namespace,
  }
}

export type CharacterSpecializationsOptions = CharacterOptions

export const characterSpecializations = (
  namespace: Extract<NamespaceOptions, 'profile'>,
  args: CharacterSpecializationsOptions,
): Resource => {
  return {
    path: `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}/specializations`,
    namespace,
  }
}

export type CharacterStatisticsOptions = CharacterOptions

export const characterStatistics = (
  namespace: Extract<NamespaceOptions, 'profile'>,
  args: CharacterStatisticsOptions,
): Resource => {
  return {
    path: `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}/statistics`,
    namespace,
  }
}

export type CharacterTitlesOptions = CharacterOptions

export const characterTitles = (
  namespace: Extract<NamespaceOptions, 'profile'>,
  args: CharacterTitlesOptions,
): Resource => {
  return {
    path: `profile/wow/character/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}/titles`,
    namespace,
  }
}

export type GuildOptions = { realm: string; name: string; resource?: 'activity' | 'achievements' | 'roster' }

export const guild = (namespace: Extract<NamespaceOptions, 'profile'>, args: GuildOptions): Resource => {
  return {
    path:
      args.resource !== 'activity' && args.resource !== 'achievements' && args.resource !== 'roster'
        ? `data/wow/guild/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}`
        : `data/wow/guild/${encodeURIComponent(args.realm)}/${encodeURIComponent(args.name)}/${encodeURIComponent(
            args.resource,
          )}`,
    namespace,
  }
}

/*
 * GAME DATA
 */

export type AchievementOptions = { id?: number; media?: boolean }

export const achievement = (
  namespace: Extract<NamespaceOptions, 'static'>,
  args?: null | AchievementOptions,
): Resource => {
  if (args?.id === undefined) {
    return {
      path: 'data/wow/achievement/index',
      namespace,
    }
  }

  return {
    path: args.media
      ? `data/wow/media/achievement/${encodeURIComponent(args.id)}`
      : `data/wow/achievement/${encodeURIComponent(args.id)}`,
    namespace,
  }
}

export type AchievementCategoryOptions = { id?: number }

export const achievementCategory = (
  namespace: Extract<NamespaceOptions, 'static'>,
  args?: null | AchievementCategoryOptions,
): Resource => {
  if (args?.id === undefined) {
    return {
      path: 'data/wow/achievement-category/index',
      namespace,
    }
  }

  return {
    path: `data/wow/achievement-category/${encodeURIComponent(args.id)}`,
    namespace,
  }
}

export type AuctionHouseOptions = { id: number }

export const auctionHouse = (namespace: Extract<NamespaceOptions, 'dynamic'>, args: AuctionHouseOptions): Resource => {
  return {
    path: `data/wow/connected-realm/${encodeURIComponent(args.id)}/auctions`,
    namespace,
  }
}

export type AzeriteEssenceOptions = { id?: number; media?: boolean }

export const azeriteEssence = (
  namespace: Extract<NamespaceOptions, 'static'>,
  args?: null | AzeriteEssenceOptions,
): Resource => {
  if (args?.id === undefined) {
    return {
      path: 'data/wow/azerite-essence/index',
      namespace,
    }
  }

  return {
    path: args.media
      ? `data/wow/media/azerite-essence/${encodeURIComponent(args.id)}`
      : `data/wow/azerite-essence/${encodeURIComponent(args.id)}`,
    namespace,
  }
}

export type AzeriteEssenceSearchOptions = SearchOptions & { id: number }

export const azeriteEssenceSearch = (
  namespace: Extract<NamespaceOptions, 'static'>,
  args: AzeriteEssenceSearchOptions,
): Resource<SearchParams & { 'allowed_specializations.id': number }> => {
  return {
    path: 'data/wow/search/azerite-essence',
    namespace,
    params: {
      'allowed_specializations.id': args.id,
      orderby: Array.isArray(args.orderby) ? args.orderby.join(',') : args.orderby,
      _page: args.page,
    },
  }
}

export type CommoditiesOptions = Record<string, unknown>

export const commodities = (namespace: Extract<NamespaceOptions, 'dynamic'>): Resource => {
  return {
    path: `data/wow/auctions/commodities`,
    namespace,
  }
}

export type ConnectedRealmOptions = { id?: number }

export const connectedRealm = (
  namespace: Extract<NamespaceOptions, 'dynamic' | 'dynamic-classic' | 'dynamic-classic1x'>,
  args?: null | ConnectedRealmOptions,
): Resource => {
  if (args?.id === undefined) {
    return {
      path: 'data/wow/connected-realm/index',
      namespace,
    }
  }

  return {
    path: `data/wow/connected-realm/${encodeURIComponent(args.id)}`,
    namespace,
  }
}

export type ConnectedRealmSearchOptions = SearchOptions & { status: 'UP' | 'DOWN'; timezone?: string }

export const connectedRealmSearch = (
  namespace: Extract<NamespaceOptions, 'dynamic' | 'dynamic-classic' | 'dynamic-classic1x'>,
  args: ConnectedRealmSearchOptions,
): Resource<SearchParams & { 'status.type': string; 'realms.timezone'?: string }> => {
  return {
    path: `data/wow/search/connected-realm`,
    namespace,
    params: {
      'status.type': args.status,
      'realms.timezone': args.timezone,
      orderby: Array.isArray(args.orderby) ? args.orderby.join(',') : args.orderby,
      _page: args.page,
    },
  }
}

export type CovenantOptions = { id: number; media?: boolean }

export const covenant = (namespace: Extract<NamespaceOptions, 'static'>, args?: null | CovenantOptions): Resource => {
  if (args?.id === undefined) {
    return {
      path: 'data/wow/covenant/index',
      namespace,
    }
  }

  return {
    path: args.media
      ? `data/wow/media/covenant/${encodeURIComponent(args.id)}`
      : `data/wow/covenant/${encodeURIComponent(args.id)}`,
    namespace,
  }
}

export type SoulbindOptions = { id?: number }

export const soulbind = (namespace: Extract<NamespaceOptions, 'static'>, args?: null | SoulbindOptions): Resource => {
  if (args?.id === undefined) {
    return {
      path: 'data/wow/soulbind/index',
      namespace,
    }
  }

  return {
    path: `data/wow/soulbind/${encodeURIComponent(args.id)}`,
    namespace,
  }
}

export type ConduitOptions = { id?: number }

export const conduit = (namespace: Extract<NamespaceOptions, 'static'>, args?: null | ConduitOptions): Resource => {
  if (args?.id === undefined) {
    return {
      path: 'data/wow/covenant/conduit/index',
      namespace,
    }
  }

  return {
    path: `data/wow/covenant/conduit/${encodeURIComponent(args.id)}`,
    namespace,
  }
}

export type CreatureOptions = { id: number; media?: boolean }

export const creature = (
  namespace: Extract<NamespaceOptions, 'static' | 'static-classic' | 'static-classic1x'>,
  args: CreatureOptions,
): Resource => {
  return {
    path: args.media
      ? `data/wow/media/creature-display/${encodeURIComponent(args.id)}`
      : `data/wow/creature/${encodeURIComponent(args.id)}`,
    namespace,
  }
}

export type CreatureFamilyOptions = { id?: number; media?: boolean }

export const creatureFamily = (
  namespace: Extract<NamespaceOptions, 'static' | 'static-classic' | 'static-classic1x'>,
  args?: null | CreatureFamilyOptions,
): Resource => {
  if (args?.id === undefined) {
    return {
      path: 'data/wow/creature-family/index',
      namespace,
    }
  }

  return {
    path: args.media
      ? `data/wow/media/creature-family/${encodeURIComponent(args.id)}`
      : `data/wow/creature-family/${encodeURIComponent(args.id)}`,
    namespace,
  }
}

export type CreatureTypeOptions = { id?: number }

export const creatureType = (
  namespace: Extract<NamespaceOptions, 'static' | 'static-classic' | 'static-classic1x'>,
  args?: null | CreatureTypeOptions,
): Resource => {
  if (args?.id === undefined) {
    return {
      path: 'data/wow/creature-type/index',
      namespace,
    }
  }

  return {
    path: `data/wow/creature-type/${encodeURIComponent(args.id)}`,
    namespace,
  }
}

export type CreatureSearchOptions<T = string, P = Locales> = SearchOptions & { name: T; locale: P }

export const creatureSearch = <T extends string, P extends Locales>(
  namespace: Extract<NamespaceOptions, 'static' | 'static-classic' | 'static-classic1x'>,
  args: CreatureSearchOptions<T, P>,
): Resource<SearchParams & Record<`name.${P}`, T>> => {
  return {
    path: 'data/wow/search/creature',
    namespace,
    params: {
      [`name.${args.locale}`]: args.name,
      orderby: Array.isArray(args.orderby) ? args.orderby.join(',') : args.orderby,
      _page: args.page,
    } as SearchParams & Record<`name.${P}`, T>,
  }
}

export type GuildCrestOptions = { resource: 'border' | 'emblem'; id: number }

export const guildCrest = (
  namespace: Extract<NamespaceOptions, 'static' | 'static-classic' | 'static-classic1x'>,
  args?: null | GuildCrestOptions,
): Resource => {
  return {
    path:
      args?.resource === undefined && args?.id == undefined
        ? `data/wow/guild-crest/index`
        : `data/wow/media/guild-crest/${encodeURIComponent(args.resource)}/${encodeURIComponent(args.id)}`,
    namespace,
  }
}

export type ItemOptions =
  | { resource?: never; id: number; sub?: never; media?: boolean }
  | { resource: 'class'; id?: number; sub?: number; media?: never }
  | { resource: 'set'; id?: number; sub?: never; media?: never }

export const item = (
  namespace: Extract<NamespaceOptions, 'static' | 'static-classic' | 'static-classic1x'>,
  args: ItemOptions,
): Resource => {
  if (args.resource === 'set') {
    return {
      path: args.id === undefined ? 'data/wow/item-set/index' : `data/wow/item-set/${encodeURIComponent(args.id)}`,
      namespace,
    }
  }

  if (args.resource === 'class') {
    if (args.id === undefined) {
      return {
        path: 'data/wow/item-class/index',
        namespace,
      }
    }

    return {
      path:
        args.sub === undefined
          ? `data/wow/item-class/${encodeURIComponent(args.id)}`
          : `data/wow/item-class/${encodeURIComponent(args.id)}/item-subclass/${encodeURIComponent(args.sub)}`,
      namespace,
    }
  }

  return {
    path: args.media
      ? `data/wow/media/item/${encodeURIComponent(args.id)}`
      : `data/wow/item/${encodeURIComponent(args.id)}`,
    namespace,
  }
}

export type ItemSearchOptions<T = string, P = Locales> = SearchOptions & { name: T; locale: P }

export const itemSearch = <T extends string, P extends Locales>(
  namespace: Extract<NamespaceOptions, 'static' | 'static-classic' | 'static-classic1x'>,
  args: ItemSearchOptions<T, P>,
): Resource<SearchParams & Record<`name.${P}`, T>> => {
  return {
    path: 'data/wow/search/item',
    namespace,
    params: {
      [`name.${args.locale}`]: args.name,
      orderby: Array.isArray(args.orderby) ? args.orderby.join(',') : args.orderby,
      _page: args.page,
    } as SearchParams & Record<`name.${P}`, T>,
  }
}

export type JournalOptions =
  | { resource: 'instance'; id?: number; media?: boolean }
  | { resource: 'encounter' | 'expansion'; id?: number; media?: never }

export const journal = (namespace: Extract<NamespaceOptions, 'static'>, args: JournalOptions): Resource => {
  if (args.id === undefined) {
    return {
      path: `data/wow/journal-${encodeURIComponent(args.resource)}/index`,
      namespace,
    }
  }

  return {
    path:
      args.resource === 'instance' && args.media
        ? `data/wow/media/journal-${encodeURIComponent(args.resource)}/${encodeURIComponent(args.id)}`
        : `data/wow/journal-${encodeURIComponent(args.resource)}/${encodeURIComponent(args.id)}`,
    namespace,
  }
}

export type MediaSearchOptions = SearchOptions & { tag: string }

export const mediaSearch = (
  namespace: Extract<NamespaceOptions, 'static' | 'static-classic' | 'static-classic1x'>,
  args: MediaSearchOptions,
): Resource<SearchParams & { _tag: string }> => {
  return {
    path: 'data/wow/search/media',
    namespace,
    params: {
      _tag: args.tag,
      orderby: Array.isArray(args.orderby) ? args.orderby.join(',') : args.orderby,
      _page: args.page,
    },
  }
}

export type ModifiedCraftingOptions = { resource?: 'category' | 'reagent'; id?: number }

export const modifiedCrafting = (
  namespace: Extract<NamespaceOptions, 'static'>,
  args?: null | ModifiedCraftingOptions,
): Resource => {
  if (args?.resource === 'category') {
    return {
      path:
        args?.id === undefined
          ? 'data/wow/modified-crafting/category/index'
          : `data/wow/modified-crafting/category/${encodeURIComponent(args.id)}`,
      namespace,
    }
  }

  if (args?.resource === 'reagent') {
    return {
      path:
        args?.id === undefined
          ? 'data/wow/modified-crafting/reagent-slot-type/index'
          : `data/wow/modified-crafting/reagent-slot-type/${encodeURIComponent(args.id)}`,
      namespace,
    }
  }

  return {
    path: 'data/wow/modified-crafting/index',
    namespace,
  }
}

export type MountOptions = { id?: number }

export const mount = (namespace: Extract<NamespaceOptions, 'static'>, args?: null | MountOptions): Resource => {
  if (args?.id === undefined) {
    return {
      path: 'data/wow/mount/index',
      namespace,
    }
  }

  return {
    path: `data/wow/mount/${encodeURIComponent(args.id)}`,
    namespace,
  }
}

export type MountSearchOptions<T = string, P = Locales> = SearchOptions & { name: T; locale: P }

export const mountSearch = <T extends string, P extends Locales>(
  namespace: Extract<NamespaceOptions, 'static'>,
  args: MountSearchOptions<T, P>,
): Resource<SearchParams & Record<`name.${P}`, T>> => {
  return {
    path: 'data/wow/search/mount',
    namespace,
    params: {
      [`name.${args.locale}`]: args.name,
      orderby: Array.isArray(args.orderby) ? args.orderby.join(',') : args.orderby,
      _page: args.page,
    } as SearchParams & Record<`name.${P}`, T>,
  }
}

export type MythicKeystoneOptions = { resource?: 'dungeon' | 'period' | 'season'; id?: number }

export const mythicKeystone = (
  namespace: Extract<NamespaceOptions, 'dynamic'>,
  args?: null | MythicKeystoneOptions,
): Resource => {
  if (args?.resource !== 'dungeon' && args?.resource !== 'period' && args?.resource !== 'season') {
    return {
      path: 'data/wow/mythic-keystone/index',
      namespace,
    }
  }

  return {
    path:
      args.id === undefined
        ? `data/wow/mythic-keystone/${encodeURIComponent(args.resource)}/index`
        : `data/wow/mythic-keystone/${encodeURIComponent(args.resource)}/${encodeURIComponent(args.id)}`,
    namespace,
  }
}

export type MythicKeystoneAffixOptions = { id?: number; media?: boolean }

export const mythicKeystoneAffix = (
  namespace: Extract<NamespaceOptions, 'static'>,
  args?: null | MythicKeystoneAffixOptions,
): Resource => {
  if (args?.id === undefined) {
    return {
      path: 'data/wow/keystone-affix/index',
      namespace,
    }
  }

  return {
    path: args.media
      ? `data/wow/media/keystone-affix/${encodeURIComponent(args.id)}`
      : `data/wow/keystone-affix/${encodeURIComponent(args.id)}`,
    namespace,
  }
}

export type MythicKeystoneLeaderboardOptions = { realm: number; dungeon?: number; period?: number }

export const mythicKeystoneLeaderboard = (
  namespace: Extract<NamespaceOptions, 'dynamic'>,
  args: MythicKeystoneLeaderboardOptions,
): Resource => {
  return {
    path:
      args.dungeon === undefined || args.period === undefined
        ? `data/wow/connected-realm/${encodeURIComponent(args.realm)}/mythic-leaderboard/index`
        : `data/wow/connected-realm/${encodeURIComponent(args.realm)}/mythic-leaderboard/${encodeURIComponent(
            args.dungeon,
          )}/period/${encodeURIComponent(args.period)}`,
    namespace,
  }
}

export type MythicRaidLeaderboardOptions = { raid: string; faction: 'alliance' | 'horde' }

export const mythicRaidLeaderboard = (
  namespace: Extract<NamespaceOptions, 'dynamic'>,
  args: MythicRaidLeaderboardOptions,
): Resource => {
  return {
    path: `data/wow/leaderboard/hall-of-fame/${encodeURIComponent(args.raid)}/${encodeURIComponent(args.faction)}`,
    namespace,
  }
}

export type PetOptions = { id?: number; resource?: 'ability'; media?: boolean }

export const pet = (namespace: Extract<NamespaceOptions, 'static'>, args?: null | PetOptions): Resource => {
  if (args?.resource === 'ability') {
    if (args?.id === undefined) {
      return {
        path: 'data/wow/pet-ability/index',
        namespace,
      }
    }

    return {
      path: args?.media
        ? `data/wow/media/pet-ability/${encodeURIComponent(args.id)}`
        : `data/wow/pet-ability/${encodeURIComponent(args.id)}`,
      namespace,
    }
  }

  if (args?.id === undefined) {
    return {
      path: 'data/wow/pet/index',
      namespace,
    }
  }

  return {
    path: args?.media
      ? `data/wow/media/pet/${encodeURIComponent(args.id)}`
      : `data/wow/pet/${encodeURIComponent(args.id)}`,
    namespace,
  }
}

export type PlayableClassOptions = { id?: number; media?: boolean; pvpTalents?: boolean }

export const playableClass = (
  namespace: Extract<NamespaceOptions, 'static' | 'static-classic' | 'static-classic1x'>,
  args?: null | PlayableClassOptions,
): Resource => {
  if (args?.id === undefined) {
    return {
      path: `data/wow/playable-class/index`,
      namespace,
    }
  }

  if (args.pvpTalents) {
    return {
      path: `data/wow/playable-class/${encodeURIComponent(args.id)}/pvp-talent-slots`,
      namespace,
    }
  }

  return {
    path: args.media
      ? `data/wow/media/playable-class/${encodeURIComponent(args.id)}`
      : `data/wow/playable-class/${encodeURIComponent(args.id)}`,
    namespace,
  }
}

export type PlayableRaceOptions = { id?: number }

export const playableRace = (
  namespace: Extract<NamespaceOptions, 'static' | 'static-classic' | 'static-classic1x'>,
  args?: null | PlayableRaceOptions,
): Resource => {
  return {
    path:
      args?.id === undefined ? 'data/wow/playable-race/index' : `data/wow/playable-race/${encodeURIComponent(args.id)}`,
    namespace,
  }
}

export type PlayableSpecializationOptions = { id?: number; media?: boolean }

export const playableSpecialization = (
  namespace: Extract<NamespaceOptions, 'static'>,
  args?: null | PlayableSpecializationOptions,
): Resource => {
  if (args?.id === undefined) {
    return {
      path: 'data/wow/playable-specialization/index',
      namespace,
    }
  }

  return {
    path: args.media
      ? `data/wow/media/playable-specialization/${encodeURIComponent(args.id)}`
      : `data/wow/playable-specialization/${encodeURIComponent(args.id)}`,
    namespace,
  }
}

export type PowerTypeOptions = { id?: number }

export const powerType = (
  namespace: Extract<NamespaceOptions, 'static' | 'static-classic' | 'static-classic1x'>,
  args?: null | PowerTypeOptions,
): Resource => {
  return {
    path: args?.id === undefined ? 'data/wow/power-type/index' : `data/wow/power-type/${encodeURIComponent(args.id)}`,
    namespace,
  }
}

export type ProfessionOptions = { id?: number; media?: boolean; skillTier?: number }

export const profession = (
  namespace: Extract<NamespaceOptions, 'static'>,
  args?: null | ProfessionOptions,
): Resource => {
  if (args?.id === undefined) {
    return {
      path: 'data/wow/profession/index',
      namespace,
    }
  }

  if (args.skillTier !== undefined) {
    return {
      path: `data/wow/profession/${encodeURIComponent(args.id)}/skill-tier/${encodeURIComponent(args.skillTier)}`,
      namespace,
    }
  }

  return {
    path: args.media
      ? `data/wow/media/profession/${encodeURIComponent(args.id)}`
      : `data/wow/profession/${encodeURIComponent(args.id)}`,
    namespace,
  }
}

export type RecipeOptions = { id: number; media?: boolean }

export const recipe = (namespace: Extract<NamespaceOptions, 'static'>, args: RecipeOptions): Resource => {
  return {
    path: args.media
      ? `data/wow/media/recipe/${encodeURIComponent(args.id)}`
      : `data/wow/recipe/${encodeURIComponent(args.id)}`,
    namespace,
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

export const pvpSeason = (
  namespace: Extract<NamespaceOptions, 'dynamic'>,
  args?: null | PVPSeasonOptions,
): Resource => {
  if (args?.id === undefined) {
    return {
      path: 'data/wow/pvp-season/index',
      namespace,
    }
  }

  if (args.resource === 'leaderboard') {
    return {
      path:
        args.bracket === undefined
          ? `data/wow/pvp-season/${encodeURIComponent(args.id)}/pvp-leaderboard/index`
          : `data/wow/pvp-season/${encodeURIComponent(args.id)}/pvp-leaderboard/${encodeURIComponent(args.bracket)}`,
      namespace,
    }
  }

  if (args.resource === 'reward') {
    return {
      path: `data/wow/pvp-season/${encodeURIComponent(args.id)}/pvp-reward/index`,
      namespace,
    }
  }

  return {
    path: `data/wow/pvp-season/${encodeURIComponent(args.id)}`,
    namespace,
  }
}

export type PVPTierOptions = { id?: number; media?: boolean }

export const pvpTier = (namespace: Extract<NamespaceOptions, 'static'>, args?: null | PVPTierOptions): Resource => {
  if (args?.id === undefined) {
    return {
      path: 'data/wow/pvp-tier/index',
      namespace,
    }
  }

  return {
    path: args.media
      ? `data/wow/media/pvp-tier/${encodeURIComponent(args.id)}`
      : `data/wow/pvp-tier/${encodeURIComponent(args.id)}`,
    namespace,
  }
}

export type QuestOptions = { id?: number; resource?: 'category' | 'area' | 'type' }

export const quest = (namespace: Extract<NamespaceOptions, 'static'>, args?: null | QuestOptions): Resource => {
  if (args?.resource === 'category' || args?.resource === 'area' || args?.resource === 'type') {
    return {
      path:
        args.id === undefined
          ? `data/wow/quest/${encodeURIComponent(args.resource)}/index`
          : `data/wow/quest/${encodeURIComponent(args.resource)}/${encodeURIComponent(args.id)}`,
      namespace,
    }
  }

  if (args?.id === undefined) {
    return {
      path: 'data/wow/quest/index',
      namespace,
    }
  }

  return {
    path: `data/wow/quest/${encodeURIComponent(args.id)}`,
    namespace,
  }
}

export type RealmOptions = { slug?: string }

export const realm = (
  namespace: Extract<NamespaceOptions, 'dynamic' | 'dynamic-classic' | 'dynamic-classic1x'>,
  args?: null | RealmOptions,
): Resource => {
  return {
    path: args?.slug === undefined ? 'data/wow/realm/index' : `data/wow/realm/${encodeURIComponent(args.slug)}`,
    namespace,
  }
}

export type RealmSearchOptions = SearchOptions & { timezone?: string }

export const realmSearch = (
  namespace: Extract<NamespaceOptions, 'dynamic' | 'dynamic-classic' | 'dynamic-classic1x'>,
  args: RealmSearchOptions,
): Resource<SearchParams & { timezone?: string }> => {
  return {
    path: 'data/wow/search/realm',
    namespace,
    params: {
      timezone: args?.timezone,
      orderby: Array.isArray(args?.orderby) ? args.orderby.join(',') : args?.orderby,
      _page: args.page,
    },
  }
}

export type RegionOptions = { id?: number }

export const region = (
  namespace: Extract<NamespaceOptions, 'dynamic' | 'dynamic-classic' | 'dynamic-classic1x'>,
  args?: null | RegionOptions,
): Resource => {
  return {
    path: args?.id === undefined ? 'data/wow/region/index' : `data/wow/region/${encodeURIComponent(args.id)}`,
    namespace,
  }
}

export type ReputationOptions = { resource: 'faction' | 'tier'; id?: number }

export const reputation = (namespace: Extract<NamespaceOptions, 'static'>, args: ReputationOptions): Resource => {
  return {
    path:
      args.id === undefined
        ? `data/wow/reputation-${encodeURIComponent(args.resource)}/index`
        : `data/wow/reputation-${encodeURIComponent(args.resource)}/${encodeURIComponent(args.id)}`,
    namespace,
  }
}

export type SpellOptions = { id: number; media?: boolean }

export const spell = (namespace: Extract<NamespaceOptions, 'static'>, args: SpellOptions): Resource => {
  return {
    path: args.media
      ? `data/wow/media/spell/${encodeURIComponent(args.id)}`
      : `data/wow/spell/${encodeURIComponent(args.id)}`,
    namespace,
  }
}

export type SpellSearchOptions<T = string, P = Locales> = SearchOptions & { name: T; locale: P }

export const spellSearch = <T extends string, P extends Locales>(
  namespace: Extract<NamespaceOptions, 'static'>,
  args: SpellSearchOptions<T, P>,
): Resource<SearchParams & Record<`name.${P}`, T>> => {
  return {
    path: `data/wow/search/spell`,
    namespace,
    params: {
      [`name.${args.locale}`]: args.name,
      orderby: Array.isArray(args.orderby) ? args.orderby.join(',') : args.orderby,
      _page: args.page,
    } as SearchParams & Record<`name.${P}`, T>,
  }
}

export type TalentOptions = { id?: number; pvp?: boolean }

export const talent = (namespace: Extract<NamespaceOptions, 'static'>, args?: null | TalentOptions): Resource => {
  if (args?.pvp) {
    return {
      path: args.id === undefined ? 'data/wow/pvp-talent/index' : `data/wow/pvp-talent/${encodeURIComponent(args.id)}`,
      namespace,
    }
  }

  return {
    path: args?.id === undefined ? 'data/wow/talent/index' : `data/wow/talent/${encodeURIComponent(args.id)}`,
    namespace,
  }
}

export type TechTalentOptions =
  | { id?: number; tree?: never; media?: boolean }
  | { id?: number; tree?: boolean; media?: never }

export const techTalent = (
  namespace: Extract<NamespaceOptions, 'static'>,
  args?: null | TechTalentOptions,
): Resource => {
  if (args?.tree) {
    return {
      path:
        args.id === undefined
          ? 'data/wow/tech-talent-tree/index'
          : `data/wow/tech-talent-tree/${encodeURIComponent(args.id)}`,
      namespace,
    }
  }

  if (args?.id === undefined) {
    return {
      path: 'data/wow/tech-talent/index',
      namespace,
    }
  }

  return {
    path: args.media
      ? `data/wow/media/tech-talent/${encodeURIComponent(args.id)}`
      : `data/wow/tech-talent/${encodeURIComponent(args.id)}`,
    namespace,
  }
}

export type TitleOptions = { id?: number }

export const title = (namespace: Extract<NamespaceOptions, 'static'>, args?: null | TitleOptions): Resource => {
  return {
    path: args?.id === undefined ? 'data/wow/title/index' : `data/wow/title/${encodeURIComponent(args.id)}`,
    namespace,
  }
}

export type TokenOptions = Record<string, unknown>

export const token = (
  namespace: Extract<NamespaceOptions, 'dynamic' | 'dynamic-classic' | 'dynamic-classic1x'>,
): Resource => {
  return {
    path: 'data/wow/token/index',
    namespace,
  }
}
