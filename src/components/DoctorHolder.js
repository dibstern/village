import React from 'react';
import PersonCard from './PersonCard';
import {Button, Grid, Row, Col} from 'react-bootstrap';
import './css/CardHolder.css';
import doctor1 from '../img/doctor1.png'
import doctor2 from '../img/doctor2.png'
import doctor3 from '../img/doctor3.png'

const DoctorHolder = () => (
  <div>
      <h2>Choose Your Services</h2>
      <Grid>
        <Row className="show-grid">
            <Col xs={4} md={4}>
                  <ServiceCard 
                        button_text='Davi Babi'
                        button_link="#connect"
                        img={doctor1}/>
            </Col>
            <Col xs={4} md={4}>
                  <ServiceCard 
                        button_text='Sandra Abdul'
                        button_link="#connect"
                        img={doctor2}/>
            </Col>
            <Col xs={4} md={4}>
                  <ServiceCard 
                        button_text='Bishal Anva'
                        button_link="#connect"
                        img={doctor3}/>
            </Col>
      </Row>
</Grid>
 
</div>
);

export default DoctorHolder;
