import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <header className="ui secondary pointing menu">
    <Link to="/" className="item">
      Streams
    </Link>

    <nav className="right menu">
      <Link to="/" className="item">
        All Streams
      </Link>
    </nav>
  </header>
);
