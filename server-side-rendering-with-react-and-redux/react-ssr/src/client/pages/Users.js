import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { fetchUsers } from '../actions';

class UsersPage extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => <li key={user.id}>{user.name}</li>);
  }

  head() {
    return (
      <Helmet>
        <title>{`${this.props.users.length} Users`}</title>
        <meta property="og:title" content="Users" />
      </Helmet>
    );
  }

  render() {
    return (
      <>
        {this.head()}
        <div>
          <p>List of users:</p>
          <ul>{this.renderUsers()}</ul>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ users }) => ({ users });

export default {
  loadData: ({ dispatch }) => dispatch(fetchUsers()),
  component: connect(
    mapStateToProps,
    { fetchUsers }
  )(UsersPage),
};
