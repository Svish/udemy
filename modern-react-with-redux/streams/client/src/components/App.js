import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

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
        <Switch>
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/:id/delete" component={StreamDelete} />
          <Route path="/streams/:id/edit" component={StreamEdit} />
          <Route path="/streams/:id" component={StreamShow} />
          <Route path="/" component={StreamList} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
