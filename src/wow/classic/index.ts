import { createClient } from '../../create-client'
import { WoWClassic, WoWClassicClient, WoWClassicEra } from './client'

export const createInstance = createClient(WoWClassic)
export const createEraInstance = createClient(WoWClassicEra)
export { WoWClassic, WoWClassicEra }
export type { WoWClassicClient }
