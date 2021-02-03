import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = { toggle: true };

  toggle = () => {
    this.setState({toggle: !this.state.toggle})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-Logo" alt="logo" />
          <Welcome text="Welcome to React" />
          {this.state.toggle && <p>This should show and hide</p>}
          <button onClick={this.toggle}>Show / Hide</button>
        </header>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    const { text } = this.props;
    return <h1 className="App-title">{text}</h1>;
  }
}

export default App;
