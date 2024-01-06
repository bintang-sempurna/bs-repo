import React, { useEffect } from "react";
import { Container, Row, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadImage } from "react-lazy-load-image-component";

// import axios from "axios";
import "./sliderblog.css";
import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../../store/product/action";
import SkelCard from "../../skelton/card";
import { Link } from "react-router-dom";
import ReactGA from "react-ga4";

const SliderBlog = () => {
  const { entities, loading } = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fectApi = async () => {
    dispatch(getAll());
  };

  const blogDetail = (id, category) => {
    navigate(`/insight/blog/${id}?populate=${category}`);
  };

  useEffect(() => {
    fectApi();
  }, []);

  const onClick = () => {
    ReactGA.event({
      category: "blog_category",
      action: "blog_action",
      label: "blog_label", // optional
      value: 99, // optional, must be a number
      nonInteraction: true, // optional, true/false
      transport: "xhr", // optional, beacon/xhr/image
    });
  };

  const baseUrl = import.meta.env.VITE_APP_BASEURL;

  const renderBlog = () => {
    const sortedEntities = entities.slice().sort((a, b) => b.id - a.id);
    const slicedEntities = sortedEntities.slice(0, 10);

    return slicedEntities.map((data) => {
      return (
        <SwiperSlide key={data.id}>
          <Card
            className="class__Card"
            onClick={() => blogDetail(data.id, data.attributes.slug)}
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
              <span className="category-icon-blog">
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
    <section className="py-15">
      <Container>
        <Row>
          <div className="col-lg-6 col-8">
            <h2 className="coodiv-text-6 headline-art">Blog Lainnya</h2>
          </div>

          <div className="col-lg-6 col-4">
            <p className="text-right">
              <Link
                to="/insight/blog"
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
            spaceBetween={20}
            navigation={true}
            pagination={{
              dynamicBullets: true,
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
            {renderBlog()}
          </Swiper>
        )}
      </Container>
    </section>
  );
};

export default SliderBlog;
