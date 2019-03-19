import React from 'react';
import { reduxForm } from 'redux-form';

import Form from './Form';
import FormReview from './FormReview';

class New extends React.Component {
  state = { showFormReview: false };

  renderContent() {
    return this.state.showFormReview ? (
      <FormReview onCancel={() => this.setState({ showFormReview: false })} />
    ) : (
      <Form onSurveySubmit={() => this.setState({ showFormReview: true })} />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: 'survey',
})(New);
