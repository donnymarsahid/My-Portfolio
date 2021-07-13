import React from 'react';
import donny from '../assets/img/donny.png';
import '../assets/css/style.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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
import vscode from '../assets/img/logo/vscode.svg';
import ai from '../assets/img/logo/ai.svg';

const About = () => {
  return (
    <>
      {/* Navbar Start */}
      <Navbar />
      {/* Navbar End */}
      <div class="pages-about-me">
        <div class="page-about">
          <div class="jumbotron jumbotron-fluid"></div>
          <div class="text-center name-about mb-4">
            <img src={donny} alt="donny" class="img-about" />
            <h3>Donny Marsahid</h3>
          </div>
          <div class="container-about">
            <p>
              Saya berasal dari Jakarta kelahiran tahun 2001 pada bulan januari, anak ke-3 dari 4 bersaudara, saya lulusan SMKI Said Naum, Jakarta Pusat dengan Jurusan <strong>Teknik Komputer dan Jaringan .</strong>
            </p>
            <p>untuk mengisi waktu kosong, saya senang membuat website dan design, saya juga suka mempelajari programming seiring perjalanan waktu dan perkembangan tekhnologi yang terbaru, saya jadi suka membaca dan mempraktekkan.</p>
            <hr />
            <div class="p-box-text-about mb-4">
              <h3 class="mt-4">Keahlian</h3>
            </div>
            <div class="row">
              <div class="col-md-12 d-flex justify-content-between">
                <div class="html5 text-center">
                  <img src={html5} alt="html5" />
                  <p class="text-uppercase">html 5</p>
                </div>
                <div class="bootstrap text-center">
                  <img src={bootstrap} alt="bootstrap" />
                  <p class="text-uppercase">bootstrap</p>
                </div>
                <div class="css3 text-center">
                  <img src={css3} alt="css3" />
                  <p class="text-uppercase">css 3</p>
                </div>
                <div class="javascript text-center">
                  <img src={javascript} alt="javascript" />
                  <p class="text-uppercase">javascript</p>
                </div>
                <div class="nodejs text-center">
                  <img src={nodejs} alt="node js" />
                  <p class="text-uppercase">node js</p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 d-flex justify-content-between">
                <div class="reactjs text-center">
                  <img src={reactjs} alt="reactjs" />
                  <p class="text-uppercase">react js</p>
                </div>
                <div class="mysql text-center">
                  <img src={mysql} alt="mysql" class="pb-5" />
                  <p class="text-uppercase">mysql</p>
                </div>
                <div class="figma text-center">
                  <img src={figma} alt="figma" />
                  <p class="text-uppercase">figma</p>
                </div>
                <div class="bootstrap text-center">
                  <img src={photoshop} alt="photoshop" />
                  <p class="text-uppercase">photoshop</p>
                </div>
                <div class="adobe-ilustrator text-center">
                  <img src={ilustrator} alt="ilustrator" />
                  <p class="text-uppercase">ilustrator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-experience work-experience">
          <div class="p-box-text-experience mb-4">
            <h3 class="mt-4">Pengalaman Kerja</h3>
          </div>
          <div class="box-experience">
            <div class="row">
              <div class="col-2">
                <img src={nobu} alt="nobu" />
              </div>
              <div class="col-10">
                <p class="text-decoration-underline">Bank National Nobu</p>
                <p>
                  Sales Merchant <br />
                  Jun, 2019
                </p>
              </div>
            </div>
          </div>
          <div class="box-experience mt-3">
            <div class="row">
              <div class="col-2">
                <img src={kotex} alt="kotex" />
              </div>
              <div class="col-10">
                <p class="text-decoration-underline">Kotex Mandiri</p>
                <p>
                  Staff lembaga kesehatan PKM Tambora <br />
                  Jan, 2020 s.d Jan, 2021
                </p>
              </div>
            </div>
          </div>
          <div class="web-information mt-5 mb-5">
            <div class="row">
              <div class="col-6">
                <div class="box">
                  <div class="drop-down-web">
                    <p class="drop-down d-flex justify-content-between align-items-center">
                      Informasi pembuatan website <i class="fas fa-angle-right"> </i>
                    </p>
                  </div>
                  <div class="content-info-web">
                    <div class="row p-3">
                      <div class="col-6  one p-2">Built with</div>
                      <div class="col-6 two p-2">React Js</div>
                      <div class="col-6 three p-2">Deploy With</div>
                      <div class="col-6 four p-2">Netlify</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="equipment mt-2">
            <div class="p-box-text-equipment mb-4">
              <h3 class="mt-4">Saya Menggunakan</h3>
            </div>
            <div class="row">
              <div class="col-md-3">
                <div class="box-equipment d-flex flex-column justify-content-center align-items-center">
                  <i class="fas fa-laptop"></i>
                  <p>
                    Acer Aspire 3 <br /> on upgraded
                  </p>
                </div>
              </div>
              <div class="col-md-3">
                <div class="box-equipment d-flex flex-column justify-content-center align-items-center">
                  <i class="fab fa-windows"></i>
                  <p>Windows 10 Spectre</p>
                </div>
              </div>
              <div class="col-md-3">
                <div class="box-equipment d-flex flex-column justify-content-center align-items-center">
                  <img src={vscode} alt="vscode" />
                  <p>Visual Studio Code</p>
                </div>
              </div>
              <div class="col-md-3">
                <div class="box-equipment d-flex flex-column justify-content-center align-items-center">
                  <i class="fas fa-code"></i>
                  <p>React Js</p>
                </div>
              </div>
              <div class="col-md-3 mt-3">
                <div class="box-equipment d-flex flex-column justify-content-center align-items-center">
                  <i class="fas fa-coffee"></i>
                  <p>Good day moccacino</p>
                </div>
              </div>
              <div class="col-md-3 mt-3">
                <div class="box-equipment d-flex flex-column justify-content-center align-items-center">
                  <i class="fab fa-figma"></i>
                  <p>Figma</p>
                </div>
              </div>
              <div class="col-md-3 mt-3">
                <div class="box-equipment d-flex flex-column justify-content-center align-items-center">
                  <img src={ai} alt="adobeilustrator" />
                  <p>Adobe Ilustrator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Start */}
      <Footer />
      {/* Footer End */}
    </>
  );
};

export default About;
