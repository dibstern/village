import React, {Component} from 'react';
import './css/Card.css';
import { Button, Form, Col, FormGroup, ControlLabel, FormControl, Checkbox } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

const API_LOGIN = 'http://localhost:8000/login';


class LogInForm extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      username: '',
      password: '',
      valid: false,
      isLoading: false

    };
    this.handleChange = this.handleChange.bind(this);
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {

    const { isLoading } = this.state;

    return (
      <Router>
      <div>
      <Form horizontal>
      <FormGroup 
        controlId="formHorizontalEmail"
      >
        <Col sm={12}>
          <FormControl
            type="text" 
            placeholder="Username"
            onBlur={this.handleUserChange}
          />
        </Col>
      </FormGroup>

      <FormGroup
        controlId="formHorizontalPassword"
      >
        <Col sm={12}>
          <FormControl
            type="password" 
            placeholder="Password"
            onBlur={this.handlePwdChange}
          />
        </Col>
      </FormGroup>

      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Checkbox>Remember me</Checkbox>
        </Col>
      </FormGroup>

      <FormGroup>
        <Col smOffset={2} sm={10}>
          <Link to="/home">
            <Button 
              type="submit" 
              onClick={() => {this.login(this.state.username, this.state.password)}}
            >
            Sign in
            </Button>
          </Link>
        </Col>
      </FormGroup>
    </Form>
    this.state.username = {this.state.username}
    <br/>
    this.state.password = {this.state.password}
    </div>
    </Router>
  )};
// (({val: this.state.valid ? "#home" : "#login"}).val)

  handleUserChange = (event) => {
    this.setState({username: event.target.value})
  };

  handlePwdChange = (event) => {
    this.setState({password: event.target.value})
  };


  login = (username, password) => {
    this.postApiLogin(username, password);
  };


  postApiLogin = (username, password) => {
    fetch(API_LOGIN, {
      method: 'POST',
      body: "username=" + username + "&password=" + password,
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    }).then(response => {
      return response.json();
    }).then(j => {
      console.log(j);
      if (j.status === 0) {
        this.setState({valid: true})
      }
    })
  };


};

export default LogInForm;