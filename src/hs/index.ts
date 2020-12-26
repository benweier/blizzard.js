import { createClient } from '../create-client'
import { HS } from './client'

export const createInstance = createClient<HS>(HS)
export { HS }
