import MockAdapter from 'axios-mock-adapter'

const axios = jest.requireActual('axios')

jest.unmock('axios')

const mockAxios = new MockAdapter(axios)

mockAxios.onPost('https://us.battle.net/oauth/token').reply(200, {
  access_token: 'test_token',
  token_type: 'bearer',
  expires_in: 86400, // 1 day in seconds
})

mockAxios.onPost('https://us.battle.net/oauth/check_token').reply((config) => {
  if (config.data.includes('token=expired')) {
    return [
      400,
      {
        error: 'invalid_token',
        error_description: 'Token was not recognised',
      },
    ]
  }

  if (config.data.includes('token=expiring')) {
    return [
      200,
      {
        scope: [],
        exp: (Date.now() + 30000) / 1000, // +30 seconds
        authorities: [
          {
            authority: 'test_authority',
          },
        ],
        client_id: 'test_id',
      },
    ]
  }

  return [
    200,
    {
      scope: [],
      exp: (Date.now() + 43200000) / 1000, // +12hrs in seconds
      authorities: [
        {
          authority: 'test_authority',
        },
      ],
      client_id: 'test_id',
    },
  ]
})

mockAxios.onAny().reply(200)

export default { ...axios, ...mockAxios }
