import React, { Component } from "react";
import { get } from '../import/api/database'
import { AddPerson } from '../import/components/AddPerson';
import { PersonList } from '../import/components/PersonList';



export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: get()
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
    const people = get()

    this.setState({ people })
  }
}
