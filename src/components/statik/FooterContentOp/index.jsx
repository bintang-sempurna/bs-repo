import React from "react";
import imgContentOP from "../../../assets/img/contentStatic/content_img 4.webp";
import circleFooterop from "../../../assets/svg/circle-footer-award.svg";
import { Link } from "react-router-dom";

const FooterContentOp = () => {
  return (
    <>
      <section className=" py-10 footer-section-ordernow-op mt-10">
        <img src={circleFooterop} className="footer-about-shape5" />
        <div className="container">
          <div className="row">
            <div className="col-sm pt-15 ">
              <h2 className="coodiv-text-4 ">
                Cek Pengalaman Baru Dalam Dunia Printing
              </h2>
              <div className="line-color-50%" />
              <p className="content_text_author_description_p  mt-5">
                Memulai dengan cepat dan membawa dunia printing lebih mudah di
                akses untuk para pelanggan dalam membutuhkan layanan online
                print.
              </p>
              <a
                href="https://onlineprint.co.id/"
                className="btn coodiv-text-11 mt-5 rounded-pill"
              >
                Klik disini
              </a>
            </div>
            <div className="col-sm">
              <div className="img-apps">
                <img className="footer-class-op" src={imgContentOP} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterContentOp;
