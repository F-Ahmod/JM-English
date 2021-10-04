import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="bg-dark text-light rounded">
            <div className="row">
                <div className="col-md-4">
                    <h2 className="fs-3 fw-bold ms-2">JM English</h2>
                    <p className="ms-2">English language tests and courses designed to help further your academic or professional career.</p>
                    
                </div>
                <div className="col-md-4">
                    <h3>Contact us</h3>
                    <p>Don’t hesitate to get in touch by phone or email</p>
                    
                </div>
                <div className="col-md-4">
                    <h3>Privacy policy</h3>
                    <p>Find out more about our Privacy Policy</p>
                   
                </div>
            </div>
            <small className="d-flex justify-content-center ">© All rights reserved JM English 2020</small>
        </div>
    );
};

export default Footer;