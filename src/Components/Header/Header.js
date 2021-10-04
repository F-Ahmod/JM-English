import React from 'react';
import img from '../../jm underheader.jpg'
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        
       <div className="">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand text-light fs-3 fw-bold" to="/">JM English</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto ">
              <li classN
              ="nav-item">
                <Link className="nav-link active text-light fw-bold fs-4" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light fw-bold fs-4" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light fw-bold fs-4" to="/service">Service</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light fw-bold fs-4" to="/booking">Booking Course</Link>
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