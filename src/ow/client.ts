import { Blizzard, BlizzardClient, Headers } from '../core'
import { ResourceResponse, ResourceOptions } from '../resources'
import * as ow from '../resources/ow'

export interface OverwatchClient extends BlizzardClient {
  summary<T = any>(args?: null | ResourceOptions<ow.SummaryOptions>, headers?: Headers): ResourceResponse<T>
  players<T = any>(args: ResourceOptions<ow.PlayersOptions>, headers?: Headers): ResourceResponse<T>
  matches<T = any>(args: ResourceOptions<ow.MatchesOptions>, headers?: Headers): ResourceResponse<T>
  segments<T = any>(args: ResourceOptions<ow.SegmentsOptions>, headers?: Headers): ResourceResponse<T>
  teams<T = any>(args: ResourceOptions<ow.TeamsOptions>, headers?: Headers): ResourceResponse<T>
}

export class Overwatch extends Blizzard implements OverwatchClient {
  summary = this.createClientResourceRequest(ow.summary.bind(this))
  players = this.createClientResourceRequest(ow.players.bind(this))
  matches = this.createClientResourceRequest(ow.matches.bind(this))
  segments = this.createClientResourceRequest(ow.segments.bind(this))
  teams = this.createClientResourceRequest(ow.teams.bind(this))
}
