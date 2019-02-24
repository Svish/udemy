import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

faker.locale = 'nb_NO';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h4>Warning!</h4>
        <p>Are you sure?</p>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          comment={{
            author: faker.name.firstName(),
            avatar: faker.image.avatar(),
            time: faker.date.past(),
            text: faker.lorem.sentence(),
          }}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          comment={{
            author: faker.name.firstName(),
            avatar: faker.image.avatar(),
            time: faker.date.past(),
            text: faker.lorem.sentence(),
          }}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          comment={{
            author: faker.name.firstName(),
            avatar: faker.image.avatar(),
            time: faker.date.past(),
            text: faker.lorem.sentence(),
          }}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
