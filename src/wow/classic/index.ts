import { createClient } from '../../create-client'
import { WoWClassic, WoWClassicClient, WoWClassicEra } from './client'

export const createInstance = createClient<WoWClassicClient>(WoWClassic)
export const createEraInstance = createClient<WoWClassicClient>(WoWClassicEra)
export { WoWClassic, WoWClassicEra }
export type { WoWClassicClient }
