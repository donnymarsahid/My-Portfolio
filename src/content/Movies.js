import React from 'react';
import './css/style.css';
import jbMovies from './img/jb-movies.png';
import mv from './img/mv.png';

const Movies = () => {
  return (
    <>
      <div class="container-boola">
        <div class="jumbotron ">
          <img src={jbMovies} alt="jb-movies" className="img-fluid" />
        </div>
        <div class="container-custom-boola">
          <div class="content-boola">
            <h3>DonMovies - Movies Details Apps</h3>
            <p className="mb-5">
              Website untuk mencari tahu details film favorite kalian, bagi yang tidak tahu siapa sih nama asli pemeran film yang kalian tonton atau Penulis Filmnya, maupun yang Directornya siapa di website ini tersedia Details Film
              Favorite kalian dan tersedia juga Film - Film Lokal Indonesia, karena terhubung API dari OMDB.com, dan website ini dibuat menggunakan Vanila Javascript ES6 dengan metode Fetch.
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
