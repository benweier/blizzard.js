const axios = {
  create: jest.fn(() => ({
    get: jest.fn(
      url => new Promise(_ => _(url))
    ),
    all: jest.fn(),
  })),
};

module.exports = axios;
