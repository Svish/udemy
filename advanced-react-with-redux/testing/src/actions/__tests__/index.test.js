import { newComment } from 'actions';
import { NEW_COMMENT } from 'actions/types';

describe('newComment', () => {
  it('has correct type', () => {
    const { type } = newComment();
    expect(type).toBe(NEW_COMMENT);
  });

  it('has correct payload', () => {
    const { payload } = newComment('comment');
    expect(payload).toBe('comment');
  });
});
