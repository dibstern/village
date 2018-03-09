import React from 'react';
import Card from './Card';
import CountryCard from './CountryCard';
import Carousel from './Carousel';
import {Button, Grid, Row, Col} from 'react-bootstrap';
import './css/CardHolder.css';
import syriaFlag from '../img/syria_flag.png'
import ssFlag from '../img/south_sudan_flag.png'
import congoFlag from '../img/congo_flag.png'
import myanmarFlag from '../img/myanmar_flag.png'
import afghanFlag from '../img/afghan_flag.png'
import somaliaFlag from '../img/somalia_flag.png'

const Country = () => (
  <div className="body">
      <h1>Choose Your Country</h1>
      <Grid>
        <Row className="show-grid">
            <Col xs={6} md={4}>
                  <CountryCard 
                        button_text='Syria'
                        button_link="#signup"
                        img={syriaFlag}/>
            </Col>
            <Col xs={6} md={4}>
                  <CountryCard 
                        button_text='South Sudan'
                        button_link="#signup"
                        img={ssFlag}/>
            </Col>
            <Col xs={6} md={4}>
                  <CountryCard 
                        button_text='Afghanistan'
                        button_link="#signup"
                        img={afghanFlag}/>
            </Col>
            </Row>
            <Row className="show-grid">
            <Col xs={6} md={4}>
                  <CountryCard 
                        button_text='DRCongo'
                        button_link="#signup"
                        img={congoFlag}/>
            </Col>
            <Col xs={6} md={4}>
                  <CountryCard 
                        button_text='Myanmar'
                        button_link="#signup"
                        img={myanmarFlag}/>
            </Col>
            <Col xs={6} md={4}>
                  <CountryCard 
                        button_text='Somalia'
                        button_link="#signup"
                        img={somaliaFlag}/>
            </Col>
        </Row>
</Grid>
 
</div>
);

export default Country;
