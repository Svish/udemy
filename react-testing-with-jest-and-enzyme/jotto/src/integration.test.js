import createStore from './createStore';

import { guessWord } from './actions';

describe('guessWord action dispatcher', () => {
  const secret = { word: 'party', matches: 5 };
  const unsuccessful = { word: 'train', matches: 3 };

  let store;

  describe('no guessed words', () => {
    const initialState = { secretWord: secret.word };

    beforeEach(() => {
      store = createStore(initialState);
    });

    afterEach(() => {
      store = undefined;
    });

    test('new unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessful.word));
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [unsuccessful],
      };

      expect(store.getState()).toEqual(expectedState);
    });

    test('new successful guess', () => {
      store.dispatch(guessWord(secret.word));
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [secret],
      };

      expect(store.getState()).toEqual(expectedState);
    });
  });

  describe('some guessed words', () => {
    const guessedWords = [{ word: 'agile', matches: 1 }];
    const initialState = { secretWord: secret.word, guessedWords };

    beforeEach(() => {
      store = createStore(initialState);
    });

    afterEach(() => {
      store = undefined;
    });

    test('new unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessful.word));
      const expectedState = {
        ...initialState,
        success: false,
        guessedWords: [...guessedWords, unsuccessful],
      };

      expect(store.getState()).toEqual(expectedState);
    });

    test('new successful guess', () => {
      store.dispatch(guessWord(secret.word));
      const expectedState = {
        ...initialState,
        success: true,
        guessedWords: [...guessedWords, secret],
      };

      expect(store.getState()).toEqual(expectedState);
    });
  });
});
