import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';

import StreamCreate from './stream/Create';
import StreamEdit from './stream/Edit';
import StreamDelete from './stream/Delete';
import StreamList from './stream/List';
import StreamShow from './stream/Show';

const App = () => (
  <div className="ui container">
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={StreamList} />
        <Route exact path="/stream/new" component={StreamCreate} />
        <Route exact path="/stream/edit" component={StreamEdit} />
        <Route exact path="/stream/delete" component={StreamDelete} />
        <Route exact path="/stream/show" component={StreamShow} />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
