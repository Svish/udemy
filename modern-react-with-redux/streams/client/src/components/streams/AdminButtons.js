import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class StreamAdminButtons extends React.Component {
  render() {
    if (
      !this.props.isSignedIn ||
      this.props.currentUserId !== this.props.stream.userId
    )
      return null;

    return (
      <div className="right floated content">
        <Link
          to={`/streams/${this.props.stream.id}/edit`}
          className="ui button primary"
        >
          Edit
        </Link>
        <Link
          to={`/streams/${this.props.stream.id}/delete`}
          className="ui button negative"
        >
          Delete
        </Link>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  currentUserId: auth.userId,
  isSignedIn: auth.isSignedIn,
});

export default connect(mapStateToProps)(StreamAdminButtons);
