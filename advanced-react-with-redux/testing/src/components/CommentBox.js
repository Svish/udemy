import React from 'react';

class CommentBox extends React.Component {
  state = { comment: '' };

  handleChange = ({ target: { value } }) => {
    this.setState({ comment: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    // TODO Call action creator
    // TODO Save comment

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

export default CommentBox;
