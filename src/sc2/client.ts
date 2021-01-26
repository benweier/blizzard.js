import { Blizzard, BlizzardClient } from '../core'
import { ResourceResponse, ResourceOptions } from '../resources'
import * as sc2 from '../resources/sc2'

export interface SC2Client extends BlizzardClient {
  profile<T = any>(args: ResourceOptions<sc2.ProfileOptions>): ResourceResponse<T>
  metadata<T = any>(args: ResourceOptions<sc2.MetaDataOptions>): ResourceResponse<T>
  profileLadder<T = any>(args: ResourceOptions<sc2.ProfileLadderOptions>): ResourceResponse<T>
  ladder<T = any>(args: ResourceOptions<sc2.LadderOptions>): ResourceResponse<T>
  account<T = any>(args: ResourceOptions<sc2.AccountOptions>): ResourceResponse<T>
  legacyProfile<T = any>(args: ResourceOptions<sc2.LegacyProfileOptions>): ResourceResponse<T>
  legacyLadder<T = any>(args: ResourceOptions<sc2.LegacyLadderOptions>): ResourceResponse<T>
  legacyAchievements<T = any>(args: ResourceOptions<sc2.LegacyAchievementsOptions>): ResourceResponse<T>
  legacyRewards<T = any>(args: ResourceOptions<sc2.LegacyRewardsOptions>): ResourceResponse<T>
  league<T = any>(args: ResourceOptions<sc2.LeagueOptions>): ResourceResponse<T>
}

export class SC2 extends Blizzard implements SC2Client {
  profile = this.createClientResourceRequest(sc2.profile)
  metadata = this.createClientResourceRequest(sc2.metadata)
  profileLadder = this.createClientResourceRequest(sc2.profileLadder)
  ladder = this.createClientResourceRequest(sc2.ladder)
  account = this.createClientResourceRequest(sc2.account)
  legacyProfile = this.createClientResourceRequest(sc2.legacyProfile)
  legacyLadder = this.createClientResourceRequest(sc2.legacyLadder)
  legacyAchievements = this.createClientResourceRequest(sc2.legacyAchievements)
  legacyRewards = this.createClientResourceRequest(sc2.legacyRewards)
  league = this.createClientResourceRequest(sc2.league)
}
