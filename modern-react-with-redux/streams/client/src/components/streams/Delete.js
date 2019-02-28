import React from 'react';
import { connect } from 'react-redux';

import history from '../../history';
import { fetchStream, deleteStream } from '../../actions/streams';

import Modal from '../Modal';
import Spinner from '../Spinner';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onCancelClick = () => history.goBack();

  onDeleteClick = () => this.props.deleteStream(this.props.stream.id);

  renderContent() {
    if (!this.props.stream) {
      return <Spinner />;
    }

    return (
      <React.Fragment>
        Are you sure you want to delete the stream
        <b>"{this.props.stream.title}"</b>?
      </React.Fragment>
    );
  }

  // NOTE: Could use <> </>, but currently breaks highlighting... :(
  renderActions() {
    return (
      <React.Fragment>
        <button onClick={this.onCancelClick} className="ui button">
          Cancel
        </button>
        <button onClick={this.onDeleteClick} className="ui button negative">
          Delete
        </button>
      </React.Fragment>
    );
  }

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={this.onCancelClick}
      />
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
    deleteStream,
  },
)(StreamDelete);
