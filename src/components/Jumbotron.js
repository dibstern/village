
import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Jumbotron = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Country of Origin</h1>
          <p className="lead">Please select your country of origin</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Jumbotron;