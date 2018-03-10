import React from 'react';
import {ProgressBar} from 'react-bootstrap';
import './css/CardHolder.css';

const now = 60;

const ProgressInstance = () => ( 
   <div className="body"> 
<h2> My Village </h2>
<ProgressBar bsStyle="success" now={now} label={`${now}%`} />
</div>
);


export default ProgressInstance;