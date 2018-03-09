    import React from 'react';
    import Card from './Card';
    import Carousel from './Carousel';
    import './css/CardHolder.css';
    import redCrossImg from '../img/red_cross.png';
    import Title from './Title';
    import Paragraph from './Paragraph';
    import SignUpButton from './SignUpButton';
    
    const CardHolder = () => (
      <div className="body">
      <Title text = "Build Your Village"/>
      <Paragraph text = "Find a local buddy."/>
      <Paragraph text = "Get involved with the community." />

      <div className = "buttonStyle">
            <SignUpButton/>
      </div>
      </div>
      
    );
    
    export default CardHolder;
    