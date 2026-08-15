import { createClient } from '../create-client'
import { HS, HSClient } from './client'

export const createInstance = createClient(HS)
export { HS }
export type { HSClient }
