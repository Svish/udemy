import Comment from './Comment';

export default ({ comments }) => (
  <>
    {comments.map(comment => (
      <Comment key={comment.id} comment={comment} />
    ))}
  </>
);
