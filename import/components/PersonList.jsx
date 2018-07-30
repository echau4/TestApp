import React, { Component } from "react";

export default class PersonList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { people } = this.props

    return (
      <table>
        <thead>
          <th>First Name</th>
          <th>Last Name</th>
        </thead>
        <tbody>
          {people.map(p => {
            return (
              <tr>
                <td>p.firstName</td>
                <td>p.lastName</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
