import React, { Component } from "react";
import { getUsers } from "../sources/users";

class UsersList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.updateUsers();
  }

  componentDidUpdate() {
    this.updateUsers();
  }

  updateUsers() {
    const { firstName } = this.props;
    getUsers({ firstName }).then(({ data }) => this.setState({ users: data }));
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
          <div style={{ paddingTop: "20px" }}>Нет данных</div>
        )}
      </>
    );
  }
}

export default UsersList;
