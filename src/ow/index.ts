import { createClient } from '../create-client'
import { Overwatch, OverwatchClient } from './client'

export const createInstance = createClient(Overwatch)
export { Overwatch }
export type { OverwatchClient }
