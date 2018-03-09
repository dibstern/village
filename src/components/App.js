import React from 'react';
import Sidebar from './Sidebar';
import CardHolder from './CardHolder';
import Country from './Country.js';
import VillageNavBar from './VillageNavBar';
import SimpleSlider from './Slider';

const App = () => (
  <div>
    <Country/>
    <CardHolder />
    <VillageNavBar id="home"/>
    <SimpleSlider/>
    {/*
    To use bootstrap components see : https://react-bootstrap.github.io/components/popovers/ 
    First import the component from react-bootstrap
      import { Button } from 'react-bootstrap';
    */}
  </div>
);

export default App;
