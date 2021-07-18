import React from 'react';
import './css/style.css';
import headerBoola from './img/header.png';
import featuresBoola from './img/features.png';
import contentBoola from './img/content.png';
import jbBoola from './img/jb-boola.png';
import { Link } from 'react-router-dom';

const Boola = () => {
  return (
    <>
      <title>Boola | Portfolio</title>
      <div class="container-boola">
        <div class="jumbotron ">
          <img src={jbBoola} alt="jb-boola" className="img-fluid" />
        </div>
        <div class="container-custom-boola">
          <div class="content-boola">
            <h3>Boola - Landing Page</h3>
            <p className="mb-5">
              Web ini adalah website untuk memperkenalkan atau mempromosikan Aplikasi Booking Lapangan Olahraga, dengan fitur-fitur tertentu dengan tampilan UI disertai UX yang dibuat se-simple mungkin agar enak dilihat dan mudah digunakan.
              Dibuat dengan Bootstrap dan manual CSS , serta Library Jquery.
            </p>
            <a href="http://boola.netlify.app" target="_blank" rel="noreferrer" className="mb-5">
              <button class="btn-preview">Preview</button>
            </a>
            <div class="heading-boola-content mb-3 mt-5">
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
            <div class="box-source-code">
              <p>
                Jika ingin Source Code <strong>Landing Page</strong> ini{' '}
                <Link to="/contact" className="contact-code">
                  <strong>Kontak</strong>
                </Link>{' '}
                saya ya
              </p>
            </div>
          </div>
          <div class="sidebar">
            <div class="sidebar-boola">
              <p className="text-social-media comment fs-5 text-center">
                <i class="fas fa-comments"></i> Kirim Komentar
              </p>
              <p className="text-social-media text-center fs-4 fw-bolder">Social Media</p>
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
      </div>
    </>
  );
};

export default Boola;
