import React from 'react';
import './css/style.css';
import headerBoola from './img/header.png';
import featuresBoola from './img/features.png';
import contentBoola from './img/content.png';

const Boola = () => {
  return (
    <>
      <div class="container-boola">
        <div class="jumbotron jumbotron-fluid"></div>
        <div class="container-custom">
          <div class="content-boola">
            <h3>Boola - Landing Page</h3>
            <p className="mb-5">
              Web ini adalah website untuk memperkenalkan atau mempromosikan Aplikasi Booking Lapangan Olahraga, dengan fitur-fitur tertentu dengan tampilan UI disertai UX yang dibuat se-simple mungkin agar enak dilihat dan mudah digunakan.
              Dibuat dengan Bootstrap dan manual CSS , serta Library Jquery.
            </p>
            <div class="heading-boola-content mb-3">
              <h4>Header</h4>
            </div>
            <img src={headerBoola} alt="header-boola" className="img-fluid mb-5" />
            <div class="heading-boola-content mb-3">
              <h4>Features</h4>
            </div>
            <img src={featuresBoola} alt="features-boola" className="img-fluid mb-5" />
            <div class="heading-boola-content-section mb-3">
              <h4>Content Section</h4>
            </div>
            <img src={contentBoola} alt="content-boola" className="img-fluid mb-5" />
            <a href="/">
              <button class="btn-preview">Preview</button>
            </a>
          </div>
          <div class="sidebar">
            <p className="text-social-media">Social Media</p>
            <div class="social-media-boola">
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
        </div>
      </div>
    </>
  );
};

export default Boola;
