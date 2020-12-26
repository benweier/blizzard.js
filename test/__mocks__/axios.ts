import MockAdapter from 'axios-mock-adapter'

const axios = jest.requireActual('axios')

jest.unmock('axios')

const mockAxios = new MockAdapter(axios)

mockAxios.onPost('https://us.battle.net/oauth/token').reply(200, {
  access_token: 'test_token',
  token_type: 'bearer',
  expires_in: 9999999999,
})

mockAxios.onPost('https://us.battle.net/oauth/check_token').reply(200, {
  scope: [],
  exp: 9999999999,
  authorities: [
    {
      authority: 'test_authority',
    },
  ],
  client_id: 'test_id',
})

mockAxios.onAny().reply(404)

export default { ...axios, ...mockAxios }
