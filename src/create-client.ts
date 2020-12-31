import { BlizzardClient, ClientOptions } from './core'

export const createClient = <T extends BlizzardClient>(Client: { new (args: ClientOptions): T }) => async ({
  key,
  secret,
  token,
  origin,
  locale,
}: ClientOptions): Promise<T> => {
  if (!key) throw new Error(`Client missing 'key' parameter`)
  if (!secret) throw new Error(`Client missing 'secret' parameter`)

  const client = new Client({ key, secret, token, origin, locale })

  if (token) {
    const validateTokenRequest = await client.validateApplicationToken()

    if (validateTokenRequest.data.exp * 1000 > Date.now() - 60000) {
      return client
    }
  }

  const getTokenRequest = await client.getApplicationToken()

  client.setApplicationToken(getTokenRequest.data.access_token)

  return client
}
