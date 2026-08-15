import type { ClientOptions, ClientResponse } from '../core'

export type ResourceResponse<T = unknown> = Promise<ClientResponse<T>>

export type Resource<T = never> = {
  path: string
  namespace?:
    | 'profile'
    | 'static'
    | 'dynamic'
    | 'static-classic'
    | 'dynamic-classic'
    | 'static-classic1x'
    | 'dynamic-classic1x'
    | 'profile-classic'
    | 'profile-classic1x'
  params?: T
}

export type ResourceOptions<T> = Partial<ClientOptions> & T
export type ProtectedResourceOptions<T> = Partial<ClientOptions> & { token: string } & T
