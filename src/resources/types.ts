import { AxiosResponse } from 'axios'
import { ClientOptions } from '../core'

export type ResourceResponse<T = any> = Promise<AxiosResponse<T>>

export interface ResourceInterface<T = any, P = any> {
  (args: ResourceOptions<T>): Resource<P>
}

export interface ProtectedResourceInterface<T = any, P = any> {
  (args: ProtectedResourceOptions<T>): Resource<P>
}

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
