import React, { Component } from "react";
import {PersonList, AddPerson } from '../import/components/AddPerson'



export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    }
  }

  render() {
    return (
      <div>
        <AddPerson 
          onSave={this.onSaved}
        />
        <PersonList 
          people={this.state.people}/>
      </div>
    );
  }

  onSaved = () => {
    const people = get().map(x => {
      return {
        firstName: x.firstName,
        lastName: x.lastName
      };
    })

    this.setState({ people })
  }
}
