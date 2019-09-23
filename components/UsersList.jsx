import React, { Component } from "react";
import { getUsers } from "../sources/users";

const TEST_NAME = "ТАТЬЯНА";

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    getUsers({ firstName: TEST_NAME }).then(({ data }) =>
      this.setState({ users: data })
    );
  }

  render() {
    const { users } = this.state;
    return (
      <>
        {users.length ? (
          <ul>
            {users.map((user, index) => (
              <li key={index}>{`${user.firstName} ${user.lastName}`}</li>
            ))}
          </ul>
        ) : (
          "Нет данных"
        )}
      </>
    );
  }
}

export default UsersList;
