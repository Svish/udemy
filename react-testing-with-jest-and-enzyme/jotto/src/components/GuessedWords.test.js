import React from 'react';
import { shallow } from 'enzyme';

import GuessedWords from './GuessedWords';

describe('<GuessedWords />', () => {
  let wrapper;
  let find;

  beforeEach(() => {
    wrapper = shallow(<GuessedWords />);
    find = global.findByTestAttr(wrapper);
  });

  it('does not throw warning with expected props', () => {
    global.checkProps(GuessedWords, {
      guessedWords: [
        {
          word: 'train',
          matches: 3,
        },
      ],
    });
  });

  describe('no words have been guessed', () => {
    beforeEach(() => {
      wrapper.setProps({ guessedWords: [] });
    });

    it('renders without errors', () => {
      expect(find('component-guessed-words')).toExist();
    });

    it('renders instructions', () => {
      expect(find('instructions')).toExist();
    });
  });

  describe('words have been guessed', () => {
    beforeEach(() => {
      wrapper.setProps({
        guessedWords: [
          { word: 'train', matches: 3 },
          { word: 'agile', matches: 1 },
          { word: 'party', matches: 5 },
        ],
      });
    });

    it('renders without errors', () => {
      expect(find('component-guessed-words')).toExist();
    });

    it('renders "guessed words" section', () => {
      expect(find('guessed-words')).toExist();
    });

    it('renders correct number of guessed words', () => {
      expect(find('guessed-word').length).toBe(3);
    });
  });
});
