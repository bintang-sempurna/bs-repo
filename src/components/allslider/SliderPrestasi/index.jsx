import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Card } from "react-bootstrap";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./sliderprestasi.css";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAwards } from "../../../store/product/action";
import ReactGA from "react-ga4";

const SliderPrestasi = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { entities, loading } = useSelector((state) => state.award);

  const fectApi = async () => {
    dispatch(getAwards());
  };

  const detailAward = (id, category) => {
    navigate(`/profile/award/${id}?populate=${category}`);
  };

  useEffect(() => {
    fectApi();
  }, []);

  const onClick = () => {
    ReactGA.event({
      category: "prestasi_category",
      action: "prestasi_action",
      label: "prestasi_label", // optional
      value: 99, // optional, must be a number
      nonInteraction: true, // optional, true/false
      transport: "xhr", // optional, beacon/xhr/image
    });
  };

  const baseUrl = import.meta.env.VITE_APP_BASEURL;

  const renderAward = () => {
    const sortedEntities = entities.slice().sort((a, b) => b.id - a.id);
    const slicedEntities = sortedEntities.slice(0, 10);

    return slicedEntities.map((data) => {
      return (
        <SwiperSlide key={data.id}>
          <Card
            className="class__Card"
            onClick={() => detailAward(data.id, data.attributes.slug)}
            style={{ cursor: "pointer" }}
          >
            <Card.Img
              variant="top"
              className="img___blog___art"
              src={
                baseUrl +
                data.attributes.image.data.attributes.formats.small.url.substring(
                  1
                )
              }
            />
            <Card.Body>
              <span className="category-icon-name__award">
                {data.attributes.mode.data.attributes.title}
              </span>
              <Card.Title className="mt-3">{data.attributes.title}</Card.Title>
              <Card.Text>{data.attributes.description}</Card.Text>
              <span className="details-btn">Baca Selengkapnya</span>
            </Card.Body>
          </Card>
        </SwiperSlide>
      );
    });
  };

  return (
    <>
      <Container>
        <div className="col-md-12 col-12">
          <div className="title-default-coodiv-four">
            <h2 className="coodiv-text-4 font-weight-bold text-center">
              Prestasi kami
            </h2>
            <div className="line-color-100%-2grid mx-auto" />
            <p className="content_text_author_description_p text-center ">
              Menjadi yang terpercaya, berawal dari proses yang tidak mudah.
              Berikut beberapa prestasi Bintang Sempurna dalam menyediakan
              solusi cetak yang inovatif dan kreatif standar mancanegara.
              Beberapa diantaranya ialah HP Award juga Fedrigoni Award .
            </p>
          </div>
        </div>

        <Row>
          <div className="col-lg-6 col-8"></div>
          <div className="col-lg-6 col-4">
            <p className="text-right">
              <Link
                to="/profile/award"
                style={{ cursor: "pointer" }}
                className="text-danger font-weight-bold text-decoration"
                onClick={onClick}
              >
                Lihat Semua
              </Link>
            </p>
          </div>
        </Row>

        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={false}
          breakpoints={{
            320: {
              slidesPerView: 2.1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper mb-5"
        >
          {renderAward()}
        </Swiper>
      </Container>
    </>
  );
};

export default SliderPrestasi;
