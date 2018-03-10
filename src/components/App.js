import React from 'react';
import Sidebar from './Sidebar';
import CardHolder from './CardHolder';
import Country from './Country.js';
import VillageNavBar from './VillageNavBar';
import SimpleSlider from './Slider';
import MyFancyComponent from './Map';
import ProgressInstance from './ProgressBar';
import ServiceHolder from './ServiceHolder';
import LanguageDropDown from './Language.js'

const App = () => (
  <div>
    <Country/>
    <LanguageDropDown/>
    <CardHolder />
    <VillageNavBar id="home"/>
    <br/>
    <ProgressInstance/>
    <br/>
    <SimpleSlider/>
    <br/>
    <MyFancyComponent
  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBFM4v4ZB4gYCWukuBHF0rv0rTVl5gn40M&v=3.exp&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}/>
    <br/>
    <ServiceHolder/>
    {/*
    To use bootstrap components see : https://react-bootstrap.github.io/components/popovers/ 
    First import the component from react-bootstrap
      import { Button } from 'react-bootstrap';
    */}
  </div>
);

export default App;
