import { Blizzard } from '../core'
import { ResourceOptions, ResourceResponse } from '../resources'
import * as wow from '../resources/wow'

export class WoW extends Blizzard {
  public accountProfile(args?: ResourceOptions<wow.AccountProfileOptions>): ResourceResponse {
    const [url, config] = this.createClientResourceRequest(wow.accountProfile)(args)

    return this.get(url, config)
  }

  public accountCharacterProfile(args: ResourceOptions<wow.AccountCharacterProfileOptions>): ResourceResponse {
    const [url, config] = this.createClientResourceRequest(wow.accountCharacterProfile)(args)

    return this.get(url, config)
  }

  public accountCollections(args: ResourceOptions<wow.AccountCollectionsOptions>): ResourceResponse {
    const [url, config] = this.createClientResourceRequest(wow.accountCollections)(args)

    return this.get(url, config)
  }

  public characterAchievements(args: ResourceOptions<wow.AccountCharacterAchievementsOptions>): ResourceResponse {
    const [url, config] = this.createClientResourceRequest(wow.characterAchievements)(args)

    return this.get(url, config)
  }

  public characterAppearance(args: ResourceOptions<wow.CharacterAppearanceOptions>): ResourceResponse {
    const [url, config] = this.createClientResourceRequest(wow.characterAppearance)(args)

    return this.get(url, config)
  }

  public characterEncounters(args: ResourceOptions<wow.CharacterEncountersOptions>): ResourceResponse {
    const [url, config] = this.createClientResourceRequest(wow.characterEncounters)(args)

    return this.get(url, config)
  }

  public characterEquipment(args: ResourceOptions<wow.CharacterEquipmentOptions>): ResourceResponse {
    const [url, config] = this.createClientResourceRequest(wow.characterEquipment)(args)

    return this.get(url, config)
  }

  public characterHunterPets(args: ResourceOptions<wow.CharacterHunterPetsOptions>): ResourceResponse {
    const [url, config] = this.createClientResourceRequest(wow.characterHunterPets)(args)

    return this.get(url, config)
  }

  public characterMythicKeystone(args: ResourceOptions<wow.CharacterMythicKeystoneOptions>): ResourceResponse {
    const [url, config] = this.createClientResourceRequest(wow.characterMythicKeystone)(args)

    return this.get(url, config)
  }

  public characterProfessions(args: ResourceOptions<wow.CharacterProfessionsOptions>): ResourceResponse {
    const [url, config] = this.createClientResourceRequest(wow.characterProfessions)(args)

    return this.get(url, config)
  }

  public characterProfile(args: ResourceOptions<wow.CharacterProfileOptions>): ResourceResponse {
    const [url, config] = this.createClientResourceRequest(wow.characterProfile)(args)

    return this.get(url, config)
  }

  public characterPVP(args: ResourceOptions<wow.CharacterPVPOptions>): ResourceResponse {
    const [url, config] = this.createClientResourceRequest(wow.characterPVP)(args)

    return this.get(url, config)
  }

  public characterQuests(args: ResourceOptions<wow.CharacterQuestsOptions>): ResourceResponse {
    const [url, config] = this.createClientResourceRequest(wow.characterQuests)(args)

    return this.get(url, config)
  }

  public characterReputations(args: ResourceOptions<wow.CharacterReputationsOptions>): ResourceResponse {
    const [url, config] = this.createClientResourceRequest(wow.characterReputations)(args)

    return this.get(url, config)
  }

  public characterSoulbinds(args: ResourceOptions<wow.CharacterSoulbindsOptions>): ResourceResponse {
    const [url, config] = this.createClientResourceRequest(wow.characterSoulbinds)(args)

    return this.get(url, config)
  }

  public characterSpecializations(args: ResourceOptions<wow.CharacterSpecializationsOptions>): ResourceResponse {
    const [url, config] = this.createClientResourceRequest(wow.characterSpecializations)(args)

    return this.get(url, config)
  }

  public characterStatistics(args: ResourceOptions<wow.CharacterStatisticsOptions>): ResourceResponse {
    const [url, config] = this.createClientResourceRequest(wow.characterStatistics)(args)

    return this.get(url, config)
  }

  public characterTitles(args: ResourceOptions<wow.CharacterTitlesOptions>): ResourceResponse {
    const [url, config] = this.createClientResourceRequest(wow.characterTitles)(args)

    return this.get(url, config)
  }

  public guild(args: ResourceOptions<wow.GuildOptions>): ResourceResponse {
    const [url, config] = this.createClientResourceRequest(wow.guild)(args)

    return this.get(url, config)
  }
}
