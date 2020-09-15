import React, { Component } from "react";
import { fetchData } from "./api";
import Cards from "./components/Cards";
import CountrySelect from "./components/CountrySelect";
import Chart from "./components/Chart";

class App extends Component {
  state = {
    data: {},
  };
  async componentDidMount() {
    const getData = await fetchData();
    // console.log(getData);
    this.setState({ data: getData });
    // console.log(this.state.data);
  }
  render() {
    const { data } = this.state;
    // console.log(data);
    return (
      <div className="App">
        <Cards data={data} />
        <CountrySelect />
        <Chart />
      </div>
    );
  }
}

export default App;
