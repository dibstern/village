// api-tester.js
import React, { Component } from 'react';

const API = 'http://localhost:8000';
const LOGIN = API + '/login';
const PROFILE = API + "/profile/bishal"

class ApiTester extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      term: '',
      isToggleOn: true,
      username: '',
    };
  }
  render() {
    return (
      <div>
        <input 
          value={this.state.term}
          onChange={event => this.setState({term: event.target.value})} />
        <br/>
        The value of the input: {this.state.term}
        <br/>
        The value of username: {this.state.username}
        <br/>
        <button onClick={this.getApiUser}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
        <br/>
        The value of the post response: {this.postApiLogin("bishal", "psswrd")}
      </div>
    );
  }

  // Working!
  getApiUser = () => {
    fetch(PROFILE, {})
    .then(response => {return response.json();})
    .then(j => {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn,
        username: j.profile.username
      }))
    })
  };   

  // Working!
  postApiLogin = (username, password) => {
    fetch(LOGIN, {
      method: 'POST',
      body: "username=" + username + "&password=" + password,
      headers: new Headers({'Content-Type': 'application/x-www-form-urlencoded'})
    }).then(response => {
      return response.json();
    }).then(j => {
      console.log(j);
      console.log(j.user.id);
    })
  };

}

export default ApiTester;