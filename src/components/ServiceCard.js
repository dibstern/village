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
        <CardImg center width="80%" src={props.img} alt="Card image cap" />
        <CardBody>
          
              <Button className = "personButton"
                  color=""
                  size="large"
                  block
                  href={ props.button_link }>
                      {props.button_text}
              </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default PersonCard;
