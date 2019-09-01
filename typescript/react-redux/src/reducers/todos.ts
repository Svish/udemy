import { Todo, ActionTypes, Action } from '../actions';

export default (state: Todo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.FetchTodos:
      return action.payload;

    case ActionTypes.DeleteTodo:
      return state.filter(todo => todo.id !== action.payload);

    default:
      return state;
  }
};
