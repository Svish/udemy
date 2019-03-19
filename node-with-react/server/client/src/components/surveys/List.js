import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchSurveys } from '../../actions';

class List extends React.Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.map(survey => (
      <div className="card blue-gray darken-1" key={survey.id}>
        <div className="card-content">
          <span className="title">{survey.title}</span>
          <p>{survey.body}</p>
          <p className="right">
            Sent: {new Date(survey.dateSent).toLocaleDateString()}
          </p>
        </div>
        <div className="card-action">
          <Link to={`/surveys/${survey.id}`}>Yes: {survey.yes}</Link>
          <Link to={`/surveys/${survey.id}`}>No: {survey.no}</Link>
        </div>
      </div>
    ));
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

const mapStateToProps = ({ surveys }) => ({ surveys });

export default connect(
  mapStateToProps,
  { fetchSurveys },
)(List);
