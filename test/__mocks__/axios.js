const axios = {
  create: jest.fn(() => ({
    get: jest.fn(url => new Promise(_ => _(url))),
    all: jest.fn(),
    defaults: {
      headers: {
        common: {},
      },
    },
  })),
};

module.exports = axios;
