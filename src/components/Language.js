import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Jumbotron , Container} from 'reactstrap';

export default class LanguageDropDown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
    <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3" align="center" >What language do you speak?</h1>
        </Container>  
      </Jumbotron> 

      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} align="center"> 
        <DropdownToggle caret>
          Select Language
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Language1</DropdownItem>
          <DropdownItem header>Language2</DropdownItem>
          <DropdownItem header>Language3</DropdownItem>
        </DropdownMenu>
      </Dropdown>

      </div>
    );
  }
}
