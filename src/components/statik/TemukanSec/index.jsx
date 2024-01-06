import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link
import ImgStatic from "../../../assets/img/contentStatic/webp/content_img.webp";
import svgStatic1 from "../../../assets/svg/elipse.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./style.css";
import ReactGA from "react-ga4";
import Compare from "../../Compare";

const TemukanSec = () => {
  const [text] = useTypewriter({
    words: [" Solusi ", " Teknologi ", " Material ", " Warna ", " Kualitas "],
    loop: 0,
  });

  const onClick = () => {
    ReactGA.event({
      category: "product_category",
      action: "product_action",
      label: "product_label", // optional
      value: 99, // optional, must be a number
      nonInteraction: true, // optional, true/false
      transport: "xhr", // optional, beacon/xhr/image
    });
  };

  return (
    <>
      <section className="mt-3 py-10">
        <Container>
          <img src={svgStatic1} className="home-about-shape" />
          <Row className="">
            {/* <Col lg={6}>
              <div className="d-flex align-items-center">
                <div className="content-text-author mb-md-0">
                  <div className="section_text_graphic_image">
                    <LazyLoadImage
                      loading="eager"
                      rel="preload"
                      src={ImgStatic}
                      effect="blur"
                      className="d-none d-lg-block d-print-block"
                      alt="content"
                    />
                  </div>
                </div>
              </div>
            </Col> */}

            <div className="col-12">
              <div className="side-apps-details">
                <h2 className="main-header-title coodiv-text-4 font-weight-bold text-center">
                  Temukan <span className="text__loop">{text}</span>
                  <span style={{ color: "red" }}>
                    <Cursor cursorStyle="|" />
                  </span>
                </h2>
                <h3 className="coodiv-text-4 font-weight-bold text-center">
                  Untuk Hasil Yang Lebih Menarik
                </h3>

                <div className="line-color-100%-2grid mx-auto"></div>
                {/* <div className="line-color-50% "></div> */}
                <p className="content_text_author_description_p text-center">
                  Jadilah yang lebih tahu solusi cetak maksimal dengan teknologi
                  printing terkini di setiap kebutuhan Anda.
                </p>

                {/* Menggunakan Link untuk navigasi */}
                <p className="text-center">
                  <Link
                    to="/product"
                    className="btn coodiv-text-11 mt-10 rounded-pill mb-5"
                    onClick={onClick}
                  >
                    Lihat Selengkapnya
                  </Link>
                </p>

                <Compare />
              </div>
            </div>

            {/* <Col lg={6}>
              <div className="col-12">
                <div className="side-apps-details">
                  <h2 className="main-header-title coodiv-text-4 font-weight-bold">
                    Temukan <span className="text__loop">{text}</span>
                    <span style={{ color: "red" }}>
                      <Cursor cursorStyle="|" />
                    </span>
                  </h2>
                  <h3 className="coodiv-text-4 font-weight-bold">
                    Untuk Hasil Yang Lebih Menarik
                  </h3>

                  <div className="line-color-50%"></div>
                  <p className="content_text_author_description_p">
                    Jadilah yang lebih tahu solusi cetak maksimal dengan
                    teknologi printing terkini di setiap kebutuhan Anda.
                  </p>

                 
                  <Link
                    to="/product"
                    className="btn coodiv-text-11 mt-10 rounded-pill"
                    onClick={onClick}
                  >
                    Lihat Selengkapnya
                  </Link>
                </div>
              </div>
            </Col> */}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TemukanSec;
