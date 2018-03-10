import React from 'react';
import VillageNavBar from './VillageNavBar';
import SimpleSlider from './Slider';
import MyFancyComponent from './Map';
import ProgressInstance from './ProgressBar';
import ServiceHolder from './ServiceHolder';

const Home = () => (
  <div>
    <VillageNavBar id="home"/>
    <br/>
    <ProgressInstance/>
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
