import { useState, useEffect } from 'react';
import axios from 'axios';

export default resourceType => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => setResources(response.data));
  }, [resourceType]);

  return resources;
};
