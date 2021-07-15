import React from 'react';
import '../assets/css/style.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container d-flex align-items-center justify-content-between">
          <div className="about">
            <p>
              <Link to="/">
                <p>About Me</p>
              </Link>
            </p>
            <p>
              <Link to="/">
                <p>Contact Me</p>
              </Link>
            </p>
          </div>
          <div className="copyright">
            <p>
              <Link to="/">
                <p>&copy; copyright 2021 | Donny Marsahid</p>
              </Link>
            </p>
          </div>
          <div className="link-portfolio">
            <p className="text-end">
              <Link to="">
                <p>Portfolio</p>
              </Link>
            </p>
            <p className="text-end">
              <Link to="/">
                <p>Homepage</p>
              </Link>
            </p>
          </div>
          <div class="social-media-footer">
            <Link to="http://instagram.com/donnymrshd" className="icon-sosmed-footer">
              <i className="fab fa-instagram d-flex align-items-center justify-content-center"></i>
            </Link>
            <Link to="http://www.linkedin.com/donny-marsahid" className="icon-sosmed-footer">
              <i className="fab fa-linkedin d-flex align-items-center justify-content-center"></i>
            </Link>
            <Link to="https://github.com/donnymarsahid" className="icon-sosmed-footer">
              <i className="fab fa-github d-flex align-items-center justify-content-center"></i>
            </Link>
            <Link to="https://dribbble.com/donnymrshd" className="icon-sosmed-footer">
              <i className="fab fa-dribbble d-flex align-items-center justify-content-center"></i>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
