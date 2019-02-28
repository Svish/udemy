import React from 'react';
import { Router, Route } from 'react-router-dom';

import history from '../history';

import Header from './Header';
import StreamCreate from './streams/Create';
import StreamEdit from './streams/Edit';
import StreamDelete from './streams/Delete';
import StreamList from './streams/List';
import StreamShow from './streams/Show';

const App = () => (
  <div className="ui container">
    <Router history={history}>
      <div>
        <Header />
        <Route exact path="/" component={StreamList} />
        <Route exact path="/streams/new" component={StreamCreate} />
        <Route exact path="/streams/:id(\d+)" component={StreamShow} />
        <Route exact path="/streams/:id(\d+)/edit" component={StreamEdit} />
        <Route exact path="/streams/:id(\d+)/delete" component={StreamDelete} />
      </div>
    </Router>
  </div>
);

export default App;
