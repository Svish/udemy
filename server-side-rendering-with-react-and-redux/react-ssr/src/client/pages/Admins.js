import React from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';

import requireAuth from '../components/hocs/requireAuth';

class AdminsPage extends React.Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins() {
    return this.props.admins.map(admin => <li key={admin.id}>{admin.name}</li>);
  }

  render() {
    return (
      <div>
        <h2>Protected list of admins</h2>
        <ul>{this.renderAdmins()}</ul>
      </div>
    );
  }
}

const mapStateToProps = ({ admins }) => ({ admins });

export default {
  loadData: ({ dispatch }) => dispatch(fetchAdmins()),
  component: connect(
    mapStateToProps,
    { fetchAdmins }
  )(requireAuth(AdminsPage)),
};
