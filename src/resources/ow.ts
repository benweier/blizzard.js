import { Resource } from './types'

export type SummaryOptions = Record<string, unknown>

export const summary = (): Resource => {
  return {
    path: `owl/v1/owl2`,
  }
}

export type PlayersOptions = { id: number | string }

export const players = (args: PlayersOptions): Resource => {
  return {
    path: `owl/v1/players/${args.id}`,
  }
}

export type MatchesOptions = { id: number | string }

export const matches = (args: MatchesOptions): Resource => {
  return {
    path: `owl/v1/matches/${args.id}`,
  }
}

export type SegmentsOptions = { id: number | string }

export const segments = (args: SegmentsOptions): Resource => {
  return {
    path: `owl/v1/segments/${args.id}`,
  }
}

export type TeamsOptions = { id: number | string }

export const teams = (args: TeamsOptions): Resource => {
  return {
    path: `owl/v1/teams/${args.id}`,
  }
}
