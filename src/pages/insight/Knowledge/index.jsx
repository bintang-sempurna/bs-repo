import React from "react";
import mediaSub from "./../../../assets/img/svg/media-substrate.svg";
import mediaPrePress from "./../../../assets/img/svg/pre-press.svg";
import mediaPress from "./../../../assets/img/svg/press.svg";
import mediaPostPress from "./../../../assets/img/svg/post-press.svg";
import SliderKategori from "../../../components/allslider/SliderKategori";
import sldKaT from "../../../dataMock/kategoriLink.json";
import ScrollToTop from "../../../components/ScrollTop";

const KnowledgePage = () => {
  return (
    <>
      <ScrollToTop />
      <section className="py-25 position-relative bg-red-bs mt-20">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6 col-12">
              <h2 className="coodiv-text-4 font-weight-bold text-white">
                Knowledge
              </h2>
              <p className="coodiv-text-9 white-font">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* knowladge start */}
      <section className="py-10 position-relative how-it-work-section">
        <div className="rounded-view" />
        <div className="container">
          <div className="row justify-content-center how-it-work-section-row">
            <div className="col-md-3 col-6 mb-10">
              <div className="how-it-works-box">
                <img src={mediaSub} className="icon-know" />
                <h2 className="coodiv-text-7">Media/Substrate</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
                <a
                  href="Knowledge_detail.html"
                  className="btn coodiv-text-11 mt-5 rounded-pill"
                >
                  Lihat
                </a>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-10">
              <div className="how-it-works-box">
                <img src={mediaPrePress} className="icon-know" />
                <h2 className="coodiv-text-7">Pre-Press</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
                <a href="#" className="btn coodiv-text-11 mt-5 rounded-pill">
                  Lihat
                </a>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-10">
              <div className="how-it-works-box">
                <img src={mediaPress} className="icon-know" />
                <h2 className="coodiv-text-7">Press</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
                <a href="#" className="btn coodiv-text-11 mt-5 rounded-pill">
                  Lihat
                </a>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-10">
              <div className="how-it-works-box">
                <img src={mediaPostPress} className="icon-know" />
                <h2 className="coodiv-text-7">Post Press</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
                <a href="#" className="btn coodiv-text-11 mt-5 rounded-pill">
                  Lihat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SliderKategori sldKaT={sldKaT} />
    </>
  );
};

export default KnowledgePage;
