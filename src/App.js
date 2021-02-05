import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    input: "Hello",
  };

  submit = () => {};

  updateInput = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <Welcome text="Welcome to React" />
        <input
          type="text"
          onChange={this.updateInput}
          value={this.state.input}
        />
        <input type="text" ref={(input) => (this.text = input)} />
        <button onClick={this.submit}>Show Value</button>
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
