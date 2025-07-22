import React, { useState } from 'react';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted:')
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
   
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="bg-secondary-custom">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center animate">
            <h2 className="display-5 fw-bold text-primary-custom mb-4">Contact Us</h2>
            <p className="text-muted fw-semibold">
              Have questions or want to get in touch? Send us a message using the form below.
            </p>
          </div>
        </div>
        
        <div className="row justify-content-center animate" style={{ transitionDelay: '0.2s' }}>
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-md-5">
                {submitted ? (
                  <div className="alert alert-success text-center">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="form-label text-primary-custom fw-semibold">Name</label>
                      <input 
                        type="text" 
                        placeholder='Enter name'
                        className="form-control" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="form-label text-primary-custom fw-semibold">Email</label>
                      <input 
                        type="email" 
                        placeholder='Enter Email'
                        className="form-control" 
                        id="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="message" className="form-label text-primary-custom fw-semibold">Message</label>
                      <textarea 
                        className="form-control"
                        placeholder='Leave a Comment Here' 
                        id="message" 
                        name="message" 
                        rows="5" 
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-custom px-4 py-2"  style={{backgroundColor: '#4B0082' , color: 'white'}}>
                        Send Message
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;