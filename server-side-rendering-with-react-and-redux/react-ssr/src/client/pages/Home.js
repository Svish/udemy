import React from 'react';

const Home = () => {
  return (
    <div>
      <div>Home</div>
      <button onClick={() => console.log('Hello!')}>Hello?</button>
    </div>
  );
};

export default { component: Home };
