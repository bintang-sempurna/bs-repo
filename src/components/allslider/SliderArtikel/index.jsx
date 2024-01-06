import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";

import { Navigation } from "swiper";
import { Container, Row, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getRecap } from "../../../store/product/action";
import { useNavigate } from "react-router-dom";
import SkelCard from "../../skelton/card";
import { Link } from "react-router-dom";
import ReactGA from "react-ga4";

const SliderArtikel = () => {
  // batas =============
  const { entities, loading } = useSelector((state) => state.recap);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // fect api
  const fectApi = async () => {
    dispatch(getRecap());
  };

  const recapDetail = (id, category) => {
    navigate(`/events/recap/${id}?populate=${category}`);
  };

  useEffect(() => {
    fectApi();
  }, []);
  // batas

  const onClick = () => {
    ReactGA.event({
      category: "recap_category",
      action: "recap_action",
      label: "recap_label", // optional
      value: 99, // optional, must be a number
      nonInteraction: true, // optional, true/false
      transport: "xhr", // optional, beacon/xhr/image
    });
  };

  const baseUrl = import.meta.env.VITE_APP_BASEURL;

  const renderArtikel = () => {
    const sortedEntities = entities.slice().sort((a, b) => b.id - a.id);
    const slicedEntities = sortedEntities.slice(0, 10);

    return slicedEntities.map((data) => {
      return (
        <SwiperSlide key={data.id}>
          <Card
            className="class__Card"
            // onClick={() => recapDetail(data.id, data.attributes.slug)}
            onClick={() => recapDetail(data.id, data.attributes.slug)}
            style={{ cursor: "pointer" }}
          >
            <LazyLoadImage
              variant="top"
              className="img___blog___art"
              alt={data.attributes.title}
              src={`${baseUrl}${data.attributes.image.data.attributes.formats.small.url.substring(
                1
              )}`}
              effect="blur"
            />

            <Card.Body>
              <span className="category-icon-artikel">
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
    <Container className="py-5">
      <Row>
        <div className="col-lg-6 col-8">
          <h2 className="coodiv-text-6 headline-art">Event Recap</h2>
        </div>
        <div className="col-lg-6 col-4">
          <p className="text-right">
            <Link
              to="/events/recap"
              style={{ cursor: "pointer" }}
              className="text-danger font-weight-bold text-decoration"
              onClick={onClick}
            >
              Lihat Semua
            </Link>
          </p>
        </div>
      </Row>
      <div className="line-color-100%-2grid" />
      {loading ? (
        <SkelCard />
      ) : (
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          pagination={{
            clickable: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2.1,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 5,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {renderArtikel()}
        </Swiper>
      )}
    </Container>
  );
};

export default SliderArtikel;
