import React, { Component } from 'react'
import '../css/pure-min.css'
import '../css/side-menu.css'
import TableInput from './TableInput'
import fetch from 'node-fetch'

const APP_SERVER_URL = 'http://localhost:3000/api/authors'

export class Form extends Component {
  constructor (props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
    }
  }

  enviaForm = async (e) => {
    e.preventDefault()

    const { name, email, password } = this.state

    await fetch(APP_SERVER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then(res => this.props.callbackListAuthors())
      .catch(err => console.log(err))
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

  render () {
    return (
      <div className='pure-form pure-form-aligned'>
        <form className='pure-form pure-form-aligned' onSubmit={this.enviaForm} method='post'>
          <TableInput
            id='name'
            type='text'
            value={this.state.name}
            onChange={this.setName}
            label='Name'
          />
          <TableInput
            id='email'
            type='email'
            value={this.state.email}
            onChange={this.setEmail}
            label='Email'
          />
          <TableInput
            id='password'
            type='password'
            value={this.state.password}
            onChange={this.setPassword}
            label='Password'
          />
          <div className='pure-control-group'>
            <label></label>
            <button type='submit' className='pure-button pure-button-primary'>Gravar</button>
          </div>
        </form>
      </div>
    )
  }
}

export class Table extends Component {
  render () {
    return (
      <div>
        <table className='pure-table'>
          <thead>
            <tr>
              <th>name</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.list.authors && this.props.list.authors.map(autor => {
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

class AuthorBox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: [],
    }
  }

  componentDidMount () {
    this.fetchTableContent()
  }

  fetchTableContent = async () => {
    await fetch(APP_SERVER_URL)
      .then(res => res.json())
      .then(list => this.setState({
        list,
      }))
  }

  render () {
    return (
      <div className='content' id='content'>
        <Form callbackListAuthors={this.fetchTableContent}/>
        <Table list={this.state.list}/>
      </div>
    )
  }
}

export default AuthorBox
