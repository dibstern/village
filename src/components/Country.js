import React from 'react';
import Card from './Card';
import CountryCard from './CountryCard';
import Carousel from './Carousel';
import {Button, Grid, Row, Col} from 'react-bootstrap';
import './css/CardHolder.css';
import syriaFlag from '../img/syria_flag.png'

const Country = () => (
  <div className="body">
      <h1>CardHolder Component</h1>
      <Grid>
        <Row className="show-grid">
            <Col xs={6} md={4}>
              <code>
                  <CountryCard 
                        button_text='Syria'
                        button_link="http://www.google.com/"
                        img={syriaFlag}/>
              </code>
            </Col>
            <Col xs={6} md={4}>
              <code>
                  <CountryCard 
                        button_text='Country name'
                        button_link="http://www.google.com/"
                        img={syriaFlag}/>
              </code>
            </Col>
            <Col xs={6} md={4}>
              <code>
                  <CountryCard 
                        button_text='Country name'
                        button_link="http://www.google.com/"
                        img={syriaFlag}/>
              </code>
            </Col>
        </Row>
       

  
</Grid>
 
</div>
);

export default Country;
