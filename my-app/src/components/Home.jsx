import React from 'react';
import '../App.css';
import { Link } from 'react-scroll';
import mainImage from '../assets/main-image.avif'


const Home = () => {
  return (
    <section id="home" className="bg-secondary-custom">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 animate">
            <h1 className="display-4 fw-bold mb-4 text-primary-custom">Welcome to Our Website</h1>
            <p className="lead mb-4 fw-semibold">
             Our platform helps you create stunning websites with beautiful animations that captivate your audience and drive engagement.
            </p>
            <div className="d-flex gap-3">
              <Link 
                to="contact" 
                smooth={true} 
                duration={500} 
                className="btn btn-custom fw-bolder"
                style={{backgroundColor: '#4B0082' , color: 'white'}}
  
              >
                Get Started
              </Link>
            
            <Link 
                to="about" 
                smooth={true} 
                duration={500} 
                className="btn btn-outline-custom fw-bolder"
                
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="col-lg-6 animate" style={{ transitionDelay: '0.2s' }}>
            <div className="position-relative">
              <div className="hero-shape position-absolute top-0 start-0 bg-primary-custom" style={{ 
                width: '300px', 
                height: '300px', 
                borderRadius: '50%', 
                opacity: '0.2',
                transform: 'translate(-50px, -50px)'
              }}></div>
              <div className="hero-shape position-absolute bottom-0 end-0 bg-primary-custom" style={{ 
                width: '200px', 
                height: '200px', 
                borderRadius: '50%', 
                opacity: '0.2',
                transform: 'translate(50px, 50px)'
              }}></div>
              <img 
            src={mainImage}
            alt="Indigo purple abstract background" 
        className="img-fluid rounded-4 position-relative" 
  style={{ boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' }}
/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;