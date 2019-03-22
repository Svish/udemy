import { combineReducers } from 'redux';

import success from './success.js';
import guessedWords from './guessedWords.js';
import secretWord from './secretWord.js';

export default combineReducers({
  guessedWords,
  secretWord,
  success,
});
