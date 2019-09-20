import React, { Component } from "react";

const TEST_NAME = "tanya";

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    /*getUsers({ firstName: TEST_NAME }).then(({ data }) =>
      this.setState({ users: data })
    );*/
  }

  render() {
    const { users } = this.state;
    return (
      <>
        {users && users.length ? (
          <ul>
            {users.map((user, index) => (
              <li key={index}>{`${user.FirstName} ${user.LastName}`}</li>
            ))}
          </ul>
        ) : (
          "Пользователи не найдены"
        )}
      </>
    );
  }
}

export default UsersList;
