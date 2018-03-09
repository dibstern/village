import React from 'react';
import './css/CardHolder.css';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

const VillageNavBar = (props) => (
<Navbar collapseOnSelect>
<Navbar.Header>
  <Navbar.Brand>
    <a href="#brand">My Village</a>
  </Navbar.Brand>
  <Navbar.Toggle />
</Navbar.Header>
<Navbar.Collapse>
  <Nav>
    <NavItem eventKey={1} href="#">
      Home
    </NavItem>
    <NavItem eventKey={2} href="#">
      Profile
    </NavItem>
  </Nav>
</Navbar.Collapse>
</Navbar>
);

export default VillageNavBar;