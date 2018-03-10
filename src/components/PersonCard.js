import React from 'react';
import { Carousel } from 'react-bootstrap';
import './css/CardHolder.css'
import {Card} from 'reactstrap'
import {CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button} from 'reactstrap';
import FA from 'react-fontawesome';

// Uses https://reactstrap.github.io/components/card/
// Maybe use props.pic?

const wellStyles = {margin: '10px auto 10px'};

const PersonCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg center width="80%" src={props.img} alt="Card image cap" />
        <CardBody>
          <section className = "personParagraph">
          <p> Name: {props.name} </p>
          <p> Phone Number: {props.mobile} </p>
          <p> Type: {props.type} </p>
          
              <Button className = "personButton"
                  outline color="info"
                  size="large"
                  block
                  href={ props.button_link }>
                  <FA name="comment" />
                      {props.button_text}
              </Button>
          </section>
        </CardBody>
      </Card>
    </div>
  );
};

export default PersonCard;
