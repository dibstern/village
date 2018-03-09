import React from 'react';
import './css/CardHolder.css';

const Title = (props) => (
      <div className="text">
        <h1 className="cardTitle">{ props.text }</h1>
    </div>
);

export default Title;