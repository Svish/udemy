import React from 'react';

interface AppProps {
  color?: string;
}

interface AppState {
  counter: number;
}

class CounterClass extends React.Component<AppProps> {
  state: Readonly<AppState> = { counter: 0 };

  onUp = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };
  onDown = (): void => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.onUp}>+</button>
        <button onClick={this.onDown}>-</button>
        <output>{this.state.counter}</output>
      </div>
    );
  }
}
export default CounterClass;
