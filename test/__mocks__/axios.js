const axios = jest.fn(obj => new Promise(_ => _(obj)));

axios.get = jest.fn(url => new Promise(_ => _(url)));
axios.post = jest.fn(url => new Promise(_ => _(url)));
axios.all = jest.fn();

const create = jest.fn(() => axios);

module.exports = { create };
