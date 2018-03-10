import React from 'react';
import LogInForm from './LogInForm';
import './css/NewAge.css';
import ref2 from '../img/refugee2.png'

class Login  extends React.Component {
    render() {

        var divStyle = {width: '100%', height:'200px', display: 'block'}
        var imgStyle = {verticalAlign: 'middle', 'width': '80%', height: 'auto', 'padding-top':'100px', 'padding-left':'50px'}
      return (
        <header class="masthead">
        <div class="container h-100">
          <div class="row h-100">
            <div class="col-lg-7 my-auto">
              <div class="header-content mx-auto">
              <div style={divStyle}></div>
              <h2>Login to your village</h2>
              <LogInForm/>
                </div>
            </div>
            <div class="col-lg-5 my-auto">
              <img src={ref2} style={imgStyle}/>
            </div>
          </div>
        </div>
      </header>
)
    }
};

export default Login;