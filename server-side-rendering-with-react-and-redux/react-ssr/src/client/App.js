import React from 'react';
import { renderRoutes } from 'react-router-config';

import { Helmet } from 'react-helmet';

import Header from './components/Header';
import { fetchCurrentUser } from './actions';

const App = ({ route }) => {
  return (
    <>
      <Helmet titleTemplate="%s - React SSR" defaultTitle="React SSR" />
      <Header />
      {renderRoutes(route.routes)}
    </>
  );
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),
};
