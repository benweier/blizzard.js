import { BlizzardClient, ClientOptions, AccessToken } from './core'

const tokenExpiryInMilliseconds = (exp: number) => exp * 1000 - 60000
// ponytail: fixed 60s retry, add backoff if Blizzard outages ever matter
const tokenRefreshRetryInMilliseconds = 60000

export const createClient =
  <T extends BlizzardClient>(Client: { new (args: ClientOptions): T }) =>
  async (
    { key, secret, token, origin, locale }: ClientOptions,
    onTokenRefresh: boolean | ((token: AccessToken) => void) = true,
    onTokenRefreshError?: (error: unknown) => void,
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

      client.scheduleTokenRefresh(scheduledTokenRefresh, tokenExpiryInMilliseconds(getTokenRequest.data.expires_in))
    }

    const scheduledTokenRefresh = () => {
      refreshApplicationToken().catch((error) => {
        onTokenRefreshError?.(error)
        client.scheduleTokenRefresh(scheduledTokenRefresh, tokenRefreshRetryInMilliseconds)
      })
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
            client.scheduleTokenRefresh(
              scheduledTokenRefresh,
              tokenExpiryInMilliseconds(validateTokenRequest.data.exp) - Date.now(),
            )
          }
        } catch {
          await refreshApplicationToken()
        }
      }
    }

    return client
  }
