import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import * as actions from '../../actions';

class SignIn extends React.Component {
  onSubmit = formProps => {
    this.props.signIn(formProps, () => {
      this.props.history.push('/feature');
    });
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="email"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="current-password"
          />
        </fieldset>

        <button type="submit">Sign In</button>
      </form>
    );
  }
}

const mapStateToProps = ({ errorMessage }) => ({ errorMessage });

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: 'sign-up' })
)(SignIn);
