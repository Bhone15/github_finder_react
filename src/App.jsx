import "./App.css";
import React, { Component } from "react";

class App extends Component {
  render() {
    const name = "John Doe";

    return (
      <div className='App'>
        <h1>Hello {name}</h1>
      </div>
    );
  }
}

export default App;
