import React, { Component } from 'react';
import fetch from 'node-fetch';

const url = 'http://localhost:3001/api/comentarios/1'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      res: []
    }
  }

  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({res})
        console.log(this.state.res)
      })
  }

  render() {
    return (
      <div>
        {JSON.stringify(this.state.res)}
      </div>
    );
  }
}

export default App;