import React from 'react';
import Slider from 'react-slick';
import PersonCard from './PersonCard';
import Man from '../img/man1.jpg';

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
        <div>
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
                    img = {Man}
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
                    img = {Man}
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
                    img = {Man}
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
                    img = {Man}
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
                    img = {Man}
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