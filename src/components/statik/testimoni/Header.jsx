import React from "react";
import imgHeaderTestimoni from "../../../assets/img/contentStatic/content_img5.png";
import { FaPlayCircle } from "react-icons/fa";
import VideoTestimoni from "../../modal/ModalTestimoni";

const HeaderTestimoni = () => {
  return (
    <>
      <section className=" pb-5 mt-20">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-md-6 col-12 d-flex align-items-center">
              <div className="content-text-author">
                <div className="section_text_graphic_image">
                  <img
                    src={imgHeaderTestimoni}
                    className="content-img-play mt-9"
                    alt=""
                    title=""
                    loading="lazy"
                  />
                  {/* Button animasi start */}
                  <VideoTestimoni />
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
                Respon Anda Sangat Berarti
              </h2>
              <div className="line-color-50%" />
              <p className="content_text_author_description_p">
                Bantu Kami terus berkembang menjadi lebih baik lagi dalam
                memenuhi ekspektasi Anda sesuai kebutuhan. Dukungan Anda sangat
                berharga .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeaderTestimoni;
