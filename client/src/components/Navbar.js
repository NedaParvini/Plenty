import React from 'react';
import { NavLink } from "react-router-dom";
import Logo from '../../src/plentysmall.png'
import { Navbar, Nav, Container } from 'react-bootstrap';



function Navbars() {
    return (
        
        <Navbar collapseOnSelect fixed ='top' expand='sm' bg='dark' variant="dark">
          <Container>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
         
          <Nav>
            
            
            <NavLink class="logoee" to="/" >
            <img src={Logo} alt="Logo" />
            </NavLink>
         
            
           
           
                  <NavLink className="nav-link" to="/">
                    Home
                    <span className="sr-only">(current)</span>
                  </NavLink>
                  
                 
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                
                  
                  
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
           
                  <NavLink className="nav-link" to="/form">
                    Search
                  </NavLink>
               
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
               
                  <NavLink className="nav-link" to="/signup">
                    Signup
                  </NavLink>
               
                  <NavLink className="nav-link" to="/profile">
                    Profile
                  </NavLink>
              
                  <NavLink className="nav-link" to="/logout">
                    Logout
                  </NavLink>
                
                 
            
            </Nav>
         
      
          </Navbar.Collapse>
          </Container>
          </Navbar>
        
 
      
    );
  }
  
export default Navbars; 
