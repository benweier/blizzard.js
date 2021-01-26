import qs from 'querystring'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { getEndpoint, Locales, Origins } from '../endpoints'
import { Resource, ResourceInterface, ResourceResponse } from '../resources'

export type ClientOptions = {
  key: string
  secret: string
  token?: string
  origin?: Origins
  locale?: Locales
}

export type AccessToken = {
  access_token: string
  token_type: 'bearer'
  expires_in: number
  scope?: string
}

export interface BlizzardClient {
  setApplicationToken(token: string): void

  getApplicationToken(args?: { origin?: string; key?: string; secret?: string }): Promise<AxiosResponse<AccessToken>>

  refreshApplicationToken(args?: {
    origin?: string
    key?: string
    secret?: string
  }): Promise<AxiosResponse<AccessToken>>

  validateApplicationToken(args?: {
    origin?: string
    token?: string
  }): Promise<
    AxiosResponse<{
      scope?: Array<string>
      exp: number
      authorities: Array<{
        authority: string
      }>
      client_id: string
    }>
  >
}

export abstract class Blizzard implements BlizzardClient {
  public version = '4.0.0'

  public ua = `Node.js/${process.versions.node} Blizzard.js/${this.version}`

  public defaults: {
    key: string
    secret: string
    token?: string
    origin: Origins
    locale: Locales
  }

  constructor(args: ClientOptions) {
    const { origin, locale } = getEndpoint(args.origin, args.locale)

    this.defaults = {
      key: args.key,
      secret: args.secret,
      token: args.token,
      origin,
      locale,
    }
  }

  public axios = axios.create()

  public createClientResourceRequest<T = any>(fn: ResourceInterface<T>): (args: T) => ResourceResponse {
    return (args) => {
      const resource = fn(args)
      const [url, config] = this.prepareResourceRequest(resource, args)

      return this.getClientResource(url, config)
    }
  }

  public prepareResourceRequest(
    resource: Resource<{ [key: string]: string | number | boolean }>,
    args?: Partial<ClientOptions>,
  ): [string, AxiosRequestConfig] {
    const config = { ...this.defaults, ...args }
    const endpoint = getEndpoint(config.origin, config.locale)
    const namespace = resource.namespace ? { 'Battlenet-Namespace': `${resource.namespace}-${endpoint.origin}` } : {}
    const request: AxiosRequestConfig = {
      headers: {
        'User-Agent': this.ua,
        'Content-Type': 'application/json',
        Authorization: `bearer ${config.token}`,
        ...namespace,
      },
      params: {
        ...resource.params,
        locale: endpoint.locale,
      },
    }

    return [`${endpoint.hostname}/${resource.path}`, request]
  }

  public getClientResource<T extends any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axios.get(url, config)
  }

  public setApplicationToken(token: string): void {
    this.defaults.token = token
  }

  public getApplicationToken(args?: {
    origin?: string
    key?: string
    secret?: string
  }): Promise<AxiosResponse<AccessToken>> {
    const { origin, key, secret } = { ...this.defaults, ...args }

    return this.axios.get(`https://${origin}.battle.net/oauth/token`, {
      params: { grant_type: 'client_credentials' },
      auth: {
        username: key,
        password: secret,
      },
      headers: {
        'user-agent': this.ua,
        'content-type': 'application/json',
      },
    })
  }

  public validateApplicationToken(args?: {
    origin?: string
    token?: string
  }): Promise<
    AxiosResponse<{
      scope?: Array<string>
      exp: number
      authorities: Array<{
        authority: string
      }>
      client_id: string
    }>
  > {
    const { origin, token } = { ...this.defaults, ...args }

    if (!token) {
      throw new Error('`validateApplicationToken` missing required `token` parameter')
    }

    return this.axios.post(`https://${origin}.battle.net/oauth/check_token`, qs.stringify({ token }), {
      headers: {
        'User-Agent': this.ua,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
  }

  public async refreshApplicationToken(args?: {
    origin?: string
    key?: string
    secret?: string
  }): Promise<AxiosResponse<AccessToken>> {
    const getTokenRequest = await this.getApplicationToken(args)

    this.defaults.token = getTokenRequest.data.access_token

    return getTokenRequest
  }
}
