import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentList from 'components/CommentList';

describe('<CommentList />', () => {
  let component;

  beforeEach(() => {
    const state = {
      comments: ['Comment 1', 'Comment 2'],
    };
    component = mount(
      <Root initialState={state}>
        <CommentList />
      </Root>,
    );
  });

  it('creates one <li> per comment', () => {
    expect(component.find('li').length).toBe(2);
  });

  it('displays text of each comment', () => {
    const text = component.render().text();
    expect(text).toContain('Comment 1');
    expect(text).toContain('Comment 2');
  });
});
