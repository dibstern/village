import React from 'react';
import './css/Card.css';
import { Button } from 'react-bootstrap';
import LogInForm from './LogInForm';

const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };

class Login extends React.Component {
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
          <a onClick={this.onClick.bind(this)} href='#login'>
            <br/>
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

export default Login;