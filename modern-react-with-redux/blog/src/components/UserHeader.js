import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
  render() {
    const { user } = this.props;
    return !user ? null : <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = ({ users }, { userId }) => {
  const user = users.find(u => u.id === userId);
  return { user: user || null };
};

export default connect(mapStateToProps)(UserHeader);
