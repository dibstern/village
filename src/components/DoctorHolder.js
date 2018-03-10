import React from 'react';
import PersonCard from './PersonCard';
import Slider from 'react-slick';
import {Button, Grid, Row, Col} from 'react-bootstrap';
import './css/CardHolder.css';
import doctor1 from '../img/doctor1.png'
import doctor2 from '../img/doctor2.png'
import doctor3 from '../img/doctor3.png'

const DoctorHolder = () => (
      <div>
            <h2> Recommended Doctors for You </h2>
      <div className = "selection-area">
             <PersonCard 
                        name = "Abu Davi"
                        mobile = "0401231232"
                        type = "Doctor"
                        button_text = "Contact"
                        button_link = "#connect" 
                        img = {doctor1}/>
                        <br/>
                  <PersonCard 
                        name='Sandra Abdul'
                        mobile = "0401231562"
                        type = "Doctor"
                        button_text = "Contact"
                        button_link = "#connect" 
                        img={doctor2}/>

                  <PersonCard 
                        name='Bishal Anva'
                        mobile = "0401231233"
                        type = "Doctor"
                        button_text = "Contact"
                        button_link = "#connect" 
                        img={doctor3}/>
      </div>

</div>

      );

export default DoctorHolder;

