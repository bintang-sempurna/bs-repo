import React, { useEffect, useRef, useState } from "react";
import { Container, Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
// Import Swiper styles
import "swiper/css";
import { useDispatch, useSelector } from "react-redux";
import { getSiteVisit } from "../../../store/product/action";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./styles.css";
import { VscVerifiedFilled } from "react-icons/vsc";
import { Link } from "react-router-dom";

const SliderEvents = () => {
  const { entities, loading } = useSelector((state) => state.event);
  const dispatch = useDispatch();

  const fetchAPI = async () => {
    dispatch(getSiteVisit());
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const baseUrl = import.meta.env.VITE_APP_BASEURL;

  const renderEvent = () => {
    const sortedEntities = [...entities].sort(
      (a, b) =>
        new Date(b.attributes.tanggal_event) -
        new Date(a.attributes.tanggal_event)
    );

    return sortedEntities.map((data) => {
      return (
        <>
          <SwiperSlide key={data.id} className={data.attributes.off}>
            <Card className="class__Card" style={{ cursor: "pointer" }}>
              <LazyLoadImage
                variant="top"
                className="img___blog___art"
                alt="thumbnail"
                src={`${baseUrl}${data.attributes.image.data.attributes.formats.thumbnail.url.substring(
                  1
                )}`}
                effect="blur"
              />

              <Card.Body>
                <span className="category-icon-name__product ">
                  {new Date(data.attributes.tanggal_event).toLocaleDateString(
                    "id-ID",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </span>

                <Card.Title className="mt-3">
                  {data.attributes.title}
                </Card.Title>
                <div className="row">
                  <div className="icon_position">
                    <div className="d-inline-flex p-2 bd-highlight">
                      <VscVerifiedFilled className="verified" />
                      <img
                        className="img_sitevisit_logo"
                        alt="site visit icon"
                        src={`${baseUrl}${data.attributes.icon.data.attributes.formats.thumbnail.url.substring(
                          1
                        )}`}
                      />
                    </div>
                  </div>
                  <div className="d-flex bd-highlight">
                    <div className="p-2 flex-fill bd-highlight">
                      <a
                        className="btn button_regist rounded-pill  "
                        href={data.attributes.url}
                      >
                        Daftar
                      </a>
                    </div>
                    <div className="p-2 flex-fill bd-highlight">
                      <a
                        className="btn button_regist_view rounded-pill  "
                        href={data.attributes.url}
                      >
                        Lihat
                      </a>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </SwiperSlide>
        </>
      );
    });
  };

  return (
    <>
      <Container className="mt-23">
        <h3 className="parag-h3 mb-4">
          Site Visit
          <span className="text_world-h3"> Akan Datang</span>
        </h3>

        <Swiper
          spaceBetween={10}
          navigation={true}
          pagination={false}
          breakpoints={{
            320: {
              slidesPerView: 1.4,
              spaceBetween: 5,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 5,
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
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {renderEvent()}
        </Swiper>
        <div class="d-flex justify-content-center">
          <Link
            className="btn button_regist  rounded-pill "
            to="/events/recap"
            onClick={() => goToEventRecap()}
          >
            Lihat Semua
          </Link>
        </div>
      </Container>
    </>
  );
};

export default SliderEvents;
