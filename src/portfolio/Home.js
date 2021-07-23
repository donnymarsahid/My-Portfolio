import React from 'react';
import '../assets/css/style.css';
import '../assets/css/responsive.css';
import logoHeader from '../assets/img/logo-header.svg';
import information from '../assets/img/information.svg';
import landingPage from '../assets/img/thumbBoola.png';
import donstore from '../assets/img/thumbDonStore.png';
import movies from '../assets/img/thumbDMv.png';
import ilusHuman from '../assets/img/ilus-human.svg';
import ilusGit from '../assets/img/ilus-git.svg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <title>Cv site | Donny</title>
      <div class="responsive-page">
        <header className="d-flex align-items-center">
          <div className="jumbotron-header container">
            <div className="row">
              <div className="col-md-6 pt-5">
                <div className="border-bottom-header border-bottom">
                  <div className="heading-header d-flex align-items-center">
                    <h3>Halo, Selamat Datang</h3>
                  </div>
                  <p>
                    Perkenalkan saya <strong>Donny Marsahid</strong> <br />
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
        <div className="vector-header img-fluid " />
        <div class="social-media">
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
        <div class="container-custom">
          <div className="information d-flex">
            <div className="container text-center">
              <div className="box">
                <div className="logo-information">
                  <img src={information} alt="information" />
                </div>
                <p className="pt-4 pb-3">
                  Saya akan memperkenalkan beberapa{' '}
                  <Link to="/portfolio" className="p">
                    Portfolio
                  </Link>{' '}
                  yang saya buat, dari hasil kerja yang saya pelajari mengenai <strong>Web Design</strong> Maupun <strong>Web Develop</strong> , jika ingin bertanya{' '}
                  <Link to="/contact" className="p">
                    Kontak
                  </Link>{' '}
                  saya ya.. Selamat membaca :)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="container-custom-portfolio">
          <div className="content mb-5">
            <div className="container">
              <div className="box-text mb-4">
                <h3>Portfolio</h3>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="box-portfolio">
                    <Link to="/post/donstore">
                      <img src={donstore} className="mb-3" alt="donstore" />
                    </Link>
                    <Link to="/post/donstore" className="h4">
                      <h4>DS e-commerce</h4>
                    </Link>
                    <p>pembuatan website e-commerce</p>
                    <p className="text-muted posted">
                      Jul, 7 2021 <br />
                      <i className="fas fa-user-circle"></i> by Donny Marsahid
                    </p>
                    <div className="category d-flex">
                      <div className="category-1">web develop</div>
                      <div className="category-2">web design</div>
                    </div>
                    <Link to="/post/donstore">
                      <button className="btn btn-details mt-2">
                        <i className="fas fa-info-circle"></i> Detail
                      </button>
                    </Link>
                    <a href="http://boola.netlify.app" target="_blank" rel="noreferrer">
                      <button className="btn btn-details mt-2">Preview</button>
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="box-portfolio">
                    <Link to="/post/boola">
                      <img src={landingPage} className="mb-3" alt="landing-page" />
                    </Link>
                    <Link to="/post/movies" className="h4">
                      <h4>Boola - Landing Page</h4>
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
                    <Link to="/post/boola">
                      <button className="btn btn-details mt-2">
                        <i className="fas fa-info-circle"></i> Detail
                      </button>
                    </Link>
                    <a href="http://boola.netlify.app" target="_blank" rel="noreferrer">
                      <button className="btn btn-details mt-2">Preview</button>
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="box-portfolio">
                    <Link to="/post/movies">
                      <img src={movies} className="mb-3" alt="movies" />
                    </Link>
                    <Link to="/post/movies" className="h4">
                      <h4>DMv - Movies App</h4>
                    </Link>
                    <p>pembuatan website Movies</p>
                    <p className="text-muted posted">
                      Jul, 7 2021 <br />
                      <i className="fas fa-user-circle"></i> by Donny Marsahid
                    </p>
                    <div className="category d-flex">
                      <div className="category-1">web develop</div>
                      <div className="category-2">web design</div>
                    </div>
                    <Link to="/post/movies">
                      <button className="btn btn-details mt-2">
                        <i className="fas fa-info-circle"></i> Detail
                      </button>
                    </Link>
                    <a href="http://donmovies.netlify.app" target="_blank" rel="noreferrer">
                      <button className="btn btn-details mt-2">Preview</button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="button text-center mt-5">
                <Link to="/portfolio">
                  <button className="btn btn-read-more">lihat selengkapnya</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="ilustrator jumbotron jumbotron-fluid">
          <div class="container">
            <div class="row">
              <div class="col-sm-6 ilus-human">
                <img src={ilusHuman} alt="ilustrator" />
              </div>
              <div class="col-sm-6 ilus-git text-center">
                <img src={ilusGit} alt="ilustrator" width="100%" className="mb-5" />
                <div class="button d-flex justify-content-between">
                  <Link to="/about">
                    {' '}
                    <button className="btn btn-ilustrator">
                      <i className="fas fa-user"></i> Tentang
                    </button>
                  </Link>
                  <Link to="/portfolio">
                    {' '}
                    <button className="btn btn-ilustrator">
                      <i className="fas fa-file"></i> Portfolio
                    </button>
                  </Link>
                  <Link to="/contact">
                    <button className="btn btn-ilustrator">
                      <i className="fas fa-envelope"></i> Kontak
                    </button>
                  </Link>
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
