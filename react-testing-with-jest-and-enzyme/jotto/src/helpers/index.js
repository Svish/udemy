export const getLetterMatchCount = (guessedWord, secretWord) => {
  const secret = new Set(secretWord.split(''));
  const guessed = new Set(guessedWord.split(''));
  return [...secret].filter(letter => guessed.has(letter)).length;
};
