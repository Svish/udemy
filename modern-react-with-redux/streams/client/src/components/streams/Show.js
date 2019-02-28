import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions/streams';

import Spinner from '../Spinner';
import StreamAdminButtons from './AdminButtons';

class StreamShow extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.stream) {
      return <Spinner />;
    }

    const { stream } = this.props;

    return (
      <div>
        <h1>{stream.title}</h1>
        <p>{stream.description}</p>
        <StreamAdminButtons stream={stream} />
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
  },
)(StreamShow);
