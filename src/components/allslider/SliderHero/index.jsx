import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "./sliderhero.css";
import { useDispatch, useSelector } from "react-redux";
import { getSlider } from "../../../store/product/action";
import SkelBanner from "../../skelton/banner/image";
import { LazyLoadImage } from "react-lazy-load-image-component";
import SliderPartners from "../SliderPartners";

const SliderHero = () => {
  const { entities, loading } = useSelector((state) => state.slider);
  const dispatch = useDispatch();

  const fetchAPI = async () => {
    dispatch(getSlider());
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const baseUrl = "https://testrapi.bintangsempurna.co.id";

  return (
    <>
      <section className="mt-23">
        <Container>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1.1,
                spaceBetween: 5,
              },
              481: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              769: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 5,
              },

              // 1201: {
              //   slidesPerView: 1.1,
              //   spaceBetween: -180,
              // },
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {loading ? (
              <SkelBanner />
            ) : (
              entities.map((data) => {
                return (
                  <SwiperSlide key={data.id}>
                    <a href={data.attributes.url}>
                      <LazyLoadImage
                        className="imgHeroBanner d-none d-lg-block d-md-block "
                        src={`${baseUrl}${data.attributes.image.data.attributes.formats.large.url}`}
                        effect="blur"
                        url={data.attributes.url}
                        alt={data.attributes.alt}
                      />
                      <LazyLoadImage
                        className="imgHeroBanner d-block d-sm-none"
                        src={`${baseUrl}${data.attributes.mobile.data.attributes.formats.medium.url}`}
                        effect="blur"
                        url={data.attributes.url}
                        alt={data.attributes.alt}
                      />
                    </a>
                  </SwiperSlide>
                );
              })
            )}

            <div className="swiper-nav-btns"></div>
          </Swiper>
          <SliderPartners />
        </Container>
      </section>
    </>
  );
};

export default SliderHero;
