import { Blizzard } from '../core'
import * as ow from '../resources/ow'

export class Overwatch extends Blizzard {
  summary = this.createClientResourceRequest(ow.summary)
  players = this.createClientResourceRequest(ow.players)
  matches = this.createClientResourceRequest(ow.matches)
  segments = this.createClientResourceRequest(ow.segments)
  teams = this.createClientResourceRequest(ow.teams)
}

export type OverwatchClient = Overwatch
