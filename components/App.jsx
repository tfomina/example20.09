import React, {Component} from 'react';

import List from './List';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
        };
    }

    render() {
        const { list } = this.state;

        return (
            <div>
                    <List list={list}/>
            </div>
        );
    }
}

export default App;
