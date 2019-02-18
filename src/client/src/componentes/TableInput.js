import React, { Component } from 'react'

class TableInput extends Component {
  render () {
    return (
      <div className="pure-control-group">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input id={this.props.id} type={this.props.type} value={this.props.value} onChange={this.props.onChange} />
      </div>
    )
  }
}

export default TableInput
