import React from 'react';
import './css/style.css';
import jbMovies from './img/jbMovies.png';
import mv from './img/mv.png';

const Movies = () => {
  return (
    <>
      <title>Movies | Portfolio</title>
      <div class="container-boola">
        <div class="jumbotron ">
          <img src={jbMovies} alt="jb-movies" className="img-fluid" />
        </div>
        <div class="container-custom-boola">
          <div class="content-boola">
            <h3>DMv - Movies App</h3>
            <p className="mb-5">
              Website ini untuk mencari tahu film - film Populer, Tren Teratas bahkan film favorite kalian, dengan Fitur Search kalian bisa mencari film yang diinginkan, Tersedia Detail Film dan Trailernya. Tampilannya sudah Responsive
              dapat dibuka di device apapun Mobile, Tablet, Desktop. Website ini terhubung API dari themoviedb.org dan dibuat menggunakan React JS
            </p>
            <a href="http://donmovies.netlify.app" target="_blank" rel="noreferrer" className="mb-5">
              <button class="btn-preview">Preview</button>
            </a>
            <div class="heading-boola-thumbnail mb-3 mt-5">
              <h4>Thumbnail</h4>
            </div>
            <img src={mv} alt="header-movies" className="img-fluid mb-5" />
            <div class="box-source-code">
              <p>
                <a href="https://github.com/donnymarsahid/web-movies" style={{ color: '#3e3d3d' }}>
                  Klik Disini
                </a>{' '}
                untuk <strong>Source Code</strong>
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

export default Movies;
