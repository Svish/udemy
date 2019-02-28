import React from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from './GoogleAuth';

export default () => (
  <header className="ui secondary pointing menu">
    <Link to="/" className="item">
      Streams
    </Link>

    <nav className="right menu">
      <Link to="/" className="item">
        All Streams
      </Link>
      <GoogleAuth />
    </nav>
  </header>
);
