import React, { Component } from "react";

import { save, get, remove } from '../database/database'

// App component - represents the whole app
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = this.initialState()
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          First name
          <input
            key="first-name"
            type="text"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.onFirstNameChanged}/>
        </label>
        <label>
          Last name
          <input
            key="last-name"
            type="text"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.onLastNameChanged}/>
        </label>
        <button type="submit">Save</button>
        <button onClick={this.onReset}>Reset</button>
      </form>
    );
  }

  initialState() {
    return ({
      firstName: get('firstName') || "",
      lastName: get('lastName') || ""
    })
  }

  onFirstNameChanged = (event) => {
    this.setState({ firstName: event.target.value });
  }

  onLastNameChanged = (event) => {
    this.setState({ lastName: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();

    // add your hood here to save to database
    // the below is just for testing - safe to delete
    const {firstName, lastName } = this.state
    console.log(`Hello, ${firstName} ${lastName}`);
  }
}