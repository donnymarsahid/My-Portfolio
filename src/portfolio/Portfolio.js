import React, { useState } from 'react';
import '../assets/style-content/style.css';
import '../assets/css/responsive.css';
import landingPage from '../assets/img/landingpage.png';
import movies from '../assets/img/movies.png';
import shutterstock from '../assets/img/shutterstock.png';
import Slider from 'react-slick';
import logoDM from '../assets/imgLogo/logo/2.jpg';
import logoBoola from '../assets/imgLogo/logo/3.jpg';
import logoSushi from '../assets/imgLogo/logo/4.jpg';
import logoCom from '../assets/imgLogo/logo/5.jpg';
import vectorAnsell from '../assets/imgLogo/vector/2.jpg';
import vectorDny from '../assets/imgLogo/vector/3.jpg';
import vectorKny from '../assets/imgLogo/vector/4.jpg';
import faceVector from '../assets/imgLogo/vector/5.jpg';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const images = [logoDM, logoSushi, logoBoola, logoCom];
const imagesVector = [vectorAnsell, vectorDny, faceVector, vectorKny];

// Slick
const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow next" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
};
const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow prev" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
};

const Portfolio = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [imageVector, setImageVector] = useState(0);
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  const settingsVector = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageVector(next),
  };
  return (
    <>
      <div class="container-portfolio container">
        <div class="content-portfolio">
          <div className="box-text mb-4">
            <h3>Portfolio</h3>
          </div>
          <div class="box-introduce-portfolio">
            <p className="text-muted">
              Koleksi beberapa portfolio mulai dari <strong>website</strong>, design <strong>logo</strong>, <strong>vector</strong> dan Foto <strong>shutterstock</strong>, tersedia link untuk <strong>Preview</strong> dan{' '}
              <strong>Details</strong>{' '}
            </p>
          </div>
        </div>
        <div className="box-text mb-4">
          <h3>Website</h3>
        </div>
        <div className="row mb-5">
          <div class="col-md-6">
            <div class="box-details">
              <img src={landingPage} alt="landingPage" width="100%" />
              <h4 className="ms-3 mt-3">Boola - Landing Page</h4>
              <p className="text-muted  ms-3">pembuatan website landing page</p>
              <p className="text-muted  ms-3">
                Jul, 7 2021 <br /> <i className="fas fa-user-circle"></i> by Donny Marsahid{' '}
              </p>
              <div class="category  ms-3">
                <div class="category-1">web develop</div>
                <div class="category-2">web design</div>
              </div>
              <button class="btn btn-box mt-3 ms-3 mb-3">Detail</button>
              <button class="btn btn-box mt-3 ms-3 mb-3">Preview</button>
            </div>
          </div>
          <div class="col-md-6">
            <div class="box-details">
              <img src={movies} alt="movies" width="100%" />
              <h4 className="ms-3 mt-3">DonMovies - Movies Details Apps</h4>
              <p className="text-muted  ms-3">pembuatan website details film</p>
              <p className="text-muted  ms-3">
                Jul, 7 2021 <br /> <i className="fas fa-user-circle"></i> by Donny Marsahid{' '}
              </p>
              <div class="category  ms-3">
                <div class="category-1">web develop</div>
                <div class="category-2">web design</div>
              </div>
              <button class="btn btn-box mt-3 ms-3 mb-3">Detail</button>
              <button class="btn btn-box mt-3 ms-3 mb-3">Preview</button>
            </div>
          </div>
        </div>
        <hr />
        <div class="slick mt-5 mb-5">
          <div className="box-text-logo mb-4">
            <h3>Design Logo</h3>
          </div>
          <Slider {...settings}>
            {images.map((img, idx) => (
              <div className={idx === imageIndex ? 'slide activeSlide' : 'slide'}>
                <img src={img} alt={img} />
              </div>
            ))}
          </Slider>
        </div>
        <hr />
        <div class="slick-vector mt-5 mb-5">
          <div className="box-text-vector mb-4">
            <h3>Design Vector</h3>
          </div>
          <Slider {...settingsVector}>
            {imagesVector.map((img, idx) => (
              <div className={idx === imageVector ? 'slide activeSlide' : 'slide'}>
                <img src={img} alt={img} width="100%" />
              </div>
            ))}
          </Slider>
        </div>
        <hr />
        <div className="box-text box-text-shutterstock mb-4 mt-5" style={{ width: '180px' }}>
          <h3>Shutterstock</h3>
        </div>
        <div className="row mb-5">
          <div class="col-md-6">
            <div class="box-details">
              <a href="https://www.shutterstock.com/g/DonPics?rid=292607883">
                <img src={shutterstock} alt="shutterstock" width="100%" />
              </a>
              <a href="https://www.shutterstock.com/g/DonPics?rid=292607883" style={{ color: '#3e3d3d', textDecoration: 'none' }}>
                <h4 className="ms-3 mt-3">Portfolio - Shutterstock</h4>
              </a>
              <p className="text-muted  ms-3">
                Jul, 7 2021 <br /> <i className="fas fa-user-circle"></i> by Donny Marsahid{' '}
              </p>
              <div class="category  ms-3">
                <div class="category-1">street</div>
                <div class="category-2">activity</div>
              </div>
              <a href="https://www.shutterstock.com/g/DonPics?rid=292607883">
                <button class="btn btn-box mt-3 ms-3 mb-3">Preview</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
