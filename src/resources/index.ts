import { AxiosResponse } from 'axios'
import { ClientOptions } from '../core'
export * as wow from './wow'

export type ResourceResponse<T = any> = Promise<AxiosResponse<T>>

export interface ResourceInterface<T = any> {
  (args: ResourceOptions<T>): Resource
}

export type Resource<T = never> = {
  path: string
  namespace: 'profile' | 'static' | 'dynamic'
  params?: T
}

export type ResourceOptions<T> = Partial<ClientOptions> & T
