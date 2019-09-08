const merge = require('lodash.merge');
const blizzard = require('./initialize');

const args = {
  headers: {
    'User-Agent': expect.stringMatching(/Node.js\/\d{1,2}.\d{1,2}.\d{1,2} Blizzard\.js\/\d{1,2}.\d{1,2}.\d{1,2}/),
    Authorization: 'Bearer token',
  },
  params: {
    locale: 'en_US',
  },
};

describe('lib/hearthstone.js', () => {
  beforeEach(() => {
    blizzard.axios.get.mockClear();
  });

  test('should have the correct API methods', () => {
    expect(blizzard.hs).toEqual(
      expect.objectContaining({
        cards: expect.any(Function),
        deck: expect.any(Function),
        metadata: expect.any(Function),
      }),
    );
  });

  describe('#cards()', () => {
    test('should request the card search index', () => {
      blizzard.hs.cards();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/hearthstone/cards',
        expect.objectContaining(args),
      );
    });

    test('should request a detailed card search', () => {
      const query = { set: 'rise-of-shadows', class: 'mage' };
      blizzard.hs.cards({ query });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/hearthstone/cards',
        expect.objectContaining(
          merge({}, args, {
            params: query,
          }),
        ),
      );
    });

    test('should request a card by ID or slug', () => {
      blizzard.hs.cards({ card: '52119-arch-villain-rafaam' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/hearthstone/cards/52119-arch-villain-rafaam',
        expect.objectContaining(args),
      );
    });
  });

  describe('#deck()', () => {
    test('should request a deck by code', () => {
      blizzard.hs.deck({ code: 'AAECAQcG+wyd8AKS+AKggAOblAPanQMMS6IE/web8wLR9QKD+wKe+wKz/AL1gAOXlAOalAOSnwMA' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/hearthstone/deck/AAECAQcG+wyd8AKS+AKggAOblAPanQMMS6IE/web8wLR9QKD+wKe+wKz/AL1gAOXlAOalAOSnwMA',
        expect.objectContaining(args),
      );
    });
  });

  describe('#metadata()', () => {
    test('should request the metadata index', () => {
      blizzard.hs.metadata();

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/hearthstone/metadata',
        expect.objectContaining(args),
      );
    });

    test('should request metadata by type', () => {
      blizzard.hs.metadata({ type: 'sets' });

      expect(blizzard.axios.get).toHaveBeenCalledTimes(1);
      expect(blizzard.axios.get).toHaveBeenCalledWith(
        'https://us.api.blizzard.com/hearthstone/metadata/sets',
        expect.objectContaining(args),
      );
    });
  });
});
