import reducer from 'reducers/comments';
import { NEW_COMMENT } from 'actions/types';

describe('comments reducer', () => {
  it('handles actions of type ' + NEW_COMMENT, () => {
    const action = { type: NEW_COMMENT, payload: 'comment' };

    const state = reducer(undefined, action);
    expect(state).toEqual(['comment']);
  });

  it('handles action with unknown type', () => {
    const previous = [];
    const state = reducer(previous, {});
    expect(state === previous).toBe(true);
  });
});
