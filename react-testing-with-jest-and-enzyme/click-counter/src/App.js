import React from 'react';

class App extends React.Component {
  state = { counter: 0, error: false };

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1, error: false });
  };

  handleDecrement = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    } else {
      this.setState({ error: true });
    }
  };

  renderError() {
    if (this.state.error) {
      return <p data-test="error-message">Counter cannot go below zero</p>;
    } else {
      return null;
    }
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is {this.state.counter}</h1>
        <button data-test="increment-button" onClick={this.handleIncrement}>
          Increment
        </button>
        <button data-test="decrement-button" onClick={this.handleDecrement}>
          Decrement
        </button>
        {this.renderError()}
      </div>
    );
  }
}

export default App;
