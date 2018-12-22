import React, { Component } from "react";
import NavBar from "./NavBar";
import Routes from "./Routes";
import Disclaimer from "./Disclaimer";
import Footer from "./Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes />
        <Disclaimer />
        <Footer />
      </div>
    );
  }
}

export default App;
