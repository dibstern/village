    import React from 'react';
    import Card from './Card';
    import Carousel from './Carousel';
    import {Button, Grid, Row, Col} from 'react-bootstrap';
    import './css/CardHolder.css';
    import redCrossImg from '../img/red_cross.png'

    const CardHolder = () => (
      <div className="body">
          <h1 className="cardTitle">Build Your Village</h1>
          <Grid>
            <Row className="show-grid">
                <Col xs={6} md={6}>
                  <code>
                      <Card title='Card 1'
                            subtitle='Card subtitle'
                            text='example text'
                            button_text='Button'
                            button_link="http://www.google.com/"
                            img={redCrossImg}/>
                  </code>
                </Col>
                <Col xs={6} md={6}>
                  <code>
                      <Card title='Card 2'
                            subtitle='Card subtitle'
                            text='example text'
                            button_text='Button'
                            button_link="http://www.google.com/"
                            img={redCrossImg}/>
                  </code>
                </Col>
            </Row>
                <Row className="show-grid">
                    <h2 className = "cardTitle"> News Feed </h2>
                    <Col xs={6} md={4}>
                      <code>
                          <Card title='Card 3'
                                subtitle='Card subtitle'
                                text='example text'
                                button_text='Button'
                                button_link="http://www.google.com/"
                                img={redCrossImg}/>
                      </code>
                    </Col>
                    <Col xs={6} md={4}>
                      <code>
                          <Card title='Card 4'
                                subtitle='Card subtitle'
                                text='example text'
                                button_text='Button'
                                button_link="http://www.google.com/"
                                img={redCrossImg}/>
                      </code>
                    </Col>
                    <Col xs={6} md={4}>
                      <code>
                          <Card title='Card 5'
                                subtitle='Card subtitle'
                                text='example text'
                                button_text='Button'
                                button_link="http://www.google.com/"
                                img={redCrossImg}/>
                      </code>
                    </Col>
            </Row>

      <Row className="show-grid">
        <Col xs={6} md={6}>
          <code>
              <Card title='Card 6'
                    subtitle='Card subtitle'
                    text='example text'
                    button_text='Button'
                    button_link="http://www.google.com/"
                    img={redCrossImg}/>
          </code>
        </Col>
      </Row>
    </Grid>
      <Button
        id="popover-basic"
        placement="right"
        positionLeft={200}
        positionTop={50}
        title="Popover right"
      >
        And here's some <strong>amazing</strong> content. It's very engaging. right?
      </Button>
    </div>
    );

    export default CardHolder;
