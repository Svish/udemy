export default ({ dispatch }) => next => action => {
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  action.payload.then(result => {
    dispatch({ ...action, payload: result });
  });
};
