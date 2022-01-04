import { Blizzard, BlizzardClient, Headers } from '../core'
import { ResourceResponse, ResourceOptions } from '../resources'
import * as sc2 from '../resources/sc2'

export interface SC2Client extends BlizzardClient {
  profile<T = any>(args: ResourceOptions<sc2.ProfileOptions>, headers?: Headers): ResourceResponse<T>
  metadata<T = any>(args: ResourceOptions<sc2.MetaDataOptions>, headers?: Headers): ResourceResponse<T>
  profileLadder<T = any>(args: ResourceOptions<sc2.ProfileLadderOptions>, headers?: Headers): ResourceResponse<T>
  ladder<T = any>(args: ResourceOptions<sc2.LadderOptions>, headers?: Headers): ResourceResponse<T>
  account<T = any>(args: ResourceOptions<sc2.AccountOptions>, headers?: Headers): ResourceResponse<T>
  legacyProfile<T = any>(args: ResourceOptions<sc2.LegacyProfileOptions>, headers?: Headers): ResourceResponse<T>
  legacyLadder<T = any>(args: ResourceOptions<sc2.LegacyLadderOptions>, headers?: Headers): ResourceResponse<T>
  legacyAchievements<T = any>(
    args: ResourceOptions<sc2.LegacyAchievementsOptions>,
    headers?: Headers,
  ): ResourceResponse<T>
  legacyRewards<T = any>(args: ResourceOptions<sc2.LegacyRewardsOptions>, headers?: Headers): ResourceResponse<T>
  league<T = any>(args: ResourceOptions<sc2.LeagueOptions>, headers?: Headers): ResourceResponse<T>
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
