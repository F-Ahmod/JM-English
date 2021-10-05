import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
   
    return (
        <div className="bg-dark text-light rounded">
            <div className="fs-2 d-flex justify-content-center ">  <i className="fab fa-facebook-square me-3 mt-2 "></i><i className="fab fa-youtube-square me-3 mt-2"></i> <i className="fab fa-instagram-square mt-2"></i></div>
            <div className="row">
                <div className="col-md-4">
                    <h2 className="fs-3 fw-bold ms-2"><i className="fas fa-university"></i> JM English</h2>
                    <p className="ms-2">English language tests and courses designed to help further your academic or professional career.</p>
                    <p className="ms-2">IELTS </p>
                    <p className="ms-2">OIETC</p>
                    <p className="ms-2">BCS English</p>
                    <p className="ms-2">Spoken English</p>
                    <p className="ms-2">English Grammar</p>
                     
                    
                </div>
               
                <div className="col-md-4 ">
                    <h3 className="ms-2">Contact us</h3>
                    <small className="ms-2"> Don’t hesitate to get in touch by phone or email</small>
                    <p className="ms-2">Email : ahmod.fateh@gmail.com</p>
                    <p className="ms-2">Phone : +01717918508</p>
                    <p className="ms-2">help line : +8807656757</p>
                    
                    
                    
                </div>
                <div className="col-md-4 ">
                    <h3 className="ms-2"><i className="fas fa-user-secret ms-2"></i> Privacy policy</h3>
                    <NavLink to="#" className="ms-2">Find out more about our Privacy Policy</NavLink>
                   
                </div>
            </div>
            <small className="d-flex justify-content-center ms-2">© All rights reserved JM English 2020</small>
        </div>
    );
};

export default Footer;