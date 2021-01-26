import { createClient } from '../../create-client'
import { WoWClassic, WoWClassicClient } from './client'

export const createInstance = createClient<WoWClassicClient>(WoWClassic)
export { WoWClassic }
export type { WoWClassicClient }
