import React, { Component } from 'react'
import fetch from 'node-fetch'
import { withStyles } from '@material-ui/core/styles'
import './css/pure-min.css'
import './css/side-menu.css'

const findUsersurl = 'http://localhost:3000/find/users'
// const createUserUrl = 'http://localhost:3000/auth/register'

const styles = theme => ({
  table: {
    border: '1px solid',
  },
})

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      res: [],
      name: '',
      email: '',
      password: '',
    }
  }

  componentWillMount () {
    fetch(findUsersurl)
      .then(res => res.json())
      .then(json => {
        this.setState({ res: json })
      })
      .catch(e => console.error(`ERROR: ${e}`))
  }

  setName = e => this.setState({ name: e.target.value })
  setEmail = e => this.setState({ email: e.target.value })
  setPassword = e => this.setState({ password: e.target.value })

  render () {
    return (
      <div id="layout">
        <a href="#menu" id="menuLink" className="menu-link">
          <span></span>
        </a>
        <div id="menu">
          <div className="pure-menu">
            <a className="pure-menu-heading" href="#">Company</a>

            <ul className="pure-menu-list">
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Autor</a></li>
              <li className="pure-menu-item"><a href="#" className="pure-menu-link">Livro</a></li>
            </ul>
          </div>
        </div>

        <div id="main">
          <div className="header">
            <h1>Home</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(App)
