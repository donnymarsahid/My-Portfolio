import React, { useEffect } from 'react';
import '../assets/css/style.css';
import '../assets/css/responsive.css';
import '../assets/css/darkmode.css';
import { Link } from 'react-router-dom';
import $ from 'jquery';

// Dark Mode Start

const darkmode = localStorage.getItem('darkmode');

const enableDarkmode = () => {
  $('body').addClass('darkmode');
  $('.fa-moon').addClass('fa-sun');
  localStorage.setItem('darkmode', 'enabled');
};
const disableDarkmode = () => {
  $('body').removeClass('darkmode');
  $('.fa-moon').removeClass('fa-sun');
  localStorage.setItem('darkmode', 'null');
};

if (darkmode === 'enabled') {
  enableDarkmode();
}

function darkMode() {
  const dark = localStorage.getItem('darkmode');
  if (dark !== 'enabled') {
    enableDarkmode();
  } else {
    disableDarkmode();
  }
}

// Dark Mode END
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
              <div className="logo-navbar" />
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
                <Link to="/portfolio">
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
            <i className="fas fa-moon" onClick={darkMode}></i>
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
