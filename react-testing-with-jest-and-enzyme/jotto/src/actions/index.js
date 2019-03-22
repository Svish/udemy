import { CORRECT_GUESS, GUESS_WORD } from './types';
import { getLetterMatchCount } from '../helpers';

export const guessWord = word => (dispatch, getState) => {
  const { secretWord } = getState();
  const matches = getLetterMatchCount(word, secretWord);
  dispatch({ type: GUESS_WORD, payload: { word, matches } });

  if (word === secretWord) {
    dispatch({ type: CORRECT_GUESS });
  }
};
