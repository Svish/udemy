import { CORRECT_GUESS } from '../actions/types';

import reducer from './success';

describe('success reducer', () => {
  it('defaults to false', () => {
    const state = reducer(undefined, {});
    expect(state).toBe(false);
  });

  it('switches to true on `CORRECT_GUESS`', () => {
    const state = reducer(undefined, { type: CORRECT_GUESS });
    expect(state).toBe(true);
  });
});
