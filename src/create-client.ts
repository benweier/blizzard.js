import { BlizzardClient, ClientOptions, AccessToken } from './core'

const tokenExpiryInMilliseconds = (exp: number) => exp * 1000 - 60000

export const createClient = <T extends BlizzardClient>(Client: { new (args: ClientOptions): T }) => async (
  { key, secret, token, origin, locale }: ClientOptions,
  onTokenRefresh: boolean | ((token: AccessToken) => void) = true,
): Promise<T> => {
  if (!key) throw new Error(`Client missing 'key' parameter`)
  if (!secret) throw new Error(`Client missing 'secret' parameter`)

  const client = new Client({ key, secret, token, origin, locale })

  const refreshApplicationToken = async () => {
    const getTokenRequest = await client.getApplicationToken()

    client.setApplicationToken(getTokenRequest.data.access_token)

    if (typeof onTokenRefresh === 'function') {
      onTokenRefresh(getTokenRequest.data)
    }

    const timeout = setTimeout(refreshApplicationToken, tokenExpiryInMilliseconds(getTokenRequest.data.expires_in))
    timeout.unref()
  }

  if (onTokenRefresh) {
    if (!token) {
      await refreshApplicationToken()
    } else {
      try {
        const validateTokenRequest = await client.validateApplicationToken({ token })

        if (tokenExpiryInMilliseconds(validateTokenRequest.data.exp) - Date.now() < 60000) {
          await refreshApplicationToken()
        } else {
          const timeout = setTimeout(
            refreshApplicationToken,
            tokenExpiryInMilliseconds(validateTokenRequest.data.exp) - Date.now(),
          )
          timeout.unref()
        }
      } catch (err) {
        await refreshApplicationToken()
      }
    }
  }

  return client
}
