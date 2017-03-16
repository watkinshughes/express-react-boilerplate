import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bears: []
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:8080/api/bears`)
      .then(res => {
        const bears = res.data;
        this.setState({ bears });
        console.log(bears);
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ul>
          {this.state.bears.map(post =>
            <li key={post._id}>{post.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
