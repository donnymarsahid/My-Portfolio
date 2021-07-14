import React from 'react';
import '../assets/css/style.css';
import '../assets/css/responsive.css';
import bye from '../assets/img/bye.svg';
import logoHeader from '../assets/img/logo-header.svg';
import information from '../assets/img/information.svg';
import landingPage from '../assets/img/landingpage.svg';
import movies from '../assets/img/movies.svg';
import { Link } from 'react-router-dom';
import $ from 'jquery';

// Parralax icons
$(window).scroll(function () {
  let wScroll = $(this).scrollTop();

  if (wScroll > 460) {
    $('.information .social-media').addClass('scroll');
  } else {
    $('.information .social-media').removeClass('scroll');
  }
});

const Home = () => {
  return (
    <>
      <div class="responsive-page">
        <header className="d-flex align-items-center">
          <div className="jumbotron-header container">
            <div className="row">
              <div className="col-md-6 pt-5">
                <div className="border-bottom-header border-bottom">
                  <div className="heading-header d-flex align-items-center">
                    <img src={bye} alt="bye" className="pe-3 pb-2" />
                    <h3>Halo selamat datang!</h3>
                  </div>
                  <p>
                    Perkenalkan nama saya Donny Marsahid <br />
                  </p>
                </div>
                <p className="pt-3">Ini adalah website personal untuk memperkenalkan biodata diri saya, dan Portfolio yang saya buat</p>
              </div>
              <div className="col-md-6 d-flex align-items-center justify-content-between">
                <div className="float-bg"></div>
                <img src={logoHeader} alt="logo-donny" className="logo-header" />
              </div>
            </div>
          </div>
        </header>
        <div className="information d-flex">
          <div className="container text-center">
            <div className="box">
              <div className="logo-information">
                <img src={information} alt="information" />
              </div>
              <p className="pt-4 pb-3">
                Saya akan memperkenalkan beberapa <Link to="/">Portfolio</Link> yang saya buat, dari hasil kerja yang saya pelajari mengenai <strong>Web Design</strong> Maupun <strong>Web Develop</strong> , jika ingin bertanya{' '}
                <Link to="/">Kontak</Link> saya ya.. Selamat membaca :)
              </p>
            </div>
          </div>
          <div className="social-media d-flex flex-column">
            <Link to="http://instagram.com/donnymrshd" className="icon-sosmed">
              <i className="fab fa-instagram d-flex align-items-center justify-content-center"></i>
            </Link>
            <Link to="http://www.linkedin.com/donny-marsahid" className="icon-sosmed">
              <i className="fab fa-linkedin d-flex align-items-center justify-content-center"></i>
            </Link>
            <Link to="https://github.com/donnymarsahid" className="icon-sosmed">
              <i className="fab fa-github d-flex align-items-center justify-content-center"></i>
            </Link>
            <Link to="https://dribbble.com/donnymrshd" className="icon-sosmed">
              <i className="fab fa-dribbble d-flex align-items-center justify-content-center"></i>
            </Link>
          </div>
        </div>
        <div className="content mb-5">
          <div className="container">
            <div className="box-text mb-4">
              <h3>Portfolio</h3>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="box-portfolio">
                  <Link to="/">
                    <img src={landingPage} className="mb-3" alt="landing-page" />
                  </Link>
                  <Link to="/" className="h4">
                    <h4>Landing Page</h4>
                  </Link>
                  <p>pembuatan website landing page</p>
                  <p className="text-muted posted">
                    Jul, 7 2021 <br />
                    <i className="fas fa-user-circle"></i> by Donny Marsahid
                  </p>
                  <div className="category d-flex">
                    <div className="category-1">web develop</div>
                    <div className="category-2">web design</div>
                  </div>
                  <Link to="/">
                    <button className="btn btn-details mt-2">
                      <i className="fas fa-info-circle"></i> Detail
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="box-portfolio">
                  <Link to="/">
                    <img src={movies} className="mb-3" alt="movies" />
                  </Link>
                  <Link to="/" className="h4">
                    <h4>Movies</h4>
                  </Link>
                  <p className="text-muted">pembuatan website Movies</p>
                  <p className="text-muted posted">
                    Jul, 7 2021 <br />
                    <i className="fas fa-user-circle"></i> by Donny Marsahid
                  </p>
                  <div className="category d-flex">
                    <div className="category-1">web develop</div>
                    <div className="category-2">web design</div>
                  </div>
                  <Link to="/">
                    <button className="btn btn-details mt-2">
                      <i className="fas fa-info-circle"></i> Detail
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="box-portfolio">
                  <Link to="/">
                    <img src={landingPage} className="mb-3" alt="landing-page" />
                  </Link>
                  <Link to="/" className="h4">
                    <h4>Landing Page</h4>
                  </Link>
                  <p>pembuatan website landing page</p>
                  <p className="text-muted posted">
                    Jul, 7 2021 <br />
                    <i className="fas fa-user-circle"></i> by Donny Marsahid
                  </p>
                  <div className="category d-flex">
                    <div className="category-1">web develop</div>
                    <div className="category-2">web design</div>
                  </div>
                  <Link to="/">
                    <button className="btn btn-details mt-2">
                      <i className="fas fa-info-circle"></i> Detail
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="button text-center mt-5">
              <Link to="/">
                <button className="btn btn-read-more">lihat selengkapnya</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="ilustrator container m-auto">
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-8">
                  <div className="button-about">
                    <Link to="/" className="link-icon">
                      <button className="btn">
                        <i className="fas fa-user"></i>
                        About
                      </button>
                    </Link>
                  </div>
                  <div className="button-portfolio">
                    <Link to="/" className="link-icon">
                      <button className="btn">
                        <i className="fas fa-file"></i>
                        Portfolio
                      </button>
                    </Link>
                  </div>
                  <div className="button-contact">
                    <Link to="/" className="link-icon">
                      <button className="btn">
                        <i className="fas fa-envelope"></i>
                        Contact
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
