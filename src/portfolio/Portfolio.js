import React from 'react';
import '../assets/style-content/style.css';
import jb1 from '../assets/img/jb-1.svg';
import jb2 from '../assets/img/jb-2.svg';
import '../assets/css/responsive.css';
import landingPage from '../assets/img/landingpage.svg';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <>
      <div class="jumbotron-portfolio">
        <div class="jumbotron jumbotron-fluid">
          <img src={jb1} alt="jb" class="img-fluid jb-1" />
          <img src={jb2} alt="jb2" class="img-fluid jb-2" />
        </div>
      </div>
      <div class="container content-portfolio">
        <div class="heading-text-portfolio">
          <h3>Portfolio</h3>
        </div>
        <p class="text-muted mb-5">Beberapa portfolio dan link untuk preview</p>
        <div class="row content-row">
          <div class="col-10">
            <div class="row">
              <div class="col-md-6">
                <img src={landingPage} alt="landingPage" width="100%" />
              </div>
              <div class="col-md-6">
                <h4>Landing Page</h4>
                <p class="text-muted">Website landing page Boola</p>
                <p>
                  Web ini adalah website untuk memperkenalkan atau mempromosikan Aplikasi Booking Lapangan Olahraga, dengan fitur-fitur tertentu dengan tampilan <strong>UI</strong> disertai <strong>UX</strong> yang dibuat se-simple mungkin
                  agar enak dilihat dan mudah digunakan. Dibuat dengan <strong>Bootstrap</strong> dan manual <strong>CSS</strong> , serta Library <strong>Jquery</strong> .
                </p>
                <button class="btn btn-deploy">Preview</button>
              </div>
            </div>
          </div>
          <div class="col-2 sidebar">
            <Link class="p-hastag">
              <p>#Contact me</p>
            </Link>
            <Link class="p-hastag">
              <p>#Comment</p>
            </Link>
            <Link class="p-hastag">
              <p>#About me</p>
            </Link>
            <p class="txt-sosmed">Social Media</p>
            <div class="social-media-sidebar">
              <Link to="http://instagram.com/donnymrshd" className="icon-sosmed-sidebar">
                <i className="fab fa-instagram d-flex align-items-center justify-content-center"></i>
              </Link>
              <Link to="http://www.linkedin.com/donny-marsahid" className="icon-sosmed-sidebar">
                <i className="fab fa-linkedin d-flex align-items-center justify-content-center"></i>
              </Link>
              <Link to="https://github.com/donnymarsahid" className="icon-sosmed-sidebar">
                <i className="fab fa-github d-flex align-items-center justify-content-center"></i>
              </Link>
              <Link to="https://dribbble.com/donnymrshd" className="icon-sosmed-sidebar">
                <i className="fab fa-dribbble d-flex align-items-center justify-content-center"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
