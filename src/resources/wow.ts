import { Resource } from '.'

/*
 * PROFILE DATA
 */

type CharacterOptions = { realm: string; name: string }

export type AccountProfileOptions = Record<string, never>

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

// export const achievment = (): Resource => {
//   return {
//     path: '',
//     namespace: 'static',
//   }
// }

// export const auctionHouse = (): Resource => {
//   return {
//     path: '',
//     namespace: 'dynamic',
//   }
// }

// export const azeriteEssence = (): Resource => {
//   return {
//     path: '',
//     namespace: 'static',
//   }
// }

// export const connectedRealm = (): Resource => {
//   return {
//     path: '',
//     namespace: 'dynamic',
//   }
// }

// export const convenant = (): Resource => {
//   return {
//     path: '',
//     namespace: 'static',
//   }
// }

// export const creature = (): Resource => {
//   return {
//     path: '',
//     namespace: 'static',
//   }
// }

// export const guildCrest = (): Resource => {
//   return {
//     path: '',
//     namespace: 'static',
//   }
// }

// export const item = (): Resource => {
//   return {
//     path: '',
//     namespace: 'static',
//   }
// }

// export const journal = (): Resource => {
//   return {
//     path: '',
//     namespace: 'static',
//   }
// }

// export const mediaSearch = (): Resource => {
//   return {
//     path: '',
//     namespace: 'static',
//   }
// }

// export const modifiedCrafting = (): Resource => {
//   return {
//     path: '',
//     namespace: 'static',
//   }
// }

// export const mount = (): Resource => {
//   return {
//     path: '',
//     namespace: 'static',
//   }
// }

// export const mythicKeystoneAffix = (): Resource => {
//   return {
//     path: '',
//     namespace: 'static',
//   }
// }

// export const mythicKeystoneDungeon = (): Resource => {
//   return {
//     path: '',
//     namespace: 'dynamic',
//   }
// }

// export const mythicKeystoneLeaderboard = (): Resource => {
//   return {
//     path: '',
//     namespace: 'dynamic',
//   }
// }

// export const mythicRaidLeaderboard = (): Resource => {
//   return {
//     path: '',
//     namespace: 'dynamic',
//   }
// }

// export const pet = (): Resource => {
//   return {
//     path: '',
//     namespace: 'static',
//   }
// }

// export const playableClass = (): Resource => {
//   return {
//     path: '',
//     namespace: 'static',
//   }
// }

// export const playableRace = (): Resource => {
//   return {
//     path: '',
//     namespace: 'static',
//   }
// }

// export const playableSpecialization = (): Resource => {
//   return {
//     path: '',
//     namespace: 'static',
//   }
// }

// export const powerType = (): Resource => {
//   return {
//     path: '',
//     namespace: 'static',
//   }
// }

// export const profession = (): Resource => {
//   return {
//     path: '',
//     namespace: 'static',
//   }
// }

// export const pvpSeason = (): Resource => {
//   return {
//     path: '',
//     namespace: 'dynamic',
//   }
// }

// export const pvpTier = (): Resource => {
//   return {
//     path: '',
//     namespace: 'static',
//   }
// }

// export const quest = (): Resource => {
//   return {
//     path: '',
//     namespace: 'static',
//   }
// }

// export const realm = (): Resource => {
//   return {
//     path: '',
//     namespace: 'dynamic',
//   }
// }

// export const region = (): Resource => {
//   return {
//     path: '',
//     namespace: 'dynamic',
//   }
// }

// export const reputation = (): Resource => {
//   return {
//     path: '',
//     namespace: 'static',
//   }
// }

// export const spell = (): Resource => {
//   return {
//     path: '',
//     namespace: 'static',
//   }
// }

// export const talent = (): Resource => {
//   return {
//     path: '',
//     namespace: 'static',
//   }
// }

// export const techTalent = (): Resource => {
//   return {
//     path: '',
//     namespace: 'static',
//   }
// }

// export const title = (): Resource => {
//   return {
//     path: '',
//     namespace: 'static',
//   }
// }

// export const token = (): Resource => {
//   return {
//     path: '',
//     namespace: 'dynamic',
//   }
// }
