import React from 'react';
import ServiceCard from './ServiceCard';
import {Button, Grid, Row, Col} from 'react-bootstrap';
import './css/CardHolder.css';
import mother from '../img/mother.png'
import reunion from '../img/reunion.png'
import groceries from '../img/groceries.png'
import medical from '../img/medical.png'
import car from '../img/car.png'
import house from '../img/house.png'
import translator from '../img/translator.png'
import books from '../img/books.png'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ServiceHolder = () => (
  <div>
      <h2>Choose Your Services</h2>
      <Grid>
        <Row className="show-grid">
            <Col xs={4} md={3}>
                  <ServiceCard 
                        button_text='Maternity'
                        button_link="#signup"
                        img={mother}/>
            </Col>
            <Col xs={4} md={3}>
                  <ServiceCard 
                        button_text='Community'
                        button_link="#signup"
                        img={reunion}/>
            </Col>
            <Col xs={4} md={3}>
                  <ServiceCard 
                        button_text='Groceries'
                        button_link="#signup"
                        img={groceries}/>
            </Col>
            <Col xs={4} md={3}>
                  <Link to="/doctor">
                        <ServiceCard 
                              button_text='Medical'
                              button_link="#signup"
                              img={medical}/>
                  </Link>
            </Col>
            </Row>
            <Row className="show-grid">
            <Col xs={4} md={3}>
            <ServiceCard 
                  button_text='Transport'
                  button_link="#signup"
                  img={car}/>
            </Col>
            <Col xs={4} md={3}>
                  <ServiceCard 
                        button_text='Housing'
                        button_link="#signup"
                        img={house}/>
            </Col>
            <Col xs={4} md={3}>
                  <ServiceCard 
                        button_text='Interpreter'
                        button_link="#signup"
                        img={translator}/>
            </Col>
            <Col xs={4} md={3}>
                  <ServiceCard 
                        button_text='Learning'
                        button_link="#signup"
                        img={books}/>
            </Col>
        </Row>
</Grid>
 
</div>
);

export default ServiceHolder;
