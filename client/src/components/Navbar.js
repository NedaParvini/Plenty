import React from 'react';
import { NavLink } from "react-router-dom";
import Logo from '../../src/logo.png'


function NavMobile() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navigation") {
    x.className += " responsive";
  } else {
    x.className = "navigation";
  }
}

function Navbar() {
    return (
        <div className="navigation" id="myTopnav">
        <nav className="navbar navbar-expand navbar-dark">
          <div className="container">
            <NavLink class="logoee" to="/" >
            <img src={Logo} alt="Logo" />
            </NavLink>
            <div >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item" class="active">
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
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Log in
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signup">
                    Sign up
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/profile">
                    Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/logout">
                    Log out
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
