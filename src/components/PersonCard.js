import React from 'react';
import './css/CardHolder.css'
import {Card} from 'reactstrap'
import {CardImg, CardBody, Button} from 'reactstrap';
import FA from 'react-fontawesome';

// Uses https://reactstrap.github.io/components/card/
// Maybe use props.pic?

const wellStyles = {margin: '10px auto 10px'};

const PersonCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg className="cardImage" src={props.img} alt="Card image cap" />
        <CardBody>
          <section className = "personParagraph">
          Name: {props.name} <br/>
          Phone Number: {props.mobile} <br/>
          Type: {props.type}
          
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
