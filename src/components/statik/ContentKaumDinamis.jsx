import React from "react";
import { Container } from "react-bootstrap";
import ElipseSvg from "../../assets/svg/elipse3.svg";
import StatikRedBs from "../../assets/img/contentStatic/content_img5.png";
import { Link } from "react-router-dom";
import ReactGA from "react-ga4";

const ContentKaumDinamis = () => {
  const handleEvents = () => {
    ReactGA.event({
      category: "about_category",
      action: "about_action",
      label: "about_label", // optional
      value: 99, // optional, must be a number
      nonInteraction: true, // optional, true/false
      transport: "xhr", // optional, beacon/xhr/image
    });
  };

  return (
    <>
      <section className="py-20 pb-5">
        <Container>
          <img src={ElipseSvg} className="home-about-shape3" />
          <div className="container">
            {/* <div className="row justify-content-start">
              <div className="col-md-6 col-12 d-flex align-items-center">
                <div className="content-text-author mb-md-0 mb-14">
                  <div className="section_text_graphic_image">
                    <img src={StatikImg} alt="" title="" loading="lazy" />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <p
                  style={{ color: "#ee9823" }}
                  className="eyebrow content-text-author_eyebrow"
                >
                  onlineprint.co.id
                </p>
                <h2 className="coodiv-text-4 font-weight-bold">
                  Cetak Praktis Buat Kaum Dinamis
                </h2>
                <div className="line-color-50%" />
                <p className="content_text_author_description_p">
                  Cetak darimana saja, kapan saja dan apa saja yang Anda
                  butuhkan di sini tanpa antri, Mulai mencetak kebutuhan Anda
                  secara instan di onlineprint.co.id
                </p>
                <div className="row justify-content-center powered-by">
                  <div className="col-md-12">
                    <p
                      style={{ color: "#979797" }}
                      className="eyebrow content-text-author_eyebrow"
                    >
                      powered by :
                    </p>
                    <a href="#">
                      <img src={LogoOp} alt="" />
                    </a>
                  </div>
                </div>
                <a
                  href="https://onlineprint.co.id/"
                  className="btn coodiv-text-11 mt-10 rounded-pill"
                >
                  Lihat Selengkapnya
                </a>
              </div>
            </div> */}

            <div className="row justify-content-start pt-10">
              <div className="col-md-6 col-12">
                <p
                  style={{ color: "#E20613" }}
                  className="eyebrow content-text-author_eyebrow"
                >
                  PT. Bintang Sempurna
                </p>
                <h2 className="coodiv-text-4 font-weight-bold">
                  Perjalanan Bintang Sempurna
                </h2>
                <div className="line-color-50%" />
                <p className="content_text_author_description_p">
                  Dimulai dari sebuah tempat fotokopi kini berkembang menjadi
                  salah satu percetakan inovatif dibangun bersama dengan Sumber
                  Daya Manusia yang memadai dan juga teknologi cetak terkini,
                </p>

                <Link
                  to="/profile/tentang"
                  className="btn coodiv-text-11 mt-10 rounded-pill"
                  onClick={handleEvents}
                >
                  Lihat Selengkapnya
                </Link>
              </div>
              <div className="col-md-6 col-12 d-flex align-items-center">
                <div className="content-text-author">
                  <div className="section_text_graphic_image">
                    <img
                      src={StatikRedBs}
                      className="content-img-play mt-9"
                      alt=""
                      title=""
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContentKaumDinamis;
