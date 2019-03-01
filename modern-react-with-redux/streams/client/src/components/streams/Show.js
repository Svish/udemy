import React from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions/streams';

import Spinner from '../Spinner';
import StreamAdminButtons from './AdminButtons';

class StreamShow extends React.Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  async componentDidMount() {
    const { id } = this.props.match.params;

    await this.props.fetchStream(id);

    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:9000/live/${id}.flv`,
    });

    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
    this.player.play();
  }

  componentWillUnmount() {
    this.player.destroy();
  }

  render() {
    if (!this.props.stream) {
      return <Spinner />;
    }

    const { stream } = this.props;

    return (
      <div>
        <video ref={this.videoRef} controls style={{ width: '100%' }} />
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
