import React from 'react';
import VillageNavBar from './VillageNavBar';
import SimpleSlider from './Slider';
import MyFancyComponent from './Map';
import ProgressInstance from './ProgressBar';
import DoctorHolder from './DoctorHolder';
import {Button, Grid, Row, Col} from 'react-bootstrap';

const Doctor = () => (
  <div>
    <VillageNavBar/>
    <br/>
    <Grid>
    <Row className="show-grid">
    <Col xs={6} md={6}>
    <DoctorHolder/>
    </Col>
    <Col xs={6} md={6}>
    <MyFancyComponent
  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBFM4v4ZB4gYCWukuBHF0rv0rTVl5gn40M&v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}/>
  </Col>
  </Row>
    <br/>
    {/*
    To use bootstrap components see : https://react-bootstrap.github.io/components/popovers/ 
    First import the component from react-bootstrap
      import { Button } from 'react-bootstrap';
    */}
    </Grid>
  </div>
);

export default Doctor;
