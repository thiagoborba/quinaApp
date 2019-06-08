import React, { Component } from 'react'
import '../css/pure-min.css'
import '../css/side-menu.css'

class TableInput extends Component {
  render () {
    const { type, onChange, label } = this.props
    return (
      <div className="pure-control-group">
        <label>
          {label}
        </label>
        <input
          type={type}
          onChange={onChange} />
      </div>
    )
  }
}

export default TableInput
