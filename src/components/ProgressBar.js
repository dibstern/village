import React from 'react';
import {ProgressBar} from 'react-bootstrap';
import './css/CardHolder.css';

const now = 60;

const ProgressInstance = () => ( 
   <div className="body"> 
<h3> Village Level </h3>
<ProgressBar bsStyle="success" now={now} label={`${now}%`}  align= "center"/>
</div>
);


export default ProgressInstance;