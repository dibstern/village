import React from 'react';
import './css/CardHolder.css';

const Paragraph = (props) => (
      <div className="text">
        <p className="cardParagraph">{ props.text }</p>
    </div>
);

export default Paragraph;