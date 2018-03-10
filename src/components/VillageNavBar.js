import 'semantic-ui-css/semantic.min.css';
import React, { Component } from 'react'
import { Input, Menu, Dropdown, Button } from 'semantic-ui-react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';

export default class MenuExampleSizeMassive extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Link to="/">
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        </Link>
        <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />

        <Menu.Menu position='right'>
          <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Arabic</Dropdown.Item>
              <Dropdown.Item>Pashto</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Link to="/login">
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
          </Link>
        </Menu.Menu>
      </Menu>
    )
  }
}
