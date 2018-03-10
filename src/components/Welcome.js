import React from 'react'
import { Header, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import avatar from '../img/avatar_welcome.jpg';


const WelcomeMessage = () => (
  <Header as='h1' >
    <Image circular src={avatar} />
    {' '}Welcome John
  </Header>
)

export default WelcomeMessage