import React from 'react';
import './css/Card.css';
import { Button } from 'react-bootstrap';
import LogInForm from './LogInForm';

const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };

class SignUpButton extends React.Component {
    constructor() {
      super();
      this.state = {
        showReply: false
      }
    }
    onClick(e){
      e.preventDefault();
      this.setState({showReply: !this.state.showReply})
    }
    render() {
      return (
  <div style={wellStyles}>
    <Button id="signup" bsStyle="warning" bsSize="large" block>
      Sign Up
    </Button>
    <br/>
    <a onClick={this.onClick.bind(this)} href='#login'>
    <Button id="login" bsSize="large" block>
      Log In
    </Button>
    </a>
    <br/>
    {this.state.showReply && <LogInForm/>}
  </div>
)
    }
};

export default SignUpButton;