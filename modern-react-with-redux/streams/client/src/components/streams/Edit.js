import React from 'react';
import { connect } from 'react-redux';
import { pick } from 'lodash';

import { fetchStream, editStream } from '../../actions/streams';

import StreamForm from './Form';
import Spinner from '../Spinner';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editStream(this.props.stream.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <Spinner />;
    }

    const { stream } = this.props;

    return (
      <div>
        <h3 className="ui header">Edit stream</h3>
        <StreamForm
          initialValues={pick(stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ streams }, { match }) => ({
  stream: streams[match.params.id],
});

export default connect(
  mapStateToProps,
  {
    fetchStream,
    editStream,
  },
)(StreamEdit);
