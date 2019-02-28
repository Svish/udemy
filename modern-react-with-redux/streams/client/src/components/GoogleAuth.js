import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions/auth';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID,
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.auth.isSignedIn.listen(this.onAuthChange);
          this.onAuthChange(this.auth.isSignedIn.get());
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  doSignIn = () => this.auth.signIn();

  doSignOut = () => this.auth.signOut();

  renderButton() {
    switch (this.props.isSignedIn) {
      case null:
        return <i className="notched circle loading icon" />;

      case true:
        return (
          <button onClick={this.doSignOut} className="ui red google button">
            <i className="google icon" />
            Sign out
          </button>
        );

      default:
        return (
          <button onClick={this.doSignIn} className="ui green google button">
            <i className="google icon" />
            Sign in
          </button>
        );
    }
  }

  render() {
    return <div className="item">{this.renderButton()}</div>;
  }
}

const mapStateToProps = ({ auth: { isSignedIn } }) => ({ isSignedIn });

export default connect(
  mapStateToProps,
  { signIn, signOut },
)(GoogleAuth);
