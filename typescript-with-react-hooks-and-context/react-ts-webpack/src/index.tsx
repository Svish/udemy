import React from 'react';
import ReactDOM from 'react-dom';

const sum = (a: number, b: number): number => a + b;
const App: React.FC = () => {
  return <div>{sum(Math.random() * 10, Math.random() * 10)}</div>;
};

ReactDOM.render(<App />, document.getElementById('root'));
