/* Compile-time assertions for the derived client method types (never executed). */
import { WoW } from '../src/wow'

declare const wow: WoW

export const assertions = async () => {
  // optional-args methods accept no args, null + headers, and per-call client options
  await wow.achievement()
  await wow.achievement(null, { 'X-Test': 'value' })
  await wow.achievement({ id: 1, origin: 'eu', locale: 'en_GB' })

  // required-args methods enforce their options
  await wow.item({ id: 1 })
  // @ts-expect-error item requires args
  await wow.item()
  // @ts-expect-error realm/name are required
  await wow.characterProfile({ realm: 'proudmoore' })

  // protected endpoints require a per-call token
  await wow.accountProfile({ token: 'token' })
  // @ts-expect-error accountProfile requires a token
  await wow.accountProfile()
  // @ts-expect-error accountCollections requires a token
  await wow.accountCollections({ resource: 'mounts' })

  // per-call response generic
  const response = await wow.item<{ id: number }>({ id: 1 })
  const id: number = response.data.id

  // response data defaults to unknown, not any
  const defaultResponse = await wow.item({ id: 1 })
  // @ts-expect-error data is unknown until a response type is provided
  defaultResponse.data.id

  return id
}
