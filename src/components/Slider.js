import React from 'react';
import Slider from 'react-slick';
import PersonCard from './PersonCard';
import Man from '../img/buddy.jpeg';
import Man2 from '../img/doctor_connected.jpg';
import Man3 from '../img/translator.jpg';
import Man4 from '../img/father.jpg';
import Man5 from '../img/coder.jpg';
import { Card, Icon } from 'semantic-ui-react'


export default class SimpleSlider extends React.Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
      };
      return (
        <div style={{'paddingLeft' : '5%'}}>
          <h2> My Connections </h2>
          <Slider {...settings}>
          <div><h3><PersonCard 
                    img = {Man}
                    name = "David Stern"
                    mobile = "0401231232"
                    type = "Buddy"
                    button_text = "Contact"
                    button_link = "#" 
                    
          
          /></h3></div>
          <div><h3><PersonCard 
                    img = {Man2}
                    name = "Micheal James"
                    mobile = "0401231232"
                    type = "Doctor"
                    button_text = "Contact"
                    button_link = "#" 
          
          /></h3></div>
           <div><h3><PersonCard 
                    img = {Man3}
                    name = "Judie Williams"
                    mobile = "0401231232"
                    type = "Translator"
                    button_text = "Contact"
                    button_link = "#" 
          
          /></h3></div>
          <div><h3><PersonCard 
                    img = {Man4}
                    name = "Father Joseph"
                    mobile = "0401231232"
                    type = "Bishop"
                    button_text = "Contact"
                    button_link = "#" 
          
          /></h3></div>
         
          <div><h3><PersonCard 
                    img = {Man5}
                    name = "Lucie James"
                    mobile = "0401231232"
                    type = "Coding Mentor"
                    button_text = "Contact"
                    button_link = "#" 
          
          /></h3></div>
          
          <div><h3> <Card
                    image={Man}
                    header='David Stern'
                    meta='Buddy'
                    //description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                    extra='Contact: 0465667363'
                  />
          </h3></div>

          <div><h3> <Card
                    image={Man2}
                    header="Micheal James"
                    meta='Doctor'
                    //description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                    extra={<a href="#">Contact: 0465667363</a>}
                  />
          </h3></div>

                    <div><h3> <Card
                    image={Man3}
                    header='David Stern'
                    meta='Buddy'
                    //description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                    extra='Contact: 0465667363'
                  />
          </h3></div>

                    <div><h3> <Card
                    image={Man4}
                    header='David Stern'
                    meta='Buddy'
                    //description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                    extra='Contact: 0465667363'
                  />
          </h3></div>

          <div><h3> <Card
                    image={Man5}
                    header='David Stern'
                    meta='Buddy'
                    //description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                    extra='Contact: 0465667363'
                  />
          </h3></div>
        </Slider>
        </div>
      );
    }
  }