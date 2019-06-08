import React, { Component } from 'react'
import '../css/pure-min.css'
import '../css/side-menu.css'

export class Table extends Component {
  render () {
    const { authors } = this.props

    return (
      <div>
        <table className='pure-table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {
              authors.map(autor => {
                return (
                  <tr key={autor._id}>
                    <td>{autor.name}</td>
                    <td>{autor.email}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table
