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
                <a>About Me</a>
              </Link>
            </p>
            <p>
              <Link to="/">
                <a>Contact Me</a>
              </Link>
            </p>
          </div>
          <div className="copyright">
            <p>
              <Link to="/">
                <a>&copy; copyright 2021 | Donny Marsahid</a>
              </Link>
            </p>
          </div>
          <div className="link-portfolio">
            <p className="text-end">
              <Link to="">
                <a>Portfolio</a>
              </Link>
            </p>
            <p className="text-end">
              <Link to="/">
                <a href="">Homepage</a>
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
