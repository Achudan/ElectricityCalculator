import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-default navbar-custom navbar-fixed-top" id="mainNav">
    <div className="container">
      <Link className="navbar-brand" to="/">Electricity Calculator</Link>
      {/* <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fas fa-bars"></i>
      </button> */}
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
          <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/unitCalc">Unit Calculator</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/billCalc">Bill Calculator</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
        )
    }
}

export default NavBar