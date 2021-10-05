import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css'
const Header = () => {
    return (
        
       <div className="">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
        <div className="container-fluid">
          <NavLink
           className="navbar-brand text-light fs-3 fw-bold" to="/"><i className="fas fa-university"></i>  JM English</NavLink>
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto ">
              <li className
              ="nav-item">
                <NavLink
                 className="nav-link active text-light fw-bold fs-4 " aria-current="page" activeStyle={{color:"#146ECF"}} to="/home">Home</NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                 className="nav-link text-light fw-bold fs-4" to="/about" >About </NavLink>
              </li>

              <li className="nav-item">
                <NavLink activeStyle={{fontWeight: "bold",color: "red"}}
                 className="nav-link text-light fw-bold fs-4" to="/service">Service</NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                 className="nav-link text-light fw-bold fs-4" to="/booking">Booking Course</NavLink>
              </li>
              
             
 
              
            </ul>
          </div>
        </div>
      </nav>
      
       </div>
       
    );
};

export default Header;