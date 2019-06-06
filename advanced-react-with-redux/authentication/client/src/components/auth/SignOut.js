import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SignOut extends React.Component {
  componentDidMount() {
    this.props.signOut();
  }
  render() {
    return <article>Sorry to see you go :(</article>;
  }
}

export default connect(
  null,
  actions
)(SignOut);
