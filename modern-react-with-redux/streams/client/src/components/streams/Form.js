import React from 'react';
import { Field, reduxForm } from 'redux-form';

import history from '../../history';

class Form extends React.Component {
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    } else {
      return null;
    }
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  onDismiss = () => history.goBack();

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
        autoComplete="off"
      >
        <Field component={this.renderInput} name="title" label="Title" />
        <Field
          component={this.renderInput}
          name="description"
          label="Description"
        />
        <div className="actions">
          <button onClick={this.onDismiss} className="ui button">
            Cancel
          </button>
          <button className="ui button primary">Submit</button>
        </div>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate,
})(Form);
