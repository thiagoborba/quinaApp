import React, { Component } from 'react';
import fetch from 'node-fetch';

const findUsersurl = 'http://localhost:3000/find/users';
const createUserUrl = 'http://localhost:3000/auth/register'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      res: [],
      newUser: {}
    }
  }

  _getDbContent() {
    fetch(findUsersurl)
      .then(res => res.json())
      .then(res => {
        this.setState({res})
      })
  }

  componentDidMount() {
    this.getDbContent();
  };

  _createTd(){
  }

render() {
    return (
      <div>
        <table>
          {
            this._getDbContent().map(user => {

            } )
          }
        </table>
      </div>
    );
  }
}

export default App;