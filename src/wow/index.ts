import { createClient } from '../create-client'
import { WoW, WoWClient } from './client'
export * as classic from './classic'

export const createInstance = createClient<WoWClient>(WoW)
export { WoW }
export type { WoWClient }
