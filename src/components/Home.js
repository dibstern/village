import React from 'react';
import VillageNavBar from './VillageNavBar';
import SimpleSlider from './Slider';
import MyFancyComponent from './Map';
import ProgressInstance from './ProgressBar';
import ServiceHolder from './ServiceHolder';
import { Container, Row, Col } from 'reactstrap';
import WelcomeMessage from './Welcome';



const Home = () => (
  <div>
    <VillageNavBar id="home"/>
    <Container>
        <Row>
          <Col>
            <WelcomeMessage/>
          </Col>
        </Row>

        <Row>
          <Col xs="6" sm="3"><ProgressInstance/></Col>
          <Col xs="6" sm="3"></Col>
          <Col xs="6" sm="3"></Col>
          
          <Col xs="6" sm="3"></Col>
        </Row>
    </Container>
    <br/>
   
    <br/>
    <SimpleSlider/>
    <br/>
    <ServiceHolder/>
    {/*
    To use bootstrap components see : https://react-bootstrap.github.io/components/popovers/ 
    First import the component from react-bootstrap
      import { Button } from 'react-bootstrap';
    */}
  </div>
);

export default Home;
