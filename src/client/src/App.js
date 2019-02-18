import React, { Component } from 'react'
import './css/pure-min.css'
import './css/side-menu.css'
import TableInput from './componentes/TableInput'
import fetch from 'node-fetch'

const APP_SERVER_URL = 'http://localhost:3000/api/authors'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      lista: [],
      name: '',
      email: '',
      password: '',
    }
  }

  componentDidMount () {
    fetch(APP_SERVER_URL)
      .then(res => res.json())
      .then(data => this.setState({
        lista: data,
      }))
  }

  enviaForm = async (e) => {
    e.preventDefault()

    const { name, email, password } = this.state

    await fetch(APP_SERVER_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then(res => res.json())
      .then(json => console.log('resposta', json))
      .catch(err => console.log(err))
      // NAO ESTA ATUALIZANDO O COMPONENTE
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
      <div id='layout'>
        <a href='#menu' id='menuLink' className='menu-link'>
          <span></span>
        </a>
        <div id='menu'>
          <div className='pure-menu'>
            <a className='pure-menu-heading' href='#'>Company</a>
            <ul className='pure-menu-list'>
              <li className='pure-menu-item'><a href='#' className='pure-menu-link'>Home</a></li>
              <li className='pure-menu-item'><a href='#' className='pure-menu-link'>Autor</a></li>
              <li className='pure-menu-item'><a href='#' className='pure-menu-link'>Livro</a></li>
            </ul>
          </div>
        </div>
        <div id='main'>
          <div className='header'>
            <h1>Cadastro de Autores</h1>
          </div>
          <div className='content' id='content'>
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
                    this.state.lista.authors && this.state.lista.authors.map(autor => {
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
          </div>
        </div>
      </div>
    )
  }
}

export default App
