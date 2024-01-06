import React from "react";
import SliderPartners from "../../allslider/SliderPartners";
import image1 from "../../../assets/img/contentStatic/image1.png";
import image2 from "../../../assets/img/contentStatic/image2.png";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./style.css";
import SliderEvents from "../../allslider/SliderEvents";

const EventNow = () => {
  const navigate = useNavigate();

  const goToEventRecap = () => {
    navigate(`/events/recap`);
  };

  return (
    <>
      <section className="mt-20 lines-bg-section position-relative coodiv-z-index-2 ">
        <div className="container">
          <div className="row row justify-content-between py-30">
            <h1 className="text-center text-danger font-weight-bold parag-h1">
              Bintang sempurna Events
            </h1>
            <h2 className="text-center parag-h2 pl-5 pr-5">
              Site Visit to
              <span className="text_world"> Bintang Sempurna</span>
            </h2>

            <p className="text-center content_text_author_description_p  mt-3">
              Jelajah Cetak Tanpa Batas mulai dari Ragam Material hingga
              Teknologi Printing terkini
            </p>

            <Link
              className="btn coodiv-text-events  rounded-pill"
              to="/events/recap"
              onClick={() => goToEventRecap()}
            >
              View All Events Recap
            </Link>
          </div>

          <p className="text-center content_text_author_description_p mt-5 ">
            Sponsored by beloved partners :
          </p>
          <SliderPartners />

          <SliderEvents />
        </div>
      </section>

      <section className="  bg-white">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-lg-6 col-12 side-apps-details">
              <p
                style={{ color: "#E20613" }}
                className="eyebrow content-text-author_eyebrow"
              >
                ADA APA NIH???
              </p>
              <h2 className="main-header-title coodiv-text-4 font-weight-bold">
                Selamat Datang Designer
              </h2>
              <div className="line-color-50%" />
              <p className="content_text_author_description_p">
                Dalam acara "SITE VISIT to BINTANG SEMPURNA" di Head Quarter PT
                Bintang Sempurna Acara ini pastinya berguna buat kamu yang
                bercita-cita ingin mengembangkan diri dalam industri kreatif.
                Nantinya, kamu bakalan berbincang langsung sama ahli percetakan
                dari Bintang Sempurna yang sudah berdiri dari tahun
              </p>
            </div>
            <div className="col-lg-6 col-12 align-items-center">
              <div className="content-text-author mb-md-0 mb-14">
                <div className="section_text_graphic_image">
                  <img src={image1} alt="" title="" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-white">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-lg-6 col-12 align-items-center d-none d-lg-block d-print-block">
              <div className="content-text-author mb-md-0 mb-14">
                <div className="section_text_graphic_image">
                  <img src={image2} alt="" title="" loading="lazy" />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12 side-apps-details">
              <div className="title_all">
                <p
                  style={{ color: "#E20613" }}
                  className="eyebrow content-text-author_eyebrow"
                >
                  SERUNYA DISINI
                </p>
                <h2 className="main-header-title coodiv-text-4 font-weight-bold">
                  Factory Tour,Mini Games,Personal Souvenir
                </h2>
                <div className="line-color-50%" />
                <p className="content_text_author_description_p">
                  Selain diskusi, kalian bakal dapetin experience bagaimana
                  teknologi printing membantu visualisasi brandmu, factory visit
                  dan melihat proses print secara langsung. Juga ada games seru
                  yang bisa kamu ikuti dan menangkan!
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-12 align-items-center d-block d-sm-none">
              <div className="content-text-author mb-md-0 mb-14">
                <div className="section_text_graphic_image">
                  <img src={image2} alt="" title="" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventNow;
