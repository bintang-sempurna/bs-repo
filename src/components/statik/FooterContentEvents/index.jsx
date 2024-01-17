import React from "react";
import { Container } from "react-bootstrap";
import imgFooterEvent from "../../../assets/img/contentStatic/image_footer.png";
import { Link } from "react-router-dom";

const FooterContent = () => {
  return (
    <>
      <section className="footer-section-banner">
        <Container>
          <div className="row">
            <div className="col-sm pt-15 ">
              <h2 className="coodiv-text-3 white-font">Events Kami</h2>
              <h3 className="free-trial-footer-banner-title">
                Ayo . . ! Mulai untuk mengetahui dunia Printing
              </h3>
              <p className="content_text_author_description_p white-font mt-5">
                Berpartisipasi dalam QnA, ikuti berita Printing, dan diskusikan
                dengan para ahli di PT. Bintang Sempurna Events ini.
              </p>
              <Link
                to="/events/now"
                className="btn btn-light rounded-pill shadow-sm coodiv-text-11 mb-10 "
              >
                Selengkapnya
              </Link>
            </div>
            <div className="col-sm">
              <div className="img-apps">
                <img
                  className="Footer_image"
                  src={imgFooterEvent}
                  alt="image"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default FooterContent;
