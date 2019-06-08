import React, { Component } from 'react'
import '../css/pure-min.css'
import '../css/side-menu.css'
import TableInput from './TableInput'

export class Form extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
    }
  }

  setName = (e) => {
    this.setState({ name: e.currentTarget.value })
  }

  setEmail = (e) => {
    this.setState({ email: e.currentTarget.value })
  }

  setPassword = (e) => {
    this.setState({ password: e.currentTarget.value })
  }

  handleClickNewAuthor = (e) => {
    e.preventDefault()
    const { name, email, password } = this.state
    this.props.newAuthor({
      name: name,
      email: email,
      password: password,
    })
  }

  render () {
    return (
      <div className='pure-form pure-form-aligned'
      >
        <form className='pure-form pure-form-aligned' onSubmit={this.enviaForm} method='post'>
          <TableInput
            type='text'
            onChange={this.setName}
            label='Name'
          />
          <TableInput
            id='email'
            type='email'
            onChange={this.setEmail}
            label='Email'
          />
          <TableInput
            id='password'
            type='password'
            onChange={this.setPassword}
            label='Password'
          />
          <div className='pure-control-group'>
            <label></label>
            <button
              className='pure-button pure-button-primary'
              onClick={this.handleClickNewAuthor}
            >
              Gravar
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Form
