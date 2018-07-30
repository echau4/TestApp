import React, { Component } from "react";
import { get } from '../import/api/database'
import { AddPerson } from '../import/components/AddPerson';
import { PersonList } from '../import/components/PersonList';



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
          people={this.state.people}
        />
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

    console.log(people)
    this.setState({ people })
  }
}
