import { getLetterMatchCount } from './';

describe('getLetterMatchCount', () => {
  it('returns 0 for no matches', () => {
    const count = getLetterMatchCount('bones', 'party');
    expect(count).toBe(0);
  });

  it('returns 3 for 3 matches', () => {
    const count = getLetterMatchCount('train', 'party');
    expect(count).toBe(3);
  });

  it('returns correct when duplicate letters in guess', () => {
    const count = getLetterMatchCount('parka', 'party');
    expect(count).toBe(3);
  });
});
