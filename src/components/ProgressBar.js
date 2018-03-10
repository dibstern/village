import React from 'react';
import {ProgressBar} from 'react-bootstrap';
import './css/CardHolder.css';

const ProgressInstance = () => ( 
   <div className="body"> 
<h3> Your Village Size </h3>
<ProgressBar bsStyle="success" now='60' label={`5 connections`}  align= "center"/>
</div>
);


export default ProgressInstance;