import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../jm underheader.jpg'
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
                 className="nav-link active text-light fw-bold fs-4 " aria-current="page" to="home">Home</NavLink>
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
      <div className="row  ">
          <div className="col-md-5 ps-3 mt-3 pt-3 bg-success p-2 text-dark bg-opacity-10">
             <h1 className="fs-1">About JM English International</h1>
             <small className="text-dark fw-bold">With a portfolio of award-winning academic programmes that deliver a range of programmes from English language courses to the UK’s top A-Level College, Oxford International is a premier education group.</small>
          </div>
          <div className="col-md-7 mr-3 mt-3 bg-success p-2 text-dark bg-opacity-10 d-flex justify-content-center">
             <img src={img} alt="" />

          </div>
      </div>
       </div>
       
    );
};

export default Header;