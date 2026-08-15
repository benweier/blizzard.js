import { vi } from 'vitest'

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } })

vi.stubGlobal(
  'fetch',
  vi.fn(async (input: string | URL, init?: RequestInit) => {
    const url = String(input)

    if (url.startsWith('https://us.battle.net/oauth/token')) {
      return json({
        access_token: 'test_token',
        token_type: 'bearer',
        expires_in: 86400, // 1 day in seconds
      })
    }

    if (url.startsWith('https://us.battle.net/oauth/check_token')) {
      const body = String(init?.body)

      if (body.includes('token=expired')) {
        return json({ error: 'invalid_token', error_description: 'Token was not recognised' }, 400)
      }

      return json({
        scope: [],
        exp: body.includes('token=expiring')
          ? (Date.now() + 30000) / 1000 // +30 seconds
          : (Date.now() + 43200000) / 1000, // +12hrs in seconds
        authorities: [{ authority: 'test_authority' }],
        client_id: 'test_id',
      })
    }

    return json({})
  }),
)
