import React, { Component } from "react";
import UsersList from "./UsersList";

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: ""
    };
  }

  handleChange(event) {
    this.setState({
      firstName: event.target.value
    });
  }

  render() {
    const { firstName } = this.state;

    return (
      <>
        <input
          placeholder="Введите имя"
          type="text"
          name="firstName"
          value={firstName}
          onChange={this.handleChange.bind(this)}
        />
        <UsersList firstName={firstName} />
      </>
    );
  }
}

export default Users;
