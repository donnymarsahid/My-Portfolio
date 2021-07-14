import React, { useEffect } from 'react';
import '../assets/css/style.css';
import '../assets/css/responsive.css';
import logoDonny from '../assets/img/logo.svg';
import { Link } from 'react-router-dom';
import $ from 'jquery';

function hamburgerMenu() {
  $('.linked').toggleClass('show');
  $('.mobile-menu').toggleClass('show');
  $('.hamburger-menu .fa').toggleClass('fa-times');
}
const Navbar = () => {
  useEffect(() => {
    $('.about-nav').on('click', function () {
      window.scrollTo(0, 0);
    });
    $('.home-nav').on('click', function () {
      window.scrollTo(0, 0);
    });
  }, []);

  return (
    <>
      <nav className="fixed-top d-flex align-items-center shadow-sm">
        <div className="nav-bar d-flex justify-content-between container">
          <div className="logo d-flex">
            <Link to="/" className="link-logo-img home-nav">
              <img src={logoDonny} alt="logo-donny" />
            </Link>
            <Link to="/" className="link-logo-name home-nav">
              <ul className="d-flex align-items-center">
                <li>D</li>
                <li>o</li>
                <li>n</li>
                <li>n</li>
                <li>y</li>
              </ul>
            </Link>
          </div>
          <div className="link">
            <ul className="d-flex justify-content-around align-items-center">
              <li>
                <Link to="/about" className="about-nav">
                  <p>About</p>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <p>Portfolio</p>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <p>Contact</p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="dark-mode d-flex align-items-center justify-content-between">
            <div className="hidden-darkmode"></div>
            <i className="fas fa-moon"></i>
          </div>
          <div className="hamburger-menu">
            <i className="fa fa-bars" onClick={hamburgerMenu}></i>
          </div>
        </div>
      </nav>
      <div className="mobile-menu">
        <div className="link-hamburger">
          <Link to="/about" className="linked about-nav">
            <p>About</p>
          </Link>
          <Link className="linked">
            <p>Portfolio</p>
          </Link>
          <Link className="linked">
            <p>Contact</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
