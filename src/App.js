import React, { Component } from "react";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//import Search from "./Search";
import Crud from "./Crud";
import AddProduct from "./AddProduct";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Search /> */}
        <Crud />
      </div>
    );
  }
}

export default App;
