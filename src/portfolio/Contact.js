import React from 'react';
import '../assets/style-content/contact.css';
import '../assets/css/darkmode.css';

const Contact = () => {
  return (
    <>
      <title>Contact</title>
      <div class="container-contact">
        <p>Ada pertanyaan ? </p>
        <h3>Kontak Saya melalui</h3>
        <a href="/" className="email">
          <i class="fas fa-envelope"></i> <span className="text-decoration-underline"> donnymrshd.94@gmail.com</span>
        </a>
        <div class="social-media-contact">
          <a href="http://instagram.com/donnymrshd" className="icon-sosmed">
            <i className="fab fa-instagram d-flex align-items-center justify-content-center"></i>
          </a>
          <a href="http://www.linkedin.com/donny-marsahid" className="icon-sosmed">
            <i className="fab fa-linkedin d-flex align-items-center justify-content-center"></i>
          </a>
          <a href="https://github.com/donnymarsahid" className="icon-sosmed">
            <i className="fab fa-github d-flex align-items-center justify-content-center"></i>
          </a>
          <a href="https://dribbble.com/donnymrshd" className="icon-sosmed">
            <i className="fab fa-dribbble d-flex align-items-center justify-content-center"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
