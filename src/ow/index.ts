import { createClient } from '../create-client'
import { Overwatch, type OverwatchClient } from './client'

export const createInstance = createClient<OverwatchClient>(Overwatch)
export { Overwatch }
export type { OverwatchClient }
