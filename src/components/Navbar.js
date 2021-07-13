import React from 'react';
import '../assets/css/style.css';
import logoDonny from '../assets/img/logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="fixed-top d-flex align-items-center">
        <div className="nav-bar d-flex justify-content-between container">
          <div className="logo d-flex">
            <Link to="/" className="link-logo-img">
              <img src={logoDonny} alt="logo-donny" />
            </Link>
            <Link to="/" className="link-logo-name">
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
                <Link to="/">
                  <a>About</a>
                </Link>
              </li>

              <li>
                <Link to="/">
                  <a>Portfolio</a>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="dark-mode d-flex align-items-center justify-content-between">
            <div></div>
            <i className="fas fa-moon"></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
