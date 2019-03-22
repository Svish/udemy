import React from 'react';
import { connect } from 'react-redux';

class CommentList extends React.Component {
  renderComments() {
    return this.props.comments.map((comment, i) => <li key={i}>{comment}</li>);
  }
  render() {
    return (
      <div>
        <h4>Comments</h4>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({ comments }) => ({ comments });

export default connect(mapStateToProps)(CommentList);
