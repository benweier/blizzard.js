import { Blizzard } from '../core'
import { ProtectedResourceOptions, ResourceResponse } from '../resources'
import * as wow from '../resources/wow'

export class WoW extends Blizzard {
  public accountProfile(args?: ProtectedResourceOptions<wow.AccountProfileOptions>): ResourceResponse {
    const [url, config] = this.createClientResourceRequest(wow.accountProfile)(args)

    return this.get(url, config)
  }

  public accountCharacterProfile(args: ProtectedResourceOptions<wow.AccountCharacterProfileOptions>): ResourceResponse {
    const [url, config] = this.createClientResourceRequest(wow.accountCharacterProfile)(args)

    return this.get(url, config)
  }

  public accountCollections(args: ProtectedResourceOptions<wow.AccountCollectionsOptions>): ResourceResponse {
    const [url, config] = this.createClientResourceRequest(wow.accountCollections)(args)

    return this.get(url, config)
  }

  public characterAchievements(
    args: ProtectedResourceOptions<wow.AccountCharacterAchievementsOptions>,
  ): ResourceResponse {
    const [url, config] = this.createClientResourceRequest(wow.characterAchievements)(args)

    return this.get(url, config)
  }

  public characterAppearance(args: ProtectedResourceOptions<wow.CharacterAppearanceOptions>): ResourceResponse {
    const [url, config] = this.createClientResourceRequest(wow.characterAppearance)(args)

    return this.get(url, config)
  }

  public characterEncounters(args: ProtectedResourceOptions<wow.CharacterEncountersOptions>): ResourceResponse {
    const [url, config] = this.createClientResourceRequest(wow.characterEncounters)(args)

    return this.get(url, config)
  }

  public characterEquipment(args: ProtectedResourceOptions<wow.CharacterEquipmentOptions>): ResourceResponse {
    const [url, config] = this.createClientResourceRequest(wow.characterEquipment)(args)

    return this.get(url, config)
  }

  public characterHunterPets(args: ProtectedResourceOptions<wow.CharacterHunterPetsOptions>): ResourceResponse {
    const [url, config] = this.createClientResourceRequest(wow.characterHunterPets)(args)

    return this.get(url, config)
  }

  public characterMythicKeystone(args: ProtectedResourceOptions<wow.CharacterMythicKeystoneOptions>): ResourceResponse {
    const [url, config] = this.createClientResourceRequest(wow.characterMythicKeystone)(args)

    return this.get(url, config)
  }

  public characterProfessions(args: ProtectedResourceOptions<wow.CharacterProfessionsOptions>): ResourceResponse {
    const [url, config] = this.createClientResourceRequest(wow.characterProfessions)(args)

    return this.get(url, config)
  }

  public characterProfile(args: ProtectedResourceOptions<wow.CharacterProfileOptions>): ResourceResponse {
    const [url, config] = this.createClientResourceRequest(wow.characterProfile)(args)

    return this.get(url, config)
  }

  public characterPVP(args: ProtectedResourceOptions<wow.CharacterPVPOptions>): ResourceResponse {
    const [url, config] = this.createClientResourceRequest(wow.characterPVP)(args)

    return this.get(url, config)
  }

  public characterQuests(args: ProtectedResourceOptions<wow.CharacterQuestsOptions>): ResourceResponse {
    const [url, config] = this.createClientResourceRequest(wow.characterQuests)(args)

    return this.get(url, config)
  }

  public characterReputations(args: ProtectedResourceOptions<wow.CharacterReputationsOptions>): ResourceResponse {
    const [url, config] = this.createClientResourceRequest(wow.characterReputations)(args)

    return this.get(url, config)
  }

  public characterSoulbinds(args: ProtectedResourceOptions<wow.CharacterSoulbindsOptions>): ResourceResponse {
    const [url, config] = this.createClientResourceRequest(wow.characterSoulbinds)(args)

    return this.get(url, config)
  }

  public characterSpecializations(
    args: ProtectedResourceOptions<wow.CharacterSpecializationsOptions>,
  ): ResourceResponse {
    const [url, config] = this.createClientResourceRequest(wow.characterSpecializations)(args)

    return this.get(url, config)
  }

  public characterStatistics(args: ProtectedResourceOptions<wow.CharacterStatisticsOptions>): ResourceResponse {
    const [url, config] = this.createClientResourceRequest(wow.characterStatistics)(args)

    return this.get(url, config)
  }

  public characterTitles(args: ProtectedResourceOptions<wow.CharacterTitlesOptions>): ResourceResponse {
    const [url, config] = this.createClientResourceRequest(wow.characterTitles)(args)

    return this.get(url, config)
  }

  public guild(args: ProtectedResourceOptions<wow.GuildOptions>): ResourceResponse {
    const [url, config] = this.createClientResourceRequest(wow.guild)(args)

    return this.get(url, config)
  }
}
