import React, { Component } from "react";

import { save, get, remove, Names } from '../import/api/database';
export const id = 1;
// App component - represents the whole app
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = this.initialState();
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>
          First name
          <input
            id="first-name"
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
      firstName: "",
      lastName: ""
    });
  }

  onFirstNameChanged = (event) => {
    this.setState({ firstName: event.target.value });
  }

  onLastNameChanged = (event) => {
    this.setState({ lastName: event.target.value });
  }

  onReset = () => {
    this.setState({ 
      firstName: '', 
      lastName: '' 
    });
  }

  onSubmit = (event) => {
    event.preventDefault();

    const {firstName, lastName } = this.state;
    save({ firstName, lastName }, this.onSaved);
  }


  onSaved = () => {
    this.onReset()
    alert("item saved")
  }
    
}