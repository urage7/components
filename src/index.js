import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./commentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";
const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author='Sam'
          timeAgo='Yesterday at 4:00PM'
          avatar={faker.image.avatar()}
          text={faker.commerce.product()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author='Gosho'
          timeAgo='Yesterday at 1:00PM'
          avatar={faker.image.avatar()}
          text={faker.commerce.product()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author='Jane'
          timeAgo='Yesterday at 9:00AM'
          avatar={faker.image.avatar()}
          text={faker.commerce.product()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
