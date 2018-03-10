import React, {Component} from 'react'
import { Header, Image, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import avatar from '../img/avatar_welcome.jpg';

const API = 'http://localhost:8000/'

class WelcomeMessage extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      name: '',
      isToggleOn: true,
    };
    this.getApiUser();
  }

  render() {
    return (
      <Header as='h1' >
        <Image 
            circular src={avatar}
        />
        {' '}Welcome {this.state.name}
      </Header>
    )};

    getApiUser = () => {
        console.log("Log!!")
        const profile = API + 'profile/' + window.location.pathname.slice(6)
        fetch(profile, {})
        .then(response => {return response.json();})
        .then(j => {
          console.log(j);
          this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
            name: j.profile.name
          }));
        })
    };
}

export default WelcomeMessage