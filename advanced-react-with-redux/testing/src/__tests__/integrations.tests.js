import React from 'react';
import moxios from 'moxios';
import { mount } from 'enzyme';

import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and display them', done => {
  const app = mount(
    <Root>
      <App />
    </Root>,
  );

  moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Comment 1' }, { name: 'Comment 2' }],
  });

  app.find('button.fetch-comments').simulate('click');

  moxios.wait(() => {
    try {
      app.update();
      expect(app.find('li').length).toEqual(2);
    } finally {
      app.unmount();
      done();
    }
  });
});
