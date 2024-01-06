import React from "react";
import ImgAwardPage from "../../../assets/img/contentStatic/award in paris.png";
import VideoAward from "../../modal/ModalAward";

const AwardHeader = () => {
  return (
    <>
      <section className="pb-5 mt-20">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-md-6 col-12 d-flex align-items-center">
              <div className="content-text-author">
                <div className="section_text_graphic_image">
                  <img
                    src={ImgAwardPage}
                    className="content-img-play mt-9"
                    alt=""
                    title=""
                    loading="lazy"
                  />
                  {/* Button animasi start */}

                 
                      <VideoAward />
                  {/* Button animasi end */}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 pt-10 side-apps-details">
              <p
                style={{ color: "#fcb901" }}
                className="eyebrow content-text-author_eyebrow"
              >
                #BintangSempurnaAwards
              </p>
              <h2 className="coodiv-text-4 font-weight-bold">
                Outdoor Print Lenticular Terbesar, PT Bintang Sempurna Menang di
                Negeri Cinta.{" "}
              </h2>
              <div className="line-color-50%" />
              <p className="content_text_author_description_p">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AwardHeader;
