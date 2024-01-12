import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SliderProduct from "../../allslider/SliderProduct";
import LogoOp from "../../../assets//svg/icon-op.svg";

const LebihCepat = () => {
  return (
    <>
      <section className="mt- py-5">
        <Container>
          <Row>
            <Col lg={6}>
              {/* <div className="side-apps-details ">
                <h2 className="coodiv-text-4 font-weight-bold">
                  Solusi Cetak Lengkap <br></br>Worry-Free
                </h2>
                <div className="line-color-50%" />
                <p className="content_text_author_description_p">
                  Pilih layanan cetak kualitas terbaik mulai dari cetak digital,
                  cetak offset hingga cetak sablon. Jangan lupa pastikan
                  finishing yang sesuai juga untuk tampilan memikat.
                </p>
                <a
                  href="https://onlineprint.co.id/"
                  className="btn coodiv-text-11 mt-10 rounded-pill"
                >
                  Lihat Selengkapnya
                </a>
              </div> */}

              <div className="col-12 mb-3">
                <p
                  style={{ color: "#ee9823" }}
                  className="eyebrow content-text-author_eyebrow"
                >
                  onlineprint.co.id
                </p>
                <h1 className="coodiv-text-4 font-weight-bold">
                  Cetak Praktis Buat Kaum Dinamis
                </h1>
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
            </Col>
            <Col lg={6}>
              <SliderProduct />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default LebihCepat;
