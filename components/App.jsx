import React, { Component } from "react";

// App component - represents the whole app

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: ""
    };
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          First name
          <input
            key="first-name"
            type="text"
            placeholder="Elizabeth"
            value={this.state.firstName}
            onChange={this.onFirstNameChanged}/>
        </label>
        <label>
          Last name
          <input
            key="last-name"
            type="text"
            placeholder="Chau"
            value={this.state.lastName}
            onChange={this.onLastNameChanged}/>
        </label>
        <button type="submit">Save</button>
      </form>
    );
  }

  onFirstNameChanged = (event) => {
    this.setState({ firstName: event.target.value });
  }

  onLastNameChanged = (event) => {
    this.setState({ lastName: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();

    const {firstName, lastName } = this.state
    console.log(`Hello, ${firstName} ${lastName}`);
  }
}
