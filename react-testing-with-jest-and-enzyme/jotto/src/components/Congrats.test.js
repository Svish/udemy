import React from 'react';
import { shallow } from 'enzyme';

import Congrats from './Congrats';

describe('<Congrats />', () => {
  let wrapper;
  let find;

  beforeEach(() => {
    wrapper = shallow(<Congrats success={false} />);
    find = global.findByTestAttr(wrapper);
  });

  it('renders component', () => {
    expect(find('component-congrats')).toExist();
  });

  describe('success prop', () => {
    it('when false, renders no text', () => {
      expect(find('component-congrats').text()).toBe('');
    });

    it('when true, renders non-empty message', () => {
      wrapper.setProps({ success: true });
      expect(find('congrats-message').text()).not.toBe('');
    });
  });

  describe('props', () => {
    it('does not throw warning with expected props', () => {
      global.checkProps(Congrats, { success: false });
    });
  });
});
