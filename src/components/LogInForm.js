import React from 'react';
import './css/Card.css';
import { Button, Form, Col, FormGroup, ControlLabel, FormControl, Checkbox } from 'react-bootstrap';

const LogInForm = () => (
<Form horizontal>
  <FormGroup controlId="formHorizontalEmail">
    <Col sm={12}>
      <FormControl type="text" placeholder="Username" />
    </Col>
  </FormGroup>

  <FormGroup controlId="formHorizontalPassword">
    <Col sm={12}>
      <FormControl type="password" placeholder="Password" />
    </Col>
  </FormGroup>

  <FormGroup>
    <Col sm={10}>
      <Checkbox>Remember me</Checkbox>
    </Col>
  </FormGroup>

  <FormGroup>
    <Col sm={10}>
      <Button type="submit" a href="#home">
      Login
      </Button>
    </Col>
  </FormGroup>
</Form>
);

export default LogInForm;