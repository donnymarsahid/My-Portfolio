import React from 'react';
import '../assets/style-content/style.css';
import '../assets/css/responsive.css';
import landingPage from '../assets/img/landingpage.png';
import movies from '../assets/img/movies.png';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <>
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
                <h4>Boola Landing Page</h4>
                <p class="text-muted">Website landing page Boola</p>
                <p>
                  Web ini adalah website untuk memperkenalkan atau mempromosikan Aplikasi Booking Lapangan Olahraga, dengan fitur-fitur tertentu dengan tampilan <strong>UI</strong> disertai <strong>UX</strong> yang dibuat se-simple mungkin
                  agar enak dilihat dan mudah digunakan. Dibuat dengan <strong>Bootstrap</strong> dan manual <strong>CSS</strong> , serta Library <strong>Jquery</strong> .
                </p>
                <button class="btn btn-deploy">Preview</button>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <img src={movies} alt="movies" width="100%" />
              </div>
              <div class="col-md-6">
                <h4>DonMovies - Details Movies Apps</h4>
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
            <div class="hastag-sticky">
              <Link class="p-hastag">
                <p>#Comment</p>
              </Link>
              <Link class="p-hastag">
                <p>#Contact me</p>
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
      </div>
    </>
  );
};

export default Portfolio;
