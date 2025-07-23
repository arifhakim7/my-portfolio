import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import './contact.css'; 

function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_w2seqnn',      // EmailJS service ID
        'template_er4mzbk',     // EmailJS template ID
        formRef.current,
        'TukdwKIBsg-vd3EnQ'       // EmailJS public key
      )
      .then(
  (result) => {
    console.log(result.text);
    Swal.fire({
      icon: 'success',
      title: 'Message Sent!',
      text: 'Your message has been delivered successfully.',
      confirmButtonColor: '#3085d6',
    });
    setFormData({ name: '', email: '', message: '' });
  },
  (error) => {
    console.log(error.text);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Failed to send message. Please try again later.',
      confirmButtonColor: '#d33',
    });
  }
);
  };

return (
      <section className="d-flex align-items-center justify-content-center py-5" id="contact">
  <div className="container py-5" id="contact">
    <h2 className="contactHeader fw-bold text-center display-4 mb-5">Contact Me</h2>
    
    <div className="row align-items-center p-4">
      {/* Left Column - Statement */}
      <div className="col-md-6 mb-4 mb-md-0 ">
        <h4 className="mb-3 fw-semibold">Got something on your mind?</h4>
        <p className="lead mb-4">
          Let’s connect and build something great together!
        </p>

      </div>

      {/* Right Column - Form Card */}
      <div className="col-md-6">
        <div className="card bg-dark shadow-lg border-0 rounded-4 p-4">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-warning px-4">Send</button>
            </div>
            {status && <p className="text-center mt-3">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  </div>
  </section>
  
);


}

export default Contact;
