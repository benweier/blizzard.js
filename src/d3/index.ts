import { createClient } from '../create-client'
import { D3 } from './client'

export const createInstance = createClient<D3>(D3)
export { D3 }
