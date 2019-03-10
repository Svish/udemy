import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
  const [resourceType, setResourceType] = useState('posts');

  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('todos')}>Todos</button>
      </div>
      <ResourceList resourceType={resourceType} />
    </div>
  );
};

export default App;
