import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions/streams';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList() {
    return this.props.streams.map(stream => (
      <div className="item" key={stream.id}>
        {this.renderAdmin(stream)}
        <i className="large middle aligned icon camera" />
        <div className="content">
          <Link to={`/streams/${stream.id}`}>{stream.title}</Link>
          <div className="description">{stream.description}</div>
        </div>
      </div>
    ));
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/${stream.id}/edit`} className="ui button primary">
            <i className="edit icon" />
          </Link>
          <Link
            to={`/streams/${stream.id}/delete`}
            className="ui button negative"
          >
            <i className="trash icon" />
          </Link>
        </div>
      );
    }
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/streams/new" className="ui button primary">
            <i className="add icon" />
          </Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = ({ streams, auth }) => ({
  streams: Object.values(streams),
  currentUserId: auth.userId,
  isSignedIn: auth.isSignedIn,
});

export default connect(
  mapStateToProps,
  { fetchStreams },
)(StreamList);
