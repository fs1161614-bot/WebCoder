import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <Link 
          to="home" 
          smooth={true} 
          duration={500} 
          className="navbar-brand text-primary-custom fw-bold"
        >
            WebCoder
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link 
                to="home" 
                smooth={true} 
                duration={500} 
                className="nav-link" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="about" 
                smooth={true} 
                duration={500} 
                className="nav-link" 
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="contact" 
                smooth={true} 
                duration={500} 
                className="nav-link" 
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <style jsx>{`
        .navbar {
          padding: 20px 0;
          transition: all 0.3s;
          background-color: rgba(229, 228, 226, 0.9);
        }
        
        .navbar-scrolled {
          padding: 10px 0;
          background-color: rgba(229, 228, 226, 0.98) !important;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
        }
        .navbar-brand{
        color: #4B0082;
        }  
        .navbar-brand:hover{
         color: #4B0082 
       
        }
        .nav-link {
          color: #4B0082 !important;
          font-weight: 500;
          margin: 0 10px;
          position: relative;
          cursor: pointer;
        }
        
        .nav-link:after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          background: #4B0082;
          bottom: 0;
          left: 0;
          transition: width 0.3s;
        }
        
        .nav-link:hover:after {
          width: 100%;
        }
        
        .navbar-toggler {
          border-color: #4B0082;
        }
        
        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(75, 0, 130, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
        }
      `}</style>
    </nav>
  );
};

export default Navbar;