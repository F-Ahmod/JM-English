import React from 'react';
import './Footer.css'
const Footer = () => {
   
    return (
        <div className="bg-dark text-light rounded">
            <div className="fs-2 d-flex justify-content-center ">  <i className="fab fa-facebook-square me-3 mt-2 "></i><i className="fab fa-youtube-square me-3 mt-2"></i> <i className="fab fa-instagram-square mt-2"></i></div>
            <div className="row">
                <div className="col-md-4">
                    <h2 className="fs-3 fw-bold ms-2"><i className="fas fa-university"></i> JM English</h2>
                    <p className="ms-2">English language tests and courses designed to help further your academic or professional career.</p>
                    
                </div>
               
                <div className="col-md-4 ">
                    <h3>Contact us</h3>
                    <small > Don’t hesitate to get in touch by phone or email</small>
                    <small>ahmod.fateh@gmail.com//+16372648287</small>
                    
                </div>
                <div className="col-md-4 ">
                    <h3>Privacy policy</h3>
                    <a href="#">Find out more about our Privacy Policy</a>
                   
                </div>
            </div>
            <small className="d-flex justify-content-center ">© All rights reserved JM English 2020</small>
        </div>
    );
};

export default Footer;