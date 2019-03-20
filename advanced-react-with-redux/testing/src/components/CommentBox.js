import React from 'react';
import { connect } from 'react-redux';

import { newComment } from 'actions';

class CommentBox extends React.Component {
  state = { comment: '' };

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
      <form onSubmit={this.handleSubmit}>
        <h4>Add a comment</h4>
        <textarea onChange={this.handleChange} value={this.state.comment} />
        <div>
          <button>Submit</button>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  { newComment },
)(CommentBox);
