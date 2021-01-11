import { createClient } from '../create-client'
import { HS, HSClient } from './client'

export const createInstance = createClient<HSClient>(HS)
export { HS }
export type { HSClient }
