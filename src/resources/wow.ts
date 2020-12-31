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

export type AccountCharacterProfileOptions = { realm: number; character: number }

export const accountCharacterProfile = ({ realm, character }: AccountCharacterProfileOptions): Resource => {
  return {
    path: `/profile/user/wow/protected-character/${realm}-${character}`,
    namespace: 'profile',
  }
}

export type AccountCollectionsOptions = { resource?: 'mounts' | 'pets' }

export const accountCollections = ({ resource }: AccountCollectionsOptions = {}): Resource => {
  return {
    path: resource ? `profile/user/wow/collections${resource}` : 'profile/user/wow/collections',
    namespace: 'profile',
  }
}

export type AccountCharacterAchievementsOptions = CharacterOptions & { stats?: boolean }

export const characterAchievements = ({
  realm,
  name,
  stats = false,
}: AccountCharacterAchievementsOptions): Resource => {
  return {
    path: stats
      ? `profile/wow/character/${realm}/${name}/achievements/statistics`
      : `profile/wow/character/${realm}/${name}/achievements`,
    namespace: 'profile',
  }
}

export type CharacterAppearanceOptions = CharacterOptions

export const characterAppearance = ({ realm, name }: CharacterAppearanceOptions): Resource => {
  return {
    path: `profile/wow/character/${realm}/${name}/appearance`,
    namespace: 'profile',
  }
}

export type CharacterCollectionsOptions = CharacterOptions & { resource?: 'mounts' | 'pets' }

export const characterCollections = ({ realm, name, resource }: CharacterCollectionsOptions): Resource => {
  return {
    path:
      resource !== undefined
        ? `profile/wow/character/${realm}/${name}/collections/${resource}`
        : `profile/wow/character/${realm}/${name}/collections`,
    namespace: 'profile',
  }
}

export type CharacterEncountersOptions = CharacterOptions & { resource?: 'dungeons' | 'raids' }

export const characterEncounters = ({ realm, name, resource }: CharacterEncountersOptions): Resource => {
  return {
    path:
      resource !== undefined
        ? `profile/wow/character/${realm}/${name}/encounters/${resource}`
        : `profile/wow/character/${realm}/${name}/encounters`,
    namespace: 'profile',
  }
}

export type CharacterEquipmentOptions = CharacterOptions

export const characterEquipment = ({ realm, name }: CharacterEquipmentOptions): Resource => {
  return {
    path: `profile/wow/character/${realm}/${name}/equipment`,
    namespace: 'profile',
  }
}

export type CharacterHunterPetsOptions = CharacterOptions

export const characterHunterPets = ({ realm, name }: CharacterHunterPetsOptions): Resource => {
  return {
    path: `profile/wow/character/${realm}/${name}/hunter-pets`,
    namespace: 'profile',
  }
}

export type CharacterMediaOptions = CharacterOptions

export const characterMedia = ({ realm, name }: CharacterMediaOptions): Resource => {
  return {
    path: `profile/wow/character/${realm}/${name}/character-media`,
    namespace: 'profile',
  }
}

export type CharacterMythicKeystoneOptions = CharacterOptions & { season?: number }

export const characterMythicKeystone = ({ realm, name, season }: CharacterMythicKeystoneOptions): Resource => {
  return {
    path:
      season !== undefined
        ? `profile/wow/character/${realm}/${name}/mythic-keystone-profile/season/${season}`
        : `profile/wow/character/${realm}/${name}/mythic-keystone-profile`,
    namespace: 'profile',
  }
}

export type CharacterProfessionsOptions = CharacterOptions

export const characterProfessions = ({ realm, name }: CharacterProfessionsOptions): Resource => {
  return {
    path: `profile/wow/character/${realm}/${name}/professions`,
    namespace: 'profile',
  }
}

export type CharacterProfileOptions = CharacterOptions & { status?: boolean }

export const characterProfile = ({ realm, name, status = false }: CharacterProfileOptions): Resource => {
  return {
    path: status ? `profile/wow/character/${realm}/${name}/status` : `profile/wow/character/${realm}/${name}`,
    namespace: 'profile',
  }
}

export type CharacterPVPOptions = CharacterOptions & { bracket?: string }

export const characterPVP = ({ realm, name, bracket }: CharacterPVPOptions): Resource => {
  return {
    path:
      bracket !== undefined
        ? `profile/wow/character/${realm}/${name}/pvp-bracket/${bracket}`
        : `profile/wow/character/${realm}/${name}/pvp-summary`,
    namespace: 'profile',
  }
}

export type CharacterQuestsOptions = CharacterOptions & { completed?: boolean }

export const characterQuests = ({ realm, name, completed }: CharacterQuestsOptions): Resource => {
  return {
    path: completed
      ? `profile/wow/character/${realm}/${name}/quests/completed`
      : `profile/wow/character/${realm}/${name}/quests`,
    namespace: 'profile',
  }
}

export type CharacterReputationsOptions = CharacterOptions

export const characterReputations = ({ realm, name }: CharacterReputationsOptions): Resource => {
  return {
    path: `profile/wow/character/${realm}/${name}/reputations`,
    namespace: 'profile',
  }
}

export type CharacterSoulbindsOptions = CharacterOptions

export const characterSoulbinds = ({ realm, name }: CharacterSoulbindsOptions): Resource => {
  return {
    path: `profile/wow/character/${realm}/${name}/soulbinds`,
    namespace: 'profile',
  }
}

export type CharacterSpecializationsOptions = CharacterOptions

export const characterSpecializations = ({ realm, name }: CharacterSpecializationsOptions): Resource => {
  return {
    path: `profile/wow/character/${realm}/${name}/specializations`,
    namespace: 'profile',
  }
}

export type CharacterStatisticsOptions = CharacterOptions

export const characterStatistics = ({ realm, name }: CharacterStatisticsOptions): Resource => {
  return {
    path: `profile/wow/character/${realm}/${name}/statistics`,
    namespace: 'profile',
  }
}

export type CharacterTitlesOptions = CharacterOptions

export const characterTitles = ({ realm, name }: CharacterTitlesOptions): Resource => {
  return {
    path: `profile/wow/character/${realm}/${name}/titles`,
    namespace: 'profile',
  }
}

export type GuildOptions = { realm: string; name: string; resource?: 'activity' | 'achievements' | 'roster' }

export const guild = ({ realm, name, resource }: GuildOptions): Resource => {
  return {
    path: resource !== undefined ? `data/wow/guild/${realm}/${name}/${resource}` : `data/wow/guild/${realm}/${name}`,
    namespace: 'profile',
  }
}

/*
 * GAME DATA
 */

export type AchievementOptions = { id: number; media?: boolean }

export const achievement = (args?: AchievementOptions): Resource => {
  if (args === undefined) {
    return {
      path: 'data/wow/achievement/index',
      namespace: 'static',
    }
  }

  const { id, media = false } = args

  return media
    ? {
        path: `data/wow/media/achievement/${id}`,
        namespace: 'static',
      }
    : {
        path: `data/wow/achievement/${id}`,
        namespace: 'static',
      }
}

export type AchievementCategoryOptions = { id: number }

export const achievementCategory = (args?: AchievementCategoryOptions): Resource => {
  if (args === undefined) {
    return {
      path: 'data/wow/achievement-category/index',
      namespace: 'static',
    }
  }

  return {
    path: `data/wow/achievement-category/${args.id}`,
    namespace: 'static',
  }
}

export type AuctionHouseOptions = { id: number }

export const auctionHouse = ({ id }: AuctionHouseOptions): Resource => {
  return {
    path: `data/wow/connected-realm/${id}/auctions`,
    namespace: 'dynamic',
  }
}

export type AzeriteEssenceOptions = { id: number; media?: boolean }

export const azeriteEssence = (args: AzeriteEssenceOptions): Resource => {
  if (args === undefined) {
    return {
      path: 'data/wow/azerite-essence/index',
      namespace: 'static',
    }
  }

  const { id, media = false } = args

  return media
    ? {
        path: `data/wow/media/azerite-essence/${id}`,
        namespace: 'static',
      }
    : {
        path: `data/wow/azerite-essence/${id}`,
        namespace: 'static',
      }
}

export type AzeriteEssenceSearchOptions = { id?: number; orderby?: string | string[]; page?: number }

export const azeriteEssenceSearch = ({
  id,
  orderby,
  page,
}: AzeriteEssenceSearchOptions): Resource<{
  'allowed_specializations.id'?: number
  orderby?: string
  _page?: number
}> => {
  return {
    path: 'data/wow/search/azerite-essence',
    namespace: 'static',
    params: {
      'allowed_specializations.id': id,
      orderby: Array.isArray(orderby) ? orderby.join(',') : orderby,
      _page: page,
    },
  }
}

export type ConnectedRealmOptions = { id: number }

export const connectedRealm = (args?: ConnectedRealmOptions): Resource => {
  if (args === undefined) {
    return {
      path: 'data/wow/connected-realm/index',
      namespace: 'dynamic',
    }
  }

  return {
    path: `data/wow/connected-realm/${args.id}`,
    namespace: 'dynamic',
  }
}

export type ConnectedRealmSearchOptions = {
  status?: 'UP' | 'DOWN'
  timezone?: string
  orderby?: string | string[]
  page?: number
}

export const connectedRealmSearch = ({
  status,
  timezone,
  orderby,
  page,
}: ConnectedRealmSearchOptions): Resource<{
  'status.type'?: string
  'realms.timezone'?: string
  orderby?: string
  _page?: number
}> => {
  return {
    path: `data/wow/search/connected-realm`,
    namespace: 'dynamic',
    params: {
      'status.type': status,
      'realms.timezone': timezone,
      orderby: Array.isArray(orderby) ? orderby.join(',') : orderby,
      _page: page,
    },
  }
}

export type CovenantOptions = { id: number; media?: boolean }

export const covenant = (args?: CovenantOptions): Resource => {
  if (args === undefined) {
    return {
      path: 'data/wow/covenant/index',
      namespace: 'static',
    }
  }

  const { id, media = false } = args

  return media
    ? {
        path: `data/wow/media/covenant/${id}`,
        namespace: 'static',
      }
    : {
        path: `data/wow/covenant/${id}`,
        namespace: 'static',
      }
}

export type SoulbindOptions = { id: number }

export const soulbind = (args?: SoulbindOptions): Resource => {
  if (args === undefined) {
    return {
      path: 'data/wow/soulbind/index',
      namespace: 'static',
    }
  }
  return {
    path: `data/wow/soulbind/${args.id}`,
    namespace: 'static',
  }
}

export type ConduitOptions = { id: number }

export const conduit = (args?: ConduitOptions): Resource => {
  if (args === undefined) {
    return {
      path: 'data/wow/conduit/index',
      namespace: 'static',
    }
  }
  return {
    path: `data/wow/conduit/${args.id}`,
    namespace: 'static',
  }
}

export type CreatureOptions = { id: number; media?: boolean }

export const creature = ({ id, media = false }: CreatureOptions): Resource => {
  return media
    ? {
        path: `data/wow/media/creature-display/${id}`,
        namespace: 'static',
      }
    : {
        path: `data/wow/creature/${id}`,
        namespace: 'static',
      }
}

export type CreatureFamilyOptions = { id: number; media?: boolean }

export const creatureFamily = (args?: CreatureFamilyOptions): Resource => {
  if (args === undefined) {
    return {
      path: 'data/wow/creature-family/index',
      namespace: 'static',
    }
  }

  const { id, media = false } = args

  return media
    ? {
        path: `data/wow/media/creature-family/${id}`,
        namespace: 'static',
      }
    : {
        path: `data/wow/creature-family/${id}`,
        namespace: 'static',
      }
}

export type CreatureTypeOptions = { id: number }

export const creatureType = (args?: CreatureTypeOptions): Resource => {
  if (args === undefined) {
    return {
      path: 'data/wow/creature-type/index',
      namespace: 'static',
    }
  }
  return {
    path: `data/wow/creature-type/${args.id}`,
    namespace: 'static',
  }
}

export type CreatureSearchOptions = { name?: string; orderby?: string | string[]; page?: number }

export const creatureSearch = ({
  name,
  orderby,
  page,
}: CreatureSearchOptions): Resource<{
  'name.en_US'?: string
  orderby?: string
  _page?: number
}> => {
  return {
    path: 'data/wow/search/creature',
    namespace: 'static',
    params: {
      'name.en_US': name,
      orderby: Array.isArray(orderby) ? orderby.join(',') : orderby,
      _page: page,
    },
  }
}

export type GuildCrestOptions = Record<string, never> | { resource: 'border' | 'emblem'; id: number }

export const guildCrest = ({ resource, id }: GuildCrestOptions = {}): Resource => {
  return {
    path: resource === undefined ? `data/wow/guild-crest/index` : `data/wow/media/guild-crest/${resource}/${id}`,
    namespace: 'static',
  }
}

export type ItemOptions =
  | { resource: 'item'; id: number; media?: boolean }
  | { resource: 'class'; id?: number; sub?: number }
  | { resource: 'set'; id?: number }

export const item = (args: ItemOptions): Resource => {
  if (args.resource === 'set') {
    return {
      path: args.id === undefined ? 'data/wow/item-set/index' : `data/wow/item-set/${args.id}`,
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
          ? `data/wow/item-class/${args.id}`
          : `data/wow/item-class/${args.id}/item-subclass/${args.sub}`,
      namespace: 'static',
    }
  }

  const { media = false } = args

  return {
    path: media ? `data/wow/media/item/${args.id}` : `data/wow/item/${args.id}`,
    namespace: 'static',
  }
}

export type ItemSearchOptions = { name?: string; orderby?: string | string[]; page?: number }

export const itemSearch = ({
  name,
  orderby,
  page,
}: ItemSearchOptions): Resource<{ 'name.en_US'?: string; orderby?: string; _page?: number }> => {
  return {
    path: 'data/wow/search/item',
    namespace: 'static',
    params: { 'name.en_US': name, orderby: Array.isArray(orderby) ? orderby.join(',') : orderby, _page: page },
  }
}

export type JournalOptions =
  | { resource: 'index' }
  | { resource: 'instance'; id: number; media?: boolean }
  | { resource: 'encounter'; id?: number }
  | { resource: 'expansion'; id?: number }

export const journal = (args: JournalOptions): Resource => {
  if (args.resource === 'encounter') {
    return {
      path: args.id === undefined ? 'data/wow/journal-encounter/index' : `data/wow/journal-encounter/${args.id}`,
      namespace: 'static',
    }
  }

  if (args.resource === 'expansion') {
    return {
      path: args.id === undefined ? 'data/wow/journal-expansion/index' : `data/wow/journal-expansion/${args.id}`,
      namespace: 'static',
    }
  }

  if (args.resource === 'instance') {
    const { media = false } = args

    return {
      path: media ? `data/wow/media/journal-instance/${args.id}` : `data/wow/journal-instance/${args.id}`,
      namespace: 'static',
    }
  }

  return {
    path: 'data/wow/journal-instance/index',
    namespace: 'static',
  }
}

// export const mediaSearch = (): Resource => {
//   return {
//     path: ``,
//     namespace: 'static',
//   }
// }

// export const modifiedCrafting = (): Resource => {
//   return {
//     path: ``,
//     namespace: 'static',
//   }
// }

// export const mount = (): Resource => {
//   return {
//     path: ``,
//     namespace: 'static',
//   }
// }

// export const mythicKeystoneAffix = (): Resource => {
//   return {
//     path: ``,
//     namespace: 'static',
//   }
// }

// export const mythicKeystoneDungeon = (): Resource => {
//   return {
//     path: ``,
//     namespace: 'dynamic',
//   }
// }

// export const mythicKeystoneLeaderboard = (): Resource => {
//   return {
//     path: ``,
//     namespace: 'dynamic',
//   }
// }

// export const mythicRaidLeaderboard = (): Resource => {
//   return {
//     path: ``,
//     namespace: 'dynamic',
//   }
// }

// export const pet = (): Resource => {
//   return {
//     path: ``,
//     namespace: 'static',
//   }
// }

// export const playableClass = (): Resource => {
//   return {
//     path: ``,
//     namespace: 'static',
//   }
// }

// export const playableRace = (): Resource => {
//   return {
//     path: ``,
//     namespace: 'static',
//   }
// }

// export const playableSpecialization = (): Resource => {
//   return {
//     path: ``,
//     namespace: 'static',
//   }
// }

// export const powerType = (): Resource => {
//   return {
//     path: ``,
//     namespace: 'static',
//   }
// }

// export const profession = (): Resource => {
//   return {
//     path: ``,
//     namespace: 'static',
//   }
// }

// export const pvpSeason = (): Resource => {
//   return {
//     path: ``,
//     namespace: 'dynamic',
//   }
// }

// export const pvpTier = (): Resource => {
//   return {
//     path: ``,
//     namespace: 'static',
//   }
// }

// export const quest = (): Resource => {
//   return {
//     path: ``,
//     namespace: 'static',
//   }
// }

// export const realm = (): Resource => {
//   return {
//     path: ``,
//     namespace: 'dynamic',
//   }
// }

// export const region = (): Resource => {
//   return {
//     path: ``,
//     namespace: 'dynamic',
//   }
// }

// export const reputation = (): Resource => {
//   return {
//     path: ``,
//     namespace: 'static',
//   }
// }

// export const spell = (): Resource => {
//   return {
//     path: ``,
//     namespace: 'static',
//   }
// }

// export const talent = (): Resource => {
//   return {
//     path: ``,
//     namespace: 'static',
//   }
// }

// export const techTalent = (): Resource => {
//   return {
//     path: ``,
//     namespace: 'static',
//   }
// }

// export const title = (): Resource => {
//   return {
//     path: ``,
//     namespace: 'static',
//   }
// }

// export const token = (): Resource => {
//   return {
//     path: ``,
//     namespace: 'dynamic',
//   }
// }
