import React from 'react';
import '../assets/css/style.css';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container d-flex align-items-center justify-content-between">
          <div className="about">
            <a href="/#about">
              <p>
                <p>About Me</p>
              </p>
            </a>
            <p>
              <a href="/#contact">
                <p>Contact Me</p>
              </a>
            </p>
          </div>
          <div className="copyright">
            <p>
              <a href="/#">
                <p>&copy; copyright 2021 | Donny Marsahid</p>
              </a>
            </p>
          </div>
          <div className="link-portfolio">
            <p className="text-end">
              <a href="/#portfolio">
                <p>Portfolio</p>
              </a>
            </p>
            <p className="text-end">
              <a href="/#">
                <p>Homepage</p>
              </a>
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
