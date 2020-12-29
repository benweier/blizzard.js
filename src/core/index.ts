import qs from 'querystring'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { getEndpoint, Origins } from '../endpoints'
import { Resource, ResourceInterface, ResourceOptions } from '../resources'

export type ClientOptions = {
  key: string
  secret: string
  token?: AccessTokenResponse
  origin?: Origins
  locale?: string
}

export type AccessTokenResponse = {
  access_token: string
  token_type: string
  expires_in: number
  scope?: string
}

export abstract class Blizzard {
  protected version = 'next'

  protected ua = `Node.js/${process.versions.node} Blizzard.js/${this.version}`

  protected defaults: {
    key: string
    secret: string
    token?: AccessTokenResponse
    origin: Origins
    locale: string
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

  protected axios = axios.create()

  protected createClientResourceRequest<T = any>(fn: ResourceInterface<T>): (args: T) => [string, AxiosRequestConfig] {
    return (args) => {
      const resource = fn(args)
      return this.prepareResourceRequest(resource, args)
    }
  }

  protected prepareResourceRequest(
    resource: Resource<{ [key: string]: string | number | boolean }>,
    args?: Partial<ClientOptions>,
  ): [string, AxiosRequestConfig] {
    const config = { ...this.defaults, ...args }
    const endpoint = getEndpoint(config.origin, config.locale)
    const request: AxiosRequestConfig = {
      headers: {
        'user-agent': this.ua,
        'content-type': 'application/json',
        'battlenet-namespace': `${resource.namespace}-${endpoint.origin}`,
        authorization: `${config.token?.token_type} ${config.token?.access_token}`,
      },
      params: {
        ...resource.params,
        locale: endpoint.locale,
      },
    }

    return [`${endpoint.hostname}/${resource.path}`, request]
  }

  protected get<T extends any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axios.get(url, config)
  }

  protected post<T extends any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axios.post(url, config)
  }

  public setApplicationToken(token: AccessTokenResponse): void {
    this.defaults.token = token
  }

  public getApplicationToken(args?: {
    origin?: string
    key?: string
    secret?: string
  }): Promise<
    AxiosResponse<{
      access_token: string
      token_type: 'bearer'
      expires_in: number
      scope?: string
    }>
  > {
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
    token?: AccessTokenResponse
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

    return this.axios.post(`https://${origin}.battle.net/oauth/check_token`, {
      headers: {
        'user-agent': this.ua,
        'content-type': 'application/x-www-form-urlencoded',
      },
      data: qs.stringify({ token: token?.access_token }),
    })
  }

  public battletag(tag: string): string {
    return tag.replace('#', '-')
  }
}
