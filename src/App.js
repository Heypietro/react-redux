import React, { Component } from "react";
import "./App.css";
import Component1 from "./functional/component1"
import Container1 from "./containers/container1"

class App extends Component {
  render() {
    return (
      <div className="App"> 
        React
        <Component1 nome="Componente 1" secondo="secondo pezzo" />
        <Container1 nickname="mario" />
      </div>
    );
  }
}
 
export default App;
