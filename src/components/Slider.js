import React from 'react';
import Slider from 'react-slick';
import PersonCard from './PersonCard';
import Man from '../img/man1.jpg';
import Man2 from '../img/man2.jpg';
import Man3 from '../img/man3.jpeg';
import Man4 from '../img/man4.jpg';
import Man5 from '../img/man5.jpg';


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
                    name = "David Stern"
                    mobile = "0401231232"
                    type = "Buddy"
                    button_text = "Contact"
                    button_link = "#" 
          
          /></h3></div>
          <div><h3><PersonCard 
                    img = {Man3}
                    name = "David Stern"
                    mobile = "0401231232"
                    type = "Buddy"
                    button_text = "Contact"
                    button_link = "#" 
          
          /></h3></div>
          <div><h3><PersonCard 
                    img = {Man4}
                    name = "David Stern"
                    mobile = "0401231232"
                    type = "Buddy"
                    button_text = "Contact"
                    button_link = "#" 
          
          /></h3></div>
          <div><h3><PersonCard 
                    img = {Man5}
                    name = "David Stern"
                    mobile = "0401231232"
                    type = "Buddy"
                    button_text = "Contact"
                    button_link = "#" 
          
          /></h3></div>
          <div><h3><PersonCard 
                    img = {Man}
                    name = "David Stern"
                    mobile = "0401231232"
                    type = "Buddy"
                    button_text = "Contact"
                    button_link = "#" 
          
          /></h3></div>
          <div><h3><PersonCard 
                    img = {Man3}
                    name = "David Stern"
                    mobile = "0401231232"
                    type = "Buddy"
                    button_text = "Contact"
                    button_link = "#" 
          
          /></h3></div>
          <div><h3><PersonCard 
                    img = {Man4}
                    name = "David Stern"
                    mobile = "0401231232"
                    type = "Buddy"
                    button_text = "Contact"
                    button_link = "#" 
          
          /></h3></div>
          <div><h3><PersonCard 
                    img = {Man5}
                    name = "David Stern"
                    mobile = "0401231232"
                    type = "Buddy"
                    button_text = "Contact"
                    button_link = "#" 
          
          /></h3></div>
          <div><h3><PersonCard 
                    img = {Man2}
                    name = "David Stern"
                    mobile = "0401231232"
                    type = "Buddy"
                    button_text = "Contact"
                    button_link = "#" 
          
          /></h3></div>
        </Slider>
        </div>
      );
    }
  }