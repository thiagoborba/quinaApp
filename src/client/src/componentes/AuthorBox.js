import React, { Component } from 'react'
import '../css/pure-min.css'
import '../css/side-menu.css'
import fetch from 'node-fetch'
import Form from './Form'
import Table from './Table'

const APP_SERVER_URL = 'http://localhost:3001/api/authors'

class AuthorBox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      authors: [],
    }
  }

  componentDidMount () {
    this.fetchAuthors()
  }

  fetchAuthors = async () => {
    const { data } = await fetch(APP_SERVER_URL)
      .then(res => res.json())
    console.log(data)
    this.setState({ authors: data })
  }

  createNewAuthor = async (author) => {
    console.log(author)
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(author),
    }
    const { data } = await fetch(APP_SERVER_URL, options)
      .then(res => res.json())

    this.setState({ authors: data })
  }

  render () {
    return (
      <div className='content' id='content'>
        <Form
          newAuthor={this.createNewAuthor}
        />
        <Table authors={this.state.authors}/>
      </div>
    )
  }
}

export default AuthorBox
