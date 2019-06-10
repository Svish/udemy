import React from 'react';
import { Provider } from 'react-redux';

import Header from './components/Header';
import ImageGrid from './components/ImageGrid';

import createStore from './store';
const store = createStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <ImageGrid />
      </Provider>
    );
  }
}

export default App;
