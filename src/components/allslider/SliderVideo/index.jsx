import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

//api environment

import { Pagination, Navigation } from "swiper";
import { Container, Row, Card } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { getVideo } from "../../../store/product/action";
import ReactPlayer from "react-player/youtube";

const SliderVideo = () => {
  const { entities, loading } = useSelector((state) => state.video);
  const dispatch = useDispatch();

  const feactApi = async () => {
    dispatch(getVideo());
  };

  useEffect(() => {
    feactApi();
  }, []);

  const renderVideo = () => {
    return entities.map((data) => {
      return (
        <SwiperSlide key={data.id.toString()}>
          <div className="yt-bs-slide">
            <ReactPlayer
              width="100%"
              height="200px"
              url={data.attributes.url}
              alt={data.attributes.alt}
            />
          </div>
        </SwiperSlide>
      );
    });
  };

  return (
    <>
      <Container className="mt-5 mb-20">
        <Row>
          <div className="col-lg-6 col-8">
            <h2 className="coodiv-text-6 bcm-a-like">Vidio Seru lainnya</h2>
          </div>
          <div className="col-lg-6 col-4">
            <p className="text-right">
              <a
                href="https://www.youtube.com/@bintangsempurna5051"
                className="text-danger font-weight-bold text-decoration-none"
              >
                Lihat Semua
              </a>
            </p>
          </div>
        </Row>
        <div className="line-color-100%-2grid" />
        <Swiper
          slidesPerView={4}
          spaceBetween={8}
          pagination={true}
          navigation={true}
          breakpoints={{
            "@0.00": {
              slidesPerView: 2.1,
              spaceBetween: 5,
            },
            "@0.75": {
              slidesPerView: 3,
              spaceBetween: 8,
            },
            "@1.00": {
              slidesPerView: 4,
              spaceBetween: 8,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 8,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {renderVideo()}
        </Swiper>
      </Container>
    </>
  );
};

export default SliderVideo;
