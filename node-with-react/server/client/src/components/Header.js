import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import StripeCheckout from './StripeCheckout';

class Header extends React.Component {
  renderNavItems() {
    switch (this.props.auth) {
      case null:
        return null;

      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );

      default:
        return (
          <>
            <li>
              <StripeCheckout />
            </li>
            <li style={{ margin: '0 1em' }}>
              Credits: {this.props.auth.credits}
            </li>
            <li>
              <a href="/api/logout">Logout</a>
            </li>
          </>
        );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo"
          >
            Emaily
          </Link>
          <ul className="right">{this.renderNavItems()}</ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);
