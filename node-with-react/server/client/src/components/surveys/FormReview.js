import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import formFields from './formFields';
import { newSurvey } from '../../actions';

const FormReview = ({ values, onCancel, newSurvey, history }) => {
  const fields = formFields.map(({ name, label }) => (
    <div key={name}>
      <label>{label}</label>
      <div>{values[name]}</div>
    </div>
  ));

  return (
    <div>
      <h5>Please confirm</h5>
      {fields}
      <p>
        <button
          className="yellow darken-3 white-text btn-flat"
          onClick={onCancel}
        >
          <i className="material-icons left">arrow_back</i>
          Back
        </button>
        <button
          className="teal btn-flat white-text right"
          onClick={() => newSurvey(values, history)}
        >
          Send
          <i className="material-icons right">email</i>
        </button>
      </p>
    </div>
  );
};

const mapStateToProps = state => ({
  values: state.form.survey.values,
});

export default connect(
  mapStateToProps,
  {
    newSurvey,
  },
)(withRouter(FormReview));
