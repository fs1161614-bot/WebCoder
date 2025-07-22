import React from 'react';

import { Link } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-custom text-secondary-custom py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0 animate">
            <h5 className="fw-bold mb-4">WebCoder</h5>
            <p>
              Our platform helps you create stunning websites with beautiful animations that captivate your audience and drive engagement.
            </p>
          </div>
          <div className="col-lg-2 col-md-4 mb-4 mb-md-0 animate" style={{ transitionDelay: '0.1s' }}>
            <h5 className="fw-bold mb-4">Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="home" smooth={true} duration={500} className="text-secondary-custom text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="about" smooth={true} duration={500} className="text-secondary-custom text-decoration-none">
                  About
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500} className="text-secondary-custom text-decoration-none">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-4 mb-4 mb-md-0 animate" style={{ transitionDelay: '0.2s' }}>
            <h5 className="fw-bold mb-4">Contact Info</h5>
            <ul className="list-unstyled">
              <li className="mb-2">123  Street</li>
              <li className="mb-2"> 123 City, PC 12345</li>
              <li className="mb-2">info@webcodercom</li>
              <li>(123) 456-7890</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-4 animate" style={{ transitionDelay: '0.3s' }}>
            <h5 className="fw-bold mb-4">Follow Us</h5>
            <div className="d-flex gap-3">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social, index) => (
                <a 
                  key={index} 
                  href={`https://${social}.com`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-secondary-custom fs-5"
                >
                  <i className={`bi bi-${social}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        <hr className="my-4 border-secondary-custom opacity-10" />
       
      </div>
    </footer>
  );
};

export default Footer;