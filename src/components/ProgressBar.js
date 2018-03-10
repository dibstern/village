import React from 'react';
import {ProgressBar} from 'react-bootstrap';

const now = 60;

const ProgressInstance = () => ( 
   <div> 
<h2> My Village </h2>
<ProgressBar bsStyle="success" now={now} label={`${now}%`} />
</div>
);


export default ProgressInstance;