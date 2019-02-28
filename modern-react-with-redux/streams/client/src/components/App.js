import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';

import StreamCreate from './streams/Create';
import StreamEdit from './streams/Edit';
import StreamDelete from './streams/Delete';
import StreamList from './streams/List';
import StreamShow from './streams/Show';

const App = () => (
  <div className="ui container">
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={StreamList} />
        <Route exact path="/streams/new" component={StreamCreate} />
        <Route exact path="/streams/edit" component={StreamEdit} />
        <Route exact path="/streams/delete" component={StreamDelete} />
        <Route exact path="/streams/show" component={StreamShow} />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
