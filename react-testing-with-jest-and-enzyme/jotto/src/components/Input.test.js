import React from 'react';
import { mount } from 'enzyme';

import Root from '../Root';
import Input from './Input';

describe('<Input />', () => {
  let wrapper;
  let find;

  describe('rendering', () => {
    describe('when word has not been guessed', () => {
      beforeEach(() => {
        wrapper = mount(
          <Root initialState={{ success: false }}>
            <Input />
          </Root>,
        );
        find = global.findByTestAttr(wrapper);
      });

      afterEach(() => {
        wrapper.unmount();
        find = undefined;
      });

      it('renders without error', () => {
        expect(find('component-input')).toExist();
      });

      it('renders input box', () => {
        expect(find('input-box')).toExist();
      });

      it('renders submit button', () => {
        expect(find('submit-button')).toExist();
      });
    });

    describe('word has been guessed', () => {
      beforeEach(() => {
        wrapper = mount(
          <Root initialState={{ success: true }}>
            <Input />
          </Root>,
        );
        find = global.findByTestAttr(wrapper);
      });

      afterEach(() => {
        wrapper.unmount();
        find = undefined;
      });

      it('renders without error', () => {
        expect(find('component-input')).toExist();
      });

      it('renders no input box', () => {
        expect(find('input-box')).not.toExist();
      });

      it('renders no submit button', () => {
        expect(find('submit-button')).not.toExist();
      });
    });
  });

  describe('updating', () => {
    //
  });
});
