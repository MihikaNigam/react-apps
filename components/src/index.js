import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetails";
import Faker from "faker";
import ApprovalCard from "./ApprovalCard";

if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="oden"
          timeAgo="Today at 6:00PM"
          content="Don't Kill my Comarades"
          avatar={Faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="guts"
          timeAgo="Today at 9:00PM"
          content="Griffith you bitch"
          avatar={Faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="sanji"
          timeAgo="Yesterday at 6:00PM"
          content="Nami san uWu"
          avatar={Faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="levi"
          timeAgo="Yesterday at 9:00PM"
          content="I can handle 20 titans at once"
          avatar={Faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
