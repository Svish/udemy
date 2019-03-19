import React from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';

import FormField from './FormField';
import formFields from './formFields';
import validateEmails from '../../utils/validateEmails';

class Form extends React.Component {
  renderFields() {
    return formFields.map(({ name, label }) => (
      <Field
        key={name}
        component={FormField}
        type="text"
        name={name}
        label={label}
      />
    ));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <p>
            <Link to="/surveys" className="red btn-flat white-text">
              Cancel
            </Link>
            <button type="submit" className="teal btn-flat right white-text">
              Next <i className="material-icons right">arrow_forward</i>
            </button>
          </p>
        </form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  formFields.forEach(({ name }) => {
    if (!values[name]) errors[name] = `The ${name} cannot be empty`;
  });

  return errors;
};

export default reduxForm({
  validate,
  form: 'survey',
  destroyOnUnmount: false,
})(Form);
