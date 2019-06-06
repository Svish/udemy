import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import css from './Header.module.css';

class Header extends React.Component {
  renderLinks() {
    return this.props.authenticated ? (
      <>
        <Link to="/feature">Feature</Link>
        <Link to="/sign-out">Sign Out</Link>
      </>
    ) : (
      <>
        <Link to="/sign-up">Sign Up</Link>
        <Link to="/sign-in">Sign In</Link>
      </>
    );
  }

  render() {
    return (
      <header className={css.header}>
        <Link to="/">Redux Auth</Link>
        {this.renderLinks()}
      </header>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ authenticated: auth.authenticated });

export default connect(mapStateToProps)(Header);
