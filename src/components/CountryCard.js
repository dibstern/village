import React from 'react';
import { Carousel } from 'react-bootstrap';
import './css/Country.css'
import {Card} from 'reactstrap'
import {CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

// Uses https://reactstrap.github.io/components/card/
// Maybe use props.pic?

const wellStyles = { maxWidth: 400, margin: '0 auto 10px'};

const CountryCard = (props) => {
  return (
    <div classname = "countryflag" >
      <Card>
        <CardImg top width="100%" src={props.img} alt="Card image cap" />
        <CardBody>
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
      </Card>
    </div>
  );
};

export default CountryCard;
