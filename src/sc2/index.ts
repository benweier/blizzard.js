import { createClient } from '../create-client'
import { SC2, SC2Client } from './client'

export const createInstance = createClient<SC2Client>(SC2)
export { SC2 }
export type { SC2Client }
