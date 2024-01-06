import React, { useEffect } from "react";
import { BsChatQuoteFill } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";
import { getTestimonial } from "../../store/product/action";

const ApaKataMereka = () => {
  const { entities, loading } = useSelector((state) => state.testimonial);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fectApi = async () => {
    dispatch(getTestimonial());
  };

  useEffect(() => {
    fectApi();
  }, []);

  const testimonialDetail = (id, category) => {
    navigate(`/profile/testimoni/${id}?populate=${category}`);
  };

  const baseUrl = import.meta.env.VITE_APP_BASEURL;

  const renderTestimonial = () => {
    const sortedEntities = entities.slice().sort((a, b) => b.id - a.id);
    const slicedEntities = sortedEntities.slice(0, 5);

    return slicedEntities.map((data) => {
      return (
        <SwiperSlide key={data.id}>
          <div className="row justify-content-between">
            <div className="col-md-12">
              <div className="modpack-box_testimoni">
                <div className="modpack-box-header_testimoni">
                  <a
                    className="add-btn"
                    onClick={() =>
                      testimonialDetail(data.id, data.attributes.slug)
                    }
                  >
                    <BsChatQuoteFill />
                  </a>
                  <img
                    src={`${baseUrl}${data.attributes.gambar.data.attributes.formats.small.url.substring(
                      1
                    )}`}
                    alt=""
                  />
                  <div className="text">
                    <h3 className="coodiv-text-8 font-weight-bold mb-0">
                      {data.attributes.Company}
                    </h3>
                    <div className="modpack-box-tags">
                      <span>{data.attributes.mode.data.attributes.title}</span>
                    </div>
                    <p className="coodiv-text-12 mb-0 mt-3">
                      {data.attributes.title}
                    </p>
                  </div>
                </div>
                <p className="modpack-box-footer mb-0 coodiv-text-12 mt-6">
                  {data.attributes.description}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      );
    });
  };

  return (
    <>
      <section className="py-20 b_back">
        <div className="title-default-coodiv-four">
          <h2 className="coodiv-text-4 font-weight-bold text-center">
            Apa Kata Mereka
          </h2>
          <div className="line-color-100%-2grid mx-auto"></div>
          <p className="content_text_author_description_p text-center ">
            bagiku PT. Bintang Sempurna
          </p>
        </div>
        <Swiper
          slidesPerView={3.5}
          spaceBetween={10}
          navigation={true}
          pagination={{
            clickable: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3.1,
              spaceBetween: 10,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {renderTestimonial()}
        </Swiper>
      </section>
    </>
  );
};

export default ApaKataMereka;
