import { Resource } from '.'

export type TmpOptions = Record<string, unknown>

export const tmp = (): Resource => {
  return {
    path: '',
  }
}
