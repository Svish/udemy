import React from 'react';
import { connect } from 'react-redux';

import { newComment, fetchComments } from 'actions';

class CommentBox extends React.Component {
  state = { comment: '' };

  handleFetch = () => {
    this.props.fetchComments();
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ comment: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.newComment(this.state.comment);
    this.setState({ comment: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a comment</h4>
          <textarea onChange={this.handleChange} value={this.state.comment} />
          <div>
            <button type="submit">Submit</button>
            <button
              type="button"
              className="fetch-comments"
              onClick={this.handleFetch}
            >
              Fetch Comments
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { newComment, fetchComments },
)(CommentBox);
