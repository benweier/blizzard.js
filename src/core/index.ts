import { getEndpoint, Locales, Origins } from '../endpoints'
import type { Resource, ResourceResponse } from '../resources'

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

export type TokenValidation = {
  scope?: Array<string>
  exp: number
  authorities: Array<{
    authority: string
  }>
  client_id: string
}

export type Headers = {
  [key: string]: string
}

export type RequestConfig = {
  headers: Headers
  params: { [key: string]: string | number | boolean | undefined }
}

export type ClientResponse<T = unknown> = {
  data: T
  status: number
  statusText: string
  headers: Headers
}

type FirstParameter<F> = F extends (args: infer A, ...rest: never[]) => unknown ? A : never

export type ResourceCall<F extends (args: never) => Resource<unknown>> =
  undefined extends FirstParameter<F>
    ? <T = unknown>(
        args?: null | (Partial<ClientOptions> & NonNullable<FirstParameter<F>>),
        headers?: Headers,
      ) => ResourceResponse<T>
    : <T = unknown>(args: Partial<ClientOptions> & FirstParameter<F>, headers?: Headers) => ResourceResponse<T>

export class ResponseError extends Error {
  public response: ClientResponse

  constructor(response: ClientResponse) {
    super(`Request failed with status code ${response.status}`)
    this.name = 'ResponseError'
    this.response = response
  }
}

export interface BlizzardClient {
  setApplicationToken(token: string): void

  scheduleTokenRefresh(fn: () => void, ms: number): void

  cancelTokenRefresh(): void

  getApplicationToken(args?: { key?: string; secret?: string }): Promise<ClientResponse<AccessToken>>

  refreshApplicationToken(args?: { key?: string; secret?: string }): Promise<ClientResponse<AccessToken>>

  validateApplicationToken(args?: { token?: string }): Promise<ClientResponse<TokenValidation>>
}

declare const __VERSION__: string

export abstract class Blizzard implements BlizzardClient {
  public version = __VERSION__

  public ua = `${typeof process === 'undefined' ? '' : `Node.js/${process.versions.node} `}Blizzard.js/${this.version}`

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

  public createClientResourceRequest<F extends (args: never) => Resource<unknown>>(fn: F): ResourceCall<F>
  public createClientResourceRequest<N, A extends unknown[]>(
    fn: (namespace: N, ...args: A) => Resource<unknown>,
    namespace: N,
  ): ResourceCall<(args: A[0]) => Resource<unknown>>
  public createClientResourceRequest(fn: (...args: any[]) => Resource<any>, namespace?: unknown): any {
    return (args?: null | Partial<ClientOptions>, headers?: Headers) => {
      const resource = namespace === undefined ? fn(args) : fn(namespace, args)
      const [url, config] = this.prepareResourceRequest(resource, args ?? undefined, headers)

      return this.getClientResource(url, config)
    }
  }

  public prepareResourceRequest(
    resource: Resource<{ [key: string]: string | number | boolean }>,
    args?: Partial<ClientOptions>,
    headers?: Headers,
  ): [string, RequestConfig] {
    const config = { ...this.defaults, ...args }
    const endpoint = getEndpoint(config.origin, config.locale)
    const namespace = resource.namespace
      ? { 'Battlenet-Namespace': `${resource.namespace}-${endpoint.origin}` }
      : undefined
    const request: RequestConfig = {
      headers: {
        ...headers,
        'User-Agent': this.ua,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${config.token}`,
        ...namespace,
      },
      params: {
        ...resource.params,
        locale: endpoint.locale,
      },
    }

    return [`${endpoint.hostname}/${resource.path}`, request]
  }

  public getClientResource<T = unknown>(url: string, config: RequestConfig): Promise<ClientResponse<T>> {
    const target = new URL(url)

    for (const [key, value] of Object.entries(config.params)) {
      if (value !== undefined) {
        target.searchParams.set(key, String(value))
      }
    }

    return this.request(target.toString(), { method: 'GET', headers: config.headers })
  }

  private async request<T = unknown>(
    url: string,
    init: { method: string; headers: Headers; body?: URLSearchParams },
  ): Promise<ClientResponse<T>> {
    const response = await fetch(url, init)
    const contentType = response.headers.get('content-type')
    const data = contentType?.includes('application/json') ? await response.json() : await response.text()
    const result: ClientResponse<T> = {
      data: data as T,
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers),
    }

    if (!response.ok) {
      throw new ResponseError(result)
    }

    return result
  }

  public setApplicationToken(token: string): void {
    this.defaults.token = token
  }

  private refreshTimeout?: ReturnType<typeof setTimeout>

  public scheduleTokenRefresh(fn: () => void, ms: number): void {
    this.cancelTokenRefresh()
    this.refreshTimeout = setTimeout(fn, ms)
    this.refreshTimeout.unref?.()
  }

  public cancelTokenRefresh(): void {
    if (this.refreshTimeout) {
      clearTimeout(this.refreshTimeout)
      this.refreshTimeout = undefined
    }
  }

  public getApplicationToken(args?: { key?: string; secret?: string }): Promise<ClientResponse<AccessToken>> {
    const { key, secret } = { ...this.defaults, ...args }

    return this.request<AccessToken>('https://oauth.battle.net/token?grant_type=client_credentials', {
      method: 'POST',
      headers: {
        'User-Agent': this.ua,
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(`${key}:${secret}`)}`,
      },
    })
  }

  public validateApplicationToken(args?: { token?: string }): Promise<ClientResponse<TokenValidation>> {
    const { token } = { ...this.defaults, ...args }

    if (!token) {
      throw new Error('`validateApplicationToken` missing required `token` parameter')
    }

    return this.request<TokenValidation>('https://oauth.battle.net/check_token', {
      method: 'POST',
      headers: {
        'User-Agent': this.ua,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({ token }),
    })
  }

  public async refreshApplicationToken(args?: { key?: string; secret?: string }): Promise<ClientResponse<AccessToken>> {
    const getTokenRequest = await this.getApplicationToken(args)

    this.defaults.token = getTokenRequest.data.access_token

    return getTokenRequest
  }
}
