import { Blizzard } from '../core'
import * as sc2 from '../resources/sc2'

export class SC2 extends Blizzard {
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

export type SC2Client = SC2
