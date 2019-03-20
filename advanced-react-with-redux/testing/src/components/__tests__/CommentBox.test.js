import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';

describe('<CommentBox />', () => {
  let component;

  beforeEach(() => {
    component = mount(<CommentBox />);
  });

  afterEach(() => {
    component.unmount();
  });

  it('has a textarea and a button', () => {
    expect(component.find('textarea').length).toEqual(1);
    expect(component.find('button').length).toEqual(1);
  });

  describe('the textarea', () => {
    const triggerChange = value => {
      component.find('textarea').simulate('change', { target: { value } });
      component.update();
    };

    it('is editable', () => {
      const value = 'foobar';
      expect(component.find('textarea').prop('value')).not.toEqual(value);

      triggerChange(value);
      expect(component.find('textarea').prop('value')).toEqual(value);
    });

    it('should be cleared upon submit', () => {
      triggerChange('foobar');
      expect(component.find('textarea').prop('value')).not.toEqual('');

      component.find('form').simulate('submit');
      component.update();
      expect(component.find('textarea').prop('value')).toEqual('');
    });
  });
});
