import React, { Component } from "react";
import { saveToDb } from "../import/api/database";

const initialState = {
  firstName: "",
  lastName: ""
};

// App component - represents the whole app
export default class AddPerson extends Component {
  constructor(props) {
    super(props);

    this.state = initialState();
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <label>
          First name
          <input
            id="first-name"
            type="text"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={this.firstNameChanged}
          />
        </label>
        <label>
          Last name
          <input
            key="last-name"
            type="text"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.lastNameChanged}
          />
        </label>
        <button type="submit">Save</button>
        <button onClick={this.reset}>Reset</button>
      </form>
    );
  }

  firstNameChanged = event => {
    this.setState({ firstName: event.target.value });
  };

  lastNameChanged = event => {
    this.setState({ lastName: event.target.value });
  };

  reset = () => {
    this.setState({
      firstName: "",
      lastName: ""
    });
  };

  submit = event => {
    event.preventDefault();

    const { firstName, lastName } = this.state;
    saveToDb({ firstName, lastName }, () => {
      this.reset();
      this.props.onSaved();
    });
  };
}
