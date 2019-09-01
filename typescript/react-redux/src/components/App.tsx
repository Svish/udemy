import React from 'react';
import CounterClass from './CounterClass';

import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { RootState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

interface AppState {
  fetching: boolean;
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { fetching: false };
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length)
      this.setState({ fetching: false });
  }

  onButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  renderList(): React.ReactNode[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <li key={todo.id} onClick={() => this.onTodoClick(todo.id)}>
          {todo.title}
        </li>
      );
    });
  }

  render() {
    return (
      <>
        <aside>
          <CounterClass />
        </aside>
        <div>
          <button onClick={this.onButtonClick}>Fetch</button>
        </div>
        {this.state.fetching ? 'Loading...' : null}
        <ul>{this.renderList()}</ul>
      </>
    );
  }
}

const mapStateToProps = ({ todo }: RootState) => ({
  todos: todo,
});

export default connect(
  mapStateToProps,
  { fetchTodos, deleteTodo }
)(App);
