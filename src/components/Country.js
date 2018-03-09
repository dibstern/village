import React from 'react';
import Card from './Card';
import CountryCard from './CountryCard';
import Carousel from './Carousel';
import {Button, Grid, Row, Col} from 'react-bootstrap';
import { Jumbotron, Container } from 'reactstrap';
import './css/CardHolder.css';
import syriaFlag from '../img/syria_flag.png'
import ssFlag from '../img/south_sudan_flag.png'
import iraqFlag from '../img/iraq_flag.png'
import myanmarFlag from '../img/myanmar_flag.png'
import afghanFlag from '../img/afghan_flag.png'
import somaliaFlag from '../img/somalia_flag.png'




const Country = () => (
  

  <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3" align="center" >Country of Origin</h1>
        </Container>
        
      </Jumbotron>

      <Grid>
        <Row className="show-grid">
            <Col xs={6} md={4}>
             
                  <CountryCard 
                        button_text='Syria'
                        button_link="#signup"
                        img={syriaFlag}/>
              
            </Col>
            <Col xs={6} md={4}>
              
                  <CountryCard 
                        button_text='South Sudan'
                        button_link="#signup"
                        img={ssFlag}/>
             
            </Col>
            <Col xs={6} md={4}>
              
                  <CountryCard 
                        button_text='Afghanistan'
                        button_link="#signup"
                        img={afghanFlag}/>
              
            </Col>
            </Row>
            <Row className="show-grid">
            <Col xs={6} md={4}>
              
              <CountryCard 
                    button_text='Somalia'
                    button_link="http://www.google.com/"
                    img={somaliaFlag}/>
          
          </Col>
            
            <Col xs={6} md={4}>
              
                  <CountryCard 
                        button_text='Myanmar'
                        button_link="#signup"
                        img={myanmarFlag}/>
              
            </Col>

            <Col xs={6} md={4}>
              
              <CountryCard 
                    button_text='Sudan'
                    button_link="http://www.google.com/"
                    img={iraqFlag}/>
          
          </Col>
           
        </Row>
</Grid>
 
</div>

);

export default Country;

// import React from 'react';
// import Card from './Card';
// import CountryCard from './CountryCard';
// import Carousel from './Carousel';
// import {Button, Grid, Row, Col} from 'react-bootstrap';
// import './css/CardHolder.css';
// import countryflag from './css/Country.css';
// import syriaFlag from '../img/syria_flag.png'
// import ssFlag from '../img/south_sudan_flag.png'
// import congoFlag from '../img/congo_flag.png'
// import myanmarFlag from '../img/myanmar_flag.png'
// import afghanFlag from '../img/afghan_flag.png'
// import somaliaFlag from '../img/somalia_flag.png'
// import { Thumbnail } from 'react-bootstrap';

// const Country = () => (
//   <div className="body">
//       <h1>Choose Your Country</h1>
//       <Grid>
//   <Row>
//     <Col xs={6} md={4}>
//       <Thumbnail src={syriaFlag} alt="242x200">
//         <h1>
//           <Button bsStyle="primary" >Syria</Button>   
//         </h1>
//       </Thumbnail>
//     </Col>
//     <Col xs={6} md={4}>
//       <Thumbnail src={afghanFlag} alt="242x200">
//         <h1 classname="countryflag">
//           <Button bsStyle="primary" >Syria</Button>   
//         </h1>
//       </Thumbnail>
//     </Col>
//     <Col xs={6} md={4}>
//       <Thumbnail src={ssFlag} alt="242x200">
//         <h1 classname="countryflag">
//           <Button bsStyle="primary" >Syria</Button>   
//         </h1>
//       </Thumbnail>
//     </Col>
//     <Col xs={6} md={4}>
//       <Thumbnail src={myanmarFlag} alt="242x200">
//         <h1 classname="countryflag">
//           <Button bsStyle="primary" >Syria</Button>   
//         </h1>
//       </Thumbnail>
//     </Col>
//     <Col xs={6} md={4}>
//       <Thumbnail src={congoFlag} alt="242x200">
//         <h1 classname="countryflag">
//           <Button bsStyle="primary" >Syria</Button>   
//         </h1>
//       </Thumbnail>
//     </Col>
//     <Col xs={6} md={4}>
//       <Thumbnail src={somaliaFlag} alt="242x200">
//         <h1 classname="countryflag">
//           <Button bsStyle="primary" >Syria</Button>   
//         </h1>
//       </Thumbnail>
//     </Col>
//   </Row>
// </Grid>;
       

  

 
// </div>
// );

// export default Country;
