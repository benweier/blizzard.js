import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { getEndpoint, Origins } from '../endpoints'

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
}

export abstract class Blizzard {
  protected ua: string

  readonly version: string

  readonly defaults: {
    key: string
    secret: string
    token?: AccessTokenResponse
    origin: Origins
    locale: string
  }

  constructor(args: ClientOptions) {
    const endpoint = getEndpoint(args.origin, args.locale)

    this.version = 'next'
    this.ua = `Node.js/${process.versions.node} Blizzard.js/${this.version}`
    this.defaults = {
      key: args.key,
      secret: args.secret,
      token: args.token,
      origin: endpoint.origin,
      locale: endpoint.locale,
    }

    this.axios.defaults.headers.common['User-Agent'] = this.ua
    this.axios.defaults.headers.common.Authorization = `Basic ${this.defaults.token?.access_token}`
  }

  protected axios = axios.create({
    headers: {
      'Content-Type': 'application/json',
    },
  })

  protected get<T extends unknown>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axios.get(url, config)
  }

  protected post<T extends unknown>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axios.post(url, config)
  }

  public setApplicationToken(token: AccessTokenResponse): void {
    this.defaults.token = token
  }

  public getApplicationToken(args?: { origin?: string; key?: string; secret?: string }): Promise<AxiosResponse> {
    const { origin, key, secret } = { ...this.defaults, ...args }
    const auth = Buffer.from(`${key}:${secret}`).toString('base64')

    return this.post<{
      access_token: string
      token_type: 'bearer'
      expires_in: number
    }>(`https://${origin}.battle.net/oauth/token`, {
      params: { grant_type: 'client_credentials' },
      headers: {
        Authorization: `Basic ${auth}`,
      },
    })
  }

  public validateApplicationToken(args?: {
    origin?: string
    token?: AccessTokenResponse
  }): Promise<
    AxiosResponse<{
      scope: Array<string>
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

    return this.post(`https://${origin}.battle.net/oauth/check_token`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: `token=${token?.access_token}`,
    })
  }

  public battletag(tag: string): string {
    return tag.replace('#', '-')
  }
}
