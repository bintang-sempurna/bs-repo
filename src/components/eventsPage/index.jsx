import React, { useEffect, useState, useRef } from "react";
import { Button, Container, Card, Col, Row } from "react-bootstrap";
import ImgMentor from "../../assets/img/contentStatic/speaker_event.jpg";
import Bg_introImg from "../../assets/img/contentStatic/events_bs.png";
import { FaPlay } from "react-icons/fa";
import "./stylesEvents.css";

import SliderEvents from "../allslider/SliderEvents";

import ApaKataMereka from "../ApaKataMereka";

const EventsContent = (props) => {
  return (
    <>
      <SliderEvents />

      <section className="py-10 pb-5 position-relative ">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-7 about-us-img-section">
              <h2 className="main-header-title coodiv-text-4">
                Tentang Events Bintang Sempurna
              </h2>
              <div className="line-color-50%" />
              <p className="content_text_author_description_p">
                Program Events Bintang Sempurna ini adalah program pengembangan
                dalam dunia bisnis printing dan teknologi printing. untuk
                meningkatkan pengetahuan dalam printing. dan membantu untuk para
                pembisnis.
              </p>
              {/* Image */}
              <img src={Bg_introImg} alt="" />
              {/* Button animasi start */}
              <a
                className="play-button-in-section video-btn mt-10"
                data-toggle="modal"
                data-src="https://www.youtube-nocookie.com/embed/d3hmAPToFyk?"
                data-target="#videomodal"
                href="#"
              >
                <FaPlay className="icon-play-now text-white" />
                <span className="waves wave-1" />
                <span className="waves wave-2" />
                <span className="waves wave-3" />
                <span className="waves wave-4" />
              </a>
              {/* Button animasi end */}
            </div>
            <div className="col-md-5 about-us-img-section role-regist">
              <div className="list-syarat-item">
                <h2 className="main-header-title coodiv-text-4">
                  {" "}
                  Alur Pendaftaran{" "}
                </h2>
                <ul className="list-syarat-list">
                  <li className="list-syarat-verified">
                    Membuat akun/Registrasi dan mengisi data diri dengan benar
                    dan valid.
                  </li>
                  <li className="list-syarat-verified">
                    Pilih events/acara yang tersedia
                  </li>
                  <li className="list-syarat-verified">
                    Membuat akun / Registrasi dan mengisi data diri dengan benar
                    dan valid.
                  </li>
                </ul>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-speaker">
        <div className=" container ">
          <div className=" row justify-content-between ">
            <div className="col-lg-7 about-us-img-section ">
              <img src={ImgMentor} alt=" " />
            </div>
            <div className="col-lg-5 side-apps-details">
              <h2 className="main-header-title coodiv-text-4">
                Bertemu dengan pembicara kami
              </h2>
              <div className="line-color-50%" />
              <p className="content_text_author_description_p speaker-detail">
                Pakar komunitas di{" "}
                <span style={{ color: "red" }}>PT.Bintang Sempurna</span>
                Memberikan pengetahuan tentang Print Solutions dan Teknologi.
                Berpartisipasi dalam Q&amp;A, ikuti berita Printing, dan
                diskusikan cetak dengan para ahli di komunitas kami.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ApaKataMereka />
    </>
  );
};

export default EventsContent;
