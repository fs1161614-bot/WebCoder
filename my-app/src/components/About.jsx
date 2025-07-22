import React from 'react';
import lightbulbIcon from '../assets/lightbulbFill.svg';
import gearIcon from '../assets/gearFill.svg';
import peopleIcon from '../assets/peopleFill.svg';

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center animate">
            <h2 className="display-5 fw-bold text-primary-custom mb-4">About Us</h2>
            <p className="text-muted fw-semibold">
              We are a creative team dedicated to building beautiful experiences.
               Our platform helps you create stunning websites with beautiful animations that captivate your audience and drive engagement
            </p>
          </div>
        </div>
        
        <div className="row g-4">
         
          <div className="col-md-4 animate" style={{ transitionDelay: '0.1s' }}>
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <div className="icon-box bg-primary-custom bg-opacity-10 text-primary-custom rounded-circle d-inline-flex align-items-center justify-content-center mb-4" 
                     style={{ width: '60px', height: '60px' }}>
                  <img src={lightbulbIcon} alt="Lightbulb icon" width="24" height="24" style={{ filter: 'brightness(0) invert(1)' }}  />
                </div>
                <h5 className="fw-bold mb-3">Creative Solutions</h5>
                <p className="text-muted">
                  Innovative approaches to solve complex problems with elegant design.
                   Our platform helps you create stunning websites with beautiful animations that captivate your audience and drive engagement
                </p>
              </div>
            </div>
          </div>

         
          <div className="col-md-4 animate" style={{ transitionDelay: '0.2s' }}>
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <div className="icon-box bg-primary-custom bg-opacity-10 text-primary-custom rounded-circle d-inline-flex align-items-center justify-content-center mb-4" 
                     style={{ width: '60px', height: '60px' }}>
                  <img src={gearIcon} alt="Gear icon" width="24" height="24"  style={{ filter: 'brightness(0) invert(1)' }} />
                </div>
                <h5 className="fw-bold mb-3">Technical Expertise</h5>
                <p className="text-muted">
                  Deep knowledge and experience in modern web technologies.
                   Our platform helps you create stunning websites with beautiful animations that captivate your audience and drive engagement
                </p>
              </div>
            </div>
          </div>

          
          <div className="col-md-4 animate" style={{ transitionDelay: '0.3s' }}>
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <div className="icon-box bg-primary-custom bg-opacity-10 text-primary-custom rounded-circle d-inline-flex align-items-center justify-content-center mb-4" 
                     style={{ width: '60px', height: '60px' }}>
                  <img src={peopleIcon} alt="Team icon" width="24" height="24"  style={{ filter: 'brightness(0) invert(1)' }} />
                </div>
                <h5 className="fw-bold mb-3">Team Collaboration</h5>
                <p className="text-muted ">
                  Working together to deliver exceptional results for our clients.
                   Our platform helps you create stunning websites with beautiful animations that captivate your audience and drive engagement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;