import React, { useEffect } from 'react';
import '../assets/css/style.css';
import { Link } from 'react-router-dom';
import $ from 'jquery';

const Footer = () => {
  useEffect(() => {
    $('.home-nav').on('click', function () {
      window.scrollTo(0, 0);
    });
  }, []);
  return (
    <>
      <footer>
        <div className="container d-flex align-items-center justify-content-between">
          <div className="about">
            <p>
              <Link to="/about" className="home-nav">
                <p>About Me</p>
              </Link>
            </p>
            <p>
              <Link to="/contact" className="home-nav">
                <p>Contact Me</p>
              </Link>
            </p>
          </div>
          <div className="copyright">
            <p>
              <Link to="/" className="home-nav">
                <p>&copy; copyright 2021 | Donny Marsahid</p>
              </Link>
            </p>
          </div>
          <div className="link-portfolio">
            <p className="text-end">
              <Link to="/portfolio" className="home-nav">
                <p>Portfolio</p>
              </Link>
            </p>
            <p className="text-end">
              <Link to="/" className="home-nav">
                <p>Homepage</p>
              </Link>
            </p>
          </div>
          <div class="social-media-footer">
            <a href="http://instagram.com/donnymrshd" className="icon-sosmed-footer">
              <i className="fab fa-instagram d-flex align-items-center justify-content-center"></i>
            </a>
            <a href="http://www.linkedin.com/donny-marsahid" className="icon-sosmed-footer">
              <i className="fab fa-linkedin d-flex align-items-center justify-content-center"></i>
            </a>
            <a href="https://github.com/donnymarsahid" className="icon-sosmed-footer">
              <i className="fab fa-github d-flex align-items-center justify-content-center"></i>
            </a>
            <a href="https://dribbble.com/donnymrshd" className="icon-sosmed-footer">
              <i className="fab fa-dribbble d-flex align-items-center justify-content-center"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
