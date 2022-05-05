import React from "react";
import { isEmpty } from "lodash";

const Dashboard = () => {
  


  return (
    <div className="card-body">
      <div className="">
        {!isEmpty(user.firstName) || !isEmpty(user.lastName) ? (
          <p>
            Hello{" "}
            <strong>
              {user.firstName} {user.lastName}!
            </strong>
          </p>
        ) : (
          <p>
            Hello <strong>{user.username}!</strong>
          </p>
        )}
        <section>
          From your account dashboard you can view your recent orders, manage
          your shipping and billing addresses
        </section>
      </div>
    </div>
  );
};

export default Dashboard;