import { createClient } from '../create-client'
import { SC2 } from './client'

export const createInstance = createClient<SC2>(SC2)
export { SC2 }
