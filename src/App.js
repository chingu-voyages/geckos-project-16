import React, { Component } from "react";
import "./App.css";
import Disclaimer from "./Disclaimer";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">Chingu Dogs</div>
        <Disclaimer />
      </div>
    );
  }
}

export default App;
