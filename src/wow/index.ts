import { createClient } from '../create-client'
import { WoW } from './client'

export const createInstance = createClient<WoW>(WoW)
export { WoW }
