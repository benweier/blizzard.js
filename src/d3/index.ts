import { createClient } from '../create-client'
import { D3, D3Client } from './client'

export const createInstance = createClient<D3Client>(D3)
export { D3 }
export type { D3Client }
