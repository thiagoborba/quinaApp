import React, { Component } from 'react'
import fetch from 'node-fetch'
import { withStyles } from '@material-ui/core/styles';

const findUsersurl = 'http://localhost:3000/find/users'
// const createUserUrl = 'http://localhost:3000/auth/register'


const styles = theme => ({
  table: {
    border: '1px solid'
  }
});

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      res: [],
      name:'',
      email:'',
      password:'' 
    }
  }

  componentWillMount() {
    fetch(findUsersurl)
    .then(res => res.json())
    .then(json => {
      this.setState({res: json})
    })
    .catch(e => console.error(`ERROR: ${e}`))    
  }

  setName = e => this.setState({name: e.target.value});
  setEmail = e => this.setState({email: e.target.value});
  setPassword = e => this.setState({password: e.target.value});


  render() {
    const { classes } = this.props
      return (
        <div>
          <table className={classes.table}>
            <thead>
              <tr>
                <th className={classes.table}>nome</th>
                <th className={classes.table}>Email</th>
              </tr>
            </thead>
            <tbody>
              {this.state.res.users && this.state.res.users.map( user => {
                return(
                  <tr key={user._id}>
                    <td className={classes.table}>{user.name}</td>
                    <td className={classes.table}>{user.email}</td>
                  </tr>
                ) 
              })}
            </tbody>
          </table>
          
          <input
            value={this.state.name}
            onChange={this.setName}
          >
          </input>
          <input
            value={this.state.email}
            onChange={this.setEmail}
          >
          </input>
          <input
            value={this.state.password}
            onChange={this.setPassword}
          />
          
          <button
          >
            sendData
          </button>
        </div>
      );
    }
  }

export default withStyles(styles)(App)