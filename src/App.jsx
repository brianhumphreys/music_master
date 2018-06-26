import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon}  from 'react-bootstrap';

var querystring = require('querystring');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      client_id: 'e4f7a9fe6f88409684b8b9df8a68a051',
      client_secret: '9a20ae86f65c470db041322937a871b9',
      redirect_uri: 'music-master-login://callback'
    }
  }


//https://accounts.spotify.com/authorize/?client_id=e4f7a9fe6f88409684b8b9df8a68a051&response_type=code&redirect_uri=music-master-login://callback
  search() {
    console.log('this.state', this.state);
/*
    res.redirect('https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        client_id: this.state.client_id,
        response_type: 'code',
        redirect_uri: this.state.redirect_uri,
      }));

    const BASE_AUTH = 'https://accounts.spotify.com/authorize/?';
    const AUTH_URL = `${BASE_AUTH}&client_id=${this.state.client_id}&response_type=code&redirect_uri=${this.state.redirect_uri}`;
    console.log('AUTH_URL', AUTH_URL)
    fetch(AUTH_URL, {
      method: 'GET'
    })
    .then(respond => respond.json())
    .then(json => console.log('json', json));
*/
    const BASE_URL = 'https://api.spotify.com/v1/search?';
    const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
    console.log('FETCH_URL', FETCH_URL)
    fetch(FETCH_URL, {
      method: 'GET'
    })
    .then(respond => respond.json())
    .then(json => console.log('json', json));
  }




  render() {
    return (
      <div className="App">
        <div className="App-title">Music Master App</div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for an Artist"
              value= {this.state.query}
              onChange={event => {this.setState({query: event.target.value})}}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.search();
                }
              }}
            />
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>

        </FormGroup>
        <div className="Profile">
          <div>Artist Picture</div>
          <div>Artist Name</div>
        </div>
        <div className="Gallery">
          Gallery
        </div>
      </div>

    )
  }
}

export default App;
