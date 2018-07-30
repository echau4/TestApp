import React, { Component } from 'react'

export class PersonList extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { people } = this.props

    return (
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {people.map(p => {
            return (
              <tr key={p.key}>
                <td>{p.firstName}</td>
                <td>{p.lastName}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}
