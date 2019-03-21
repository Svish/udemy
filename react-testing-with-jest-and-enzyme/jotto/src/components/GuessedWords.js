import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = ({ guessedWords = [] }) => {
  const contents = guessedWords.length ? (
    <div data-test="guessed-words">
      <h3>Guessed Words</h3>
      <table className="table table-sm">
        <thead className="thead-light">
          <tr>
            <th>Word</th>
            <th>Matching Letters</th>
          </tr>
        </thead>
        <tbody>
          {guessedWords.map(({ word, matches }, index) => (
            <tr data-test="guessed-word" key={index}>
              <td>{word}</td>
              <td>{matches}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <span data-test="instructions">Try to guess the secret word!</span>
  );

  return <div data-test="component-guessed-words">{contents}</div>;
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      word: PropTypes.string.isRequired,
      matches: PropTypes.number.isRequired,
    }),
  ),
};

export default GuessedWords;
