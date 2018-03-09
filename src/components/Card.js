import React from 'react';
import { Carousel } from 'react-bootstrap';
// import './css/Card.css'
import {Card as RSCard} from 'reactstrap'
import {CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

// Uses https://reactstrap.github.io/components/card/
// Maybe use props.pic?

const wellStyles = { maxWidth: 400, margin: '0 auto 10px'};

const Card = (props) => {
  return (
    <div>
      <RSCard>
        <CardImg top width="100%" src={props.img} alt="Card image cap" />
        <CardBody>
          <CardTitle>{ props.title }</CardTitle>
          <CardSubtitle>{ props.subtitle }</CardSubtitle>
          <CardText>{ props.text }</CardText>
          <div className="well" style={wellStyles}>
              <Button
                  bsStyle="primary"
                  bsSize="large"
                  block
                  href={ props.button_link }>
                      {props.button_text}
              </Button>
          </div>
        </CardBody>
      </RSCard>
    </div>
  );
};



export default Card;
