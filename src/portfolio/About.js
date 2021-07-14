import React from 'react';
import donny from '../assets/img/donny.png';
import '../assets/css/style.css';
import html5 from '../assets/img/logo/html5.svg';
import bootstrap from '../assets/img/logo/bootstrap.svg';
import css3 from '../assets/img/logo/css3.svg';
import javascript from '../assets/img/logo/javascript.svg';
import nodejs from '../assets/img/logo/node js.svg';
import reactjs from '../assets/img/logo/reactjs.svg';
import mysql from '../assets/img/logo/mysql.svg';
import figma from '../assets/img/logo/figma.svg';
import photoshop from '../assets/img/logo/photoshop.svg';
import ilustrator from '../assets/img/logo/ilustrator.svg';
import nobu from '../assets/img/logo/nobu.svg';
import kotex from '../assets/img/logo/kotex.png';
import $ from 'jquery';

function dropDown() {
  $('.fas').toggleClass('fa-angle-right');
  $('.fas').toggleClass('fa-angle-down');
  $('.content-info-web').toggleClass('show');
}

const About = () => {
  return (
    <>
      <div className="pages-about-me">
        <div className="page-about">
          <div className="jumbotron jumbotron-fluid"></div>
          <div className="text-center name-about mb-4">
            <img src={donny} alt="donny" className="img-about" />
            <h3>Donny Marsahid</h3>
          </div>
          <div className="container-about">
            <p>
              Saya berasal dari Jakarta kelahiran tahun 2001 pada bulan januari, anak ke-3 dari 4 bersaudara, saya lulusan SMKI Said Naum, Jakarta Pusat dengan Jurusan <strong>Teknik Komputer dan Jaringan .</strong>
            </p>
            <p>untuk mengisi waktu kosong, saya senang membuat website dan design, saya juga suka mempelajari programming seiring perjalanan waktu dan perkembangan tekhnologi yang terbaru, saya jadi suka membaca dan mempraktekkan.</p>
            <hr />
            <div class="mobile-container-skill">
              <div className="p-box-text-about mb-4">
                <h3 className="mt-4">Keahlian</h3>
              </div>
            </div>
            <div class="mobile-row">
              <div className="row">
                <div className="col-md-12 d-flex justify-content-between">
                  <div className="html5 text-center">
                    <img src={html5} alt="html5" />
                    <p className="text-uppercase">html 5</p>
                  </div>
                  <div className="bootstrap text-center">
                    <img src={bootstrap} alt="bootstrap" />
                    <p className="text-uppercase">bootstrap</p>
                  </div>
                  <div className="css3 text-center">
                    <img src={css3} alt="css3" />
                    <p className="text-uppercase">css 3</p>
                  </div>
                  <div className="javascript text-center">
                    <img src={javascript} alt="javascript" />
                    <p className="text-uppercase">javascript</p>
                  </div>
                  <div className="nodejs text-center">
                    <img src={nodejs} alt="node js" />
                    <p className="text-uppercase">node js</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 d-flex justify-content-between">
                  <div className="reactjs text-center">
                    <img src={reactjs} alt="reactjs" />
                    <p className="text-uppercase">react js</p>
                  </div>
                  <div className="mysql text-center">
                    <img src={mysql} alt="mysql" className="pb-5" />
                    <p className="text-uppercase">mysql</p>
                  </div>
                  <div className="figma text-center">
                    <img src={figma} alt="figma" />
                    <p className="text-uppercase">figma</p>
                  </div>
                  <div className="bootstrap text-center">
                    <img src={photoshop} alt="photoshop" />
                    <p className="text-uppercase">photoshop</p>
                  </div>
                  <div className="adobe-ilustrator text-center">
                    <img src={ilustrator} alt="ilustrator" />
                    <p className="text-uppercase">ilustrator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-experience work-experience">
          <div class="mobile-container-experience">
            <div className="p-box-text-experience mb-4">
              <h3 className="mt-4">Pengalaman Kerja</h3>
            </div>
          </div>
          <div className="box-experience">
            <div className="row">
              <div className="col-2">
                <img src={nobu} alt="nobu" />
              </div>
              <div className="col-10">
                <p className="text-decoration-underline">Bank National Nobu</p>
                <p>
                  Sales Merchant <br />
                  Jun, 2019
                </p>
              </div>
            </div>
          </div>
          <div className="box-experience mt-3">
            <div className="row">
              <div className="col-2">
                <img src={kotex} alt="kotex" />
              </div>
              <div className="col-10">
                <p className="text-decoration-underline">Kotex Mandiri</p>
                <p>
                  Staff lembaga kesehatan PKM Tambora <br />
                  Jan, 2020 s.d Jan, 2021
                </p>
              </div>
            </div>
          </div>
          <div className="web-information mt-5 mb-5">
            <div className="row">
              <div className="col-6">
                <div className="box" onClick={dropDown}>
                  <div className="drop-down-web">
                    <p className="drop-down d-flex justify-content-between align-items-center">
                      Informasi pembuatan website <i className="fas fa-angle-right"> </i>
                    </p>
                  </div>
                  <div className="content-info-web">
                    <div className="row p-3">
                      <div className="col-6  one p-2">Built with</div>
                      <div className="col-6 two p-2">React Js</div>
                      <div className="col-6 three p-2">Deploy With</div>
                      <div className="col-6 four p-2">Netlify</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="equipment mt-2">
            <div class="equipment-box-heading">
              <div className="p-box-text-equipment mb-4">
                <h3 className="mt-4">Saya Menggunakan</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="box-equipment d-flex flex-column justify-content-center align-items-center">
                  <i className="fas fa-laptop"></i>
                  <p>
                    Acer Aspire 3 <br /> on upgraded
                  </p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box-equipment d-flex flex-column justify-content-center align-items-center">
                  <i className="fab fa-windows"></i>
                  <p>Windows 10 Spectre</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box-equipment d-flex flex-column justify-content-center align-items-center">
                  <div className="logo-vscode" />
                  <p>Visual Studio Code</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box-equipment d-flex flex-column justify-content-center align-items-center">
                  <i className="fas fa-code"></i>
                  <p>React Js</p>
                </div>
              </div>

              <div className="col-md-3 mt-3">
                <div className="box-equipment d-flex flex-column justify-content-center align-items-center">
                  <i className="fab fa-figma"></i>
                  <p>Figma</p>
                </div>
              </div>
              <div className="col-md-3 mt-3">
                <div className="box-equipment d-flex flex-column justify-content-center align-items-center">
                  <div className="logo-ai" />
                  <p>Adobe Ilustrator</p>
                </div>
              </div>
              <div className="col-md-3 mt-3">
                <div className="box-equipment d-flex flex-column justify-content-center align-items-center">
                  <i className="fas fa-coffee"></i>
                  <p>Good day moccacino</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
