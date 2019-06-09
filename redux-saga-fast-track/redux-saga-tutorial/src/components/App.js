import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';

import UsersList from './UsersList';
import NewUserForm from './NewUserForm';
import {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
  usersError,
} from '../actions/users';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props.getUsersRequest();
  }

  handleSubmit = ({ firstName, lastName }) => {
    this.props.createUserRequest({
      firstName,
      lastName,
    });
  };

  handleDeleteUser = userId => {
    this.props.deleteUserRequest(userId);
  };

  handleCloseAlert = () => {
    this.props.usersError({ errorMessage: '' });
  };

  render() {
    const users = this.props.users;
    return (
      <div style={{ margin: '0 auto', padding: '20px', maxWidth: '600px' }}>
        <Alert
          color="danger"
          isOpen={!!this.props.users.errorMessage}
          toggle={this.handleCloseAlert}
        >
          {this.props.users.errorMessage}
        </Alert>
        <NewUserForm onSubmit={this.handleSubmit} />
        <UsersList onDeleteUser={this.handleDeleteUser} users={users.items} />
      </div>
    );
  }
}

export default connect(
  ({ users }) => ({ users }),
  { getUsersRequest, createUserRequest, deleteUserRequest, usersError }
)(App);
