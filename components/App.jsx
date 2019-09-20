import React, { Component } from "react";

import List from "./List";
import UsersList from "./UsersList";

import { getList } from "../sources/list";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      count: 6
    };
  }

  componentDidMount() {
    // console.log('before');
    // console.log('after');
    // setTimeout(() => console.log('here'), 0);

    // const { count } = this.state;

    // const params = { count };
    console.log("PROMISE: ", getList());

    getList({ count: this.state.count }).then(({ data }) =>
      this.setState({ list: data })
    );
  }

  render() {
    const { list } = this.state;

    return (
      <div>
        <h3>Список</h3>
        <List list={list} />
        <h3>Список пользователей</h3>
        <UsersList />
      </div>
    );
  }
}

export default App;
