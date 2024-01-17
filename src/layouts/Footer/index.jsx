import React from "react";
import { Container } from "react-bootstrap";
import dowloadImg from "../../assets/svg/apple-store x play store.svg";
import logoFooter from "../../assets/svg/Logo_Bintang-Sempurna_white.svg";
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import ButtonChat from "../../components/ButtonChat";
import { Link } from "react-router-dom";
import "./style.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const goToProduct = () => {
    navigate(`/product`);
  };
  const goToTentang = () => {
    navigate(`/profile/tentang`);
  };
  const goToAward = () => {
    navigate(`/profile/award`);
  };
  const goToTestimoni = () => {
    navigate(`/profile/testimoni`);
  };
  const goToHubungi = () => {
    navigate(`/profile/hubungikami`);
  };
  const goToEventNow = () => {
    navigate(`/events/now`);
  };
  const goToEventRecap = () => {
    navigate(`/events/recap`);
  };
  const goTotechnology = () => {
    navigate(`/insight/technology`);
  };
  const goToKnowledge = () => {
    navigate(`/insight/knowledge`);
  };
  const goToBlog = () => {
    navigate(`/insight/blog`);
  };

  return (
    <>
      <section className="footer-section">
        <Container>
          <div className="row mb-3">
            <div className="col-md-6 col-12">
              <p className="content_text_author_description_p white-font">
                Jl. Bendungan Hilir No.46, RT.8/RW.1, Bendungan Hilir Tanah
                Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10210
              </p>
            </div>
            <div className="col-md-6 col-12" />
          </div>
          <div className="row">
            <div className="col-md-9 col-12 quiq-links-footer">
              <div className="row justify-content-center">
                <div className="col-md-4 col-6">
                  <h4 className="quiq-links-footer-title">Tentang Kami</h4>
                  <ul className="quiq-links-footer-ul">
                    <li>
                      <a href="/profile/tentang">Tentang</a>
                    </li>
                    <li>
                      <a href="https://onlineprint.co.id/">Onlineprint.co.id</a>
                    </li>
                    <li>
                      <a href="/insight/knowledge">Knowledge</a>
                    </li>
                    <li>
                      <a href="/insight/technology">Teknologi</a>
                    </li>
                    <li>
                      <a href="/events/recap">Event Recap</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 col-6">
                  <h4 className="quiq-links-footer-title">Bantuan</h4>
                  <ul className="quiq-links-footer-ul">
                    <li>
                      <a href="">Kebijakan Privasi</a>
                    </li>
                    <li>
                      <a href="">Syarat Ketentuan</a>
                    </li>
                    <li>
                      <a href="/profile/hubungikami">Hubungi Kami</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 col-6"></div>
              </div>
            </div>

            <div className="col-md-3 col-12 row justify-content-between">
              <div className="secure-img-footer-area col-12 mb-10">
                <h2 className="quiq-links-footer-title">
                  Member Sobat Bintang
                </h2>
                <a
                  href="https://play.google.com/store/search?q=sobat%20bintang&c=apps&hl=id-ID"
                  aria-label="link"
                >
                  <img src={dowloadImg} alt="" />
                </a>
                <span>Download Sekarang dan Dapatkan keuntungannya !!</span>
              </div>

              <div className="d-flex justify-content-md-star ">
                <span>Support center</span>
              </div>
              <div className="footer-contact-information d-flex flex-column col-6 col-12 mt-md-0 mt-8">
                <a className="link-button" href="#">
                  support@bintangsempurna.co.id
                </a>
                <a className="link-button" href="#">
                  marketing@bintangsempurna.co.id
                </a>
                <a className="link-button" href="#">
                  +62 811 9887 500
                </a>
              </div>
            </div>
          </div>
          <div className="mr-tp-40 row justify-content-between footer-area-under">
            <div className="col-md col-12 d-flex align-items-center">
              <img className="footer-logo-blue" src={logoFooter} alt="" />

              <div className="footer-social-icons">
                <a
                  Link="link"
                  className="icon-social"
                  target="_blank"
                  href="https://www.facebook.com/bintangsempurna/"
                >
                  <i>
                    <FaFacebook />
                  </i>
                </a>
                <a
                  className="icon-social"
                  target="_blank"
                  href="https://www.youtube.com/@bintangsempurna5051"
                >
                  <i>
                    <FaYoutube />
                  </i>
                </a>
                <a
                  className="icon-social"
                  target="_blank"
                  href="https://twitter.com/bisempurna46"
                >
                  <i>
                    <FaTwitter />
                  </i>
                </a>
                <a
                  className="icon-social"
                  target="_blank"
                  href="https://www.instagram.com/bisempurna46/"
                >
                  <i>
                    <FaInstagram />
                  </i>
                </a>
              </div>
            </div>
          </div>
          <div className="row justify-content-between final-footer-area mr-tp-40">
            <div className="col-md col-12">
              <div className="final-footer-area-text">
                <p className="section-subtitle mt-5">
                  © 2013 - {currentYear} | PT. Bintang Sempurna ©Copyright
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <ButtonChat />
    </>
  );
};

export default Footer;
