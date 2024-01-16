import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTestimonialDetails } from "../../../../store/product/action";
import ScrollToTop from "../../../ScrollTop";
import ReactMarkdown from "react-markdown";
import SliderBlog from "../../../allslider/SliderBlog";

// icon
import { FaStar } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";

import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import MetaTestimonial from "../../../../MetaTag/TestimoniMeta";

const TestiDetail = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data, loading } = useSelector((state) => state.testimonial);

  const fetchDetail = async (data) => {
    await dispatch(getTestimonialDetails(data));
  };

  useEffect(() => {
    fetchDetail(id);
  }, [id]);

  const baseUrl = import.meta.env.VITE_APP_BASEURL;

  return (
    <>
      <ScrollToTop />
      <MetaTestimonial
        title={data.attributes.SEO?.title || ""}
        description={data.attributes.SEO?.description || ""}
        url={
          data.attributes.gambar.data.attributes.formats.thumbnail?.url || ""
        }
      />
      <section className="py-10 pb-5 mt-20">
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-md-6 col-12 align-items-center">
              <div className="content-text-author">
                <div className="section_text_graphic_image">
                  <img
                    src={
                      baseUrl +
                      data.attributes.gambar.data.attributes.formats.large.url.substring(
                        1
                      )
                    }
                    className="recapArtic"
                  />

                  {/* Button Start*/}
                  <ModalVideo
                    channel="youtube"
                    isOpen={isOpen}
                    videoId={data.attributes.videoID}
                    onClose={() => setIsOpen(false)}
                  />
                  <a className="play-button-in-section video-btn">
                    <button className="btn" onClick={openModal}>
                      <FaPlayCircle />
                    </button>
                    <span className="waves wave-1" />
                    <span className="waves wave-2" />
                    <span className="waves wave-3" />
                    <span className="waves wave-4" />
                  </a>
                  {/* Button animasi end */}
                </div>
              </div>
            </div>

            <div className="col-md-6 col-12 pt-8">
              <h2 className="coodiv-text-4 font-weight-bold">
                {data.attributes.title}
              </h2>
              <p className="content_text_author_description_p">
                {data.attributes.university}
              </p>
              <p class="content_text_author_description_p">
                {data.attributes.Company}
              </p>
              <div className="line-color-50%"></div>

              <div className="share-product ">
                <span className="">Rate : </span>
                <div className="rate-icon-product">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              {/* <div className="share-product ">
                <span className="">Bagikan Testimoni ini :</span>
                <div className="share-icon-product"></div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 comment-detail">
        <div className="container">
          <div className="comment-rate">
            <ReactMarkdown className="title___details">
              {data.attributes.description}
            </ReactMarkdown>
          </div>
        </div>
      </section>

      <SliderBlog />
    </>
  );
};

export default TestiDetail;
