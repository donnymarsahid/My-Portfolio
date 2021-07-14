import React from 'react';
import '../assets/style-content/style.css';
import jb1 from '../assets/img/jb-1.svg';
import jb2 from '../assets/img/jb-2.svg';
import '../assets/css/responsive.css';

const Portfolio = () => {
  return (
    <>
      <div class="jumbotron-portfolio">
        <div class="jumbotron jumbotron-fluid">
          <img src={jb1} alt="jb" class="img-fluid jb-1" />
          <img src={jb2} alt="jb2" class="img-fluid jb-2" />
        </div>
      </div>
      <div class="container content-portfolio"></div>
    </>
  );
};

export default Portfolio;
