import React from 'react';
import { NavLink } from "react-router-dom";
import Logo from '../../src/logo.png'


function Navbar() {
    return (
        <div className="navigation">
        <nav className="navbar navbar-expand navbar-dark">
          <div className="container">
            <NavLink class="logoee" to="/" >
            <img src={Logo} />
            </NavLink>
            <div >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                    <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/form">
                    Form
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
           </nav>
      </div>
      
    );
  }
  
export default Navbar;
