import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

// ccc- Class component with constructor 
class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/home">
        AyurBasket
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/home"> 
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/navadmin"> 
            Login As Admin
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/navcus"> 
            Login As Customer
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
            </div>
         );
    }
}
 
export default NavBar;