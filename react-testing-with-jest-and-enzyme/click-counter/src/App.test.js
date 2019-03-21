import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  const findByTestAttr = value => {
    return wrapper.find(`[data-test="${value}"]`);
  };

  describe('rendering', () => {
    it('renders component', () => {
      expect(findByTestAttr('component-app')).toExist();
    });

    it('renders increment button', () => {
      expect(findByTestAttr('increment-button')).toExist();
    });

    it('renders decrement button', () => {
      expect(findByTestAttr('decrement-button')).toExist();
    });

    it('renders counter display', () => {
      expect(findByTestAttr('counter-display')).toExist();
    });
  });

  describe('counter', () => {
    it('starts at 0', () => {
      expect(wrapper.state('counter')).toBe(0);
    });

    describe('display', () => {
      beforeEach(() => {
        wrapper.setState({ counter: 7 });
      });

      it('increments on increment click', () => {
        findByTestAttr('increment-button').simulate('click');
        wrapper.update();
        expect(findByTestAttr('counter-display').text()).toContain(8);
      });

      it('decrements on decrement click', () => {
        findByTestAttr('decrement-button').simulate('click');
        wrapper.update();
        expect(findByTestAttr('counter-display').text()).toContain(6);
      });
    });
  });

  describe('decrementing below zero', () => {
    beforeEach(() => {
      findByTestAttr('decrement-button').simulate('click');
      wrapper.update();
    });

    it('stays at zero', () => {
      expect(findByTestAttr('counter-display').text()).toContain(0);
    });

    it('shows error', () => {
      expect(findByTestAttr('error-message')).toExist();
    });

    it('clears error on increment', () => {
      findByTestAttr('increment-button').simulate('click');
      wrapper.update();
      expect(findByTestAttr('error-message')).not.toExist();
    });
  });
});
