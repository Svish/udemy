import axios from 'axios';

import { CORRECT_GUESS, GUESS_WORD, SET_SECRET_WORD } from './types';
import { getLetterMatchCount } from '../helpers';

export const guessWord = word => (dispatch, getState) => {
  const { secretWord } = getState();
  const matches = getLetterMatchCount(word, secretWord);
  dispatch({ type: GUESS_WORD, payload: { word, matches } });

  if (word === secretWord) {
    dispatch({ type: CORRECT_GUESS });
  }
};

export const getSecretWord = () => async dispatch => {
  const { data } = await axios.get('http://localhost:3030');
  dispatch({ type: SET_SECRET_WORD, payload: data });
};
