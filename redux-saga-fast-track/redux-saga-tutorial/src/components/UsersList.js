import React from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

const userSort = (a, b) => {
  if (a.firstName > b.firstName) return 1;
  if (a.firstName < b.firstName) return -1;
  if (a.lastName > b.lastName) return 1;
  if (a.lastName < b.lastName) return -1;
  return 0;
};

const UsersList = ({ users, onDeleteUser }) => (
  <ListGroup>
    {users.sort(userSort).map(user => (
      <ListGroupItem key={user.id}>
        <section style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ flexGrow: 1 }}>
            {user.firstName} {user.lastName}
          </div>
          <div>
            <Button
              outline
              color="danger"
              onClick={() => onDeleteUser(user.id)}
            >
              Delete
            </Button>
          </div>
        </section>
      </ListGroupItem>
    ))}
  </ListGroup>
);

export default UsersList;
