import 'materialize-css/dist/css/materialize.min.css';

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchAuthUser } from '../actions';

import Header from './Header';
import Landing from './Landing';
import SurveyList from './surveys/List';
import SurveyNew from './surveys/New';
import ThankYou from './ThankYou';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchAuthUser();
  }
  render() {
    return (
      <BrowserRouter>
        <Header />
        <div className="container">
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={SurveyList} />
          <Route exact path="/surveys/new" component={SurveyNew} />
          <Route exact path="/thank-you" component={ThankYou} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  {
    fetchAuthUser,
  },
)(App);
