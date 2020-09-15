import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { fetchData } from "./api";

class App extends Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    const getData = await fetchData();
    this.setState({ data: getData });
  }
  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
