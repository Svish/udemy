import React from 'react';
import { connect } from 'react-redux';

import { createStream } from '../../actions/streams';

import StreamForm from './Form';

class StreamCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3 className="ui header">New stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  {
    createStream,
  },
)(StreamCreate);
