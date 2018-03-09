    import React from 'react';
    import Card from './Card';
    import Carousel from './Carousel';
    import {Button, Grid, Row, Col} from 'react-bootstrap';
    import './css/CardHolder.css';
    import redCrossImg from '../img/red_cross.png';
    import Title from './Title';
import Paragraph from './Paragraph';

    const CardHolder = () => (
      <div className="body">
          <Title text = "Build Your Village"/>
          <Paragraph text = "Find a local buddy."/>
          <Paragraph text = "Get involved with the community." />
    </div>
    );

    export default CardHolder;
