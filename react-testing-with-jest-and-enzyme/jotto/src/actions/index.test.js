import moxios from 'moxios';

import createStore from '../createStore';
import { getSecretWord } from './';

describe('getSecretWord action creator', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('adds response word to state', async () => {
    const secretWord = 'party';
    const store = createStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });

    await store.dispatch(getSecretWord());

    const word = store.getState().secretWord;
    expect(word).toBe(secretWord);
  });
});
