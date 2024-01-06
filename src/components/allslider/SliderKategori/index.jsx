import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import { Navigation } from "swiper";
import { Container } from "react-bootstrap";

import { AiOutlinePrinter } from "react-icons/ai";
import { getLinkProduct } from "../../../store/product/action";
import { useDispatch, useSelector } from "react-redux";

const SliderKategori = () => {
  const { entities, loading } = useSelector((state) => state.link);
  const dispatch = useDispatch();

  const fetchApi = async () => {
    dispatch(getLinkProduct());
  };

  useEffect(() => {
    fetchApi();
  }, []);

  // const baseUrl = import.meta.env.VITE_APP_BASEURL;

  const renderLink = () => {
    return entities.map((data) => {
      return (
        <SwiperSlide key={data.id}>
          <div className="item">
            <div className="box-features-sevices-home">
              <div className="host-pack-features">
                {/* <div className="col">
                  <AiOutlinePrinter className="iconKategori" />
                </div> */}

                <div className="col">
                  <h5>{data.attributes.title}</h5>
                  <p className="modpack-box-footer mb-0 coodiv-text-12 ">
                    Powered by :
                  </p>
                  <p
                    style={{ color: "#ee9823" }}
                    className="modpack-box-footer mb-0 coodiv-text-12 pb-4"
                  >
                    onlineprint.co.id
                  </p>
                </div>

                <a className="box-btn mt-0" href={data.attributes.link}>
                  Lihat Detail
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      );
    });
  };

  return (
    <>
      <div className="py-10 caraousel-artikel border-top product-service">
        <Container>
          <div className="row">
            <div className="col-lg-6 col-8">
              <h2 className="coodiv-text-6 bcm-a-like">
                Lihat Layanan & Produk yang lainnya
              </h2>
            </div>
            {/* <div className="col-lg-6 col-4">
              <p className="text-right">
                <a
                  href="#"
                  className="text-danger font-weight-bold text-decoration-none"
                >
                  Lihat Semua
                </a>
              </p>
            </div> */}
          </div>
          <div className="line-color-100%-2grid"></div>
          <Swiper
            slidesPerView={6}
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
                slidesPerView: 5,
                spaceBetween: 8,
              },
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {renderLink()}
            {/* {sldKaT.map((sldKaT, id) => (
              <SwiperSlide key={id}>
                <div className="item">
                  <div className="box-features-sevices-home">
                    <div className="host-pack-features">
                      <div className="col">
                        <AiOutlinePrinter className="iconKategori" />
                      </div>

                      <div className="col">
                        <h5>{sldKaT.kategori}</h5>
                        <p className="modpack-box-footer mb-0 coodiv-text-12 ">
                          Powered by :
                        </p>
                        <p
                          style={{ color: "#ee9823" }}
                          className="modpack-box-footer mb-0 coodiv-text-12 pb-4"
                        >
                          onlineprint.co.id
                        </p>
                      </div>

                      <a className="box-btn mt-0" href={sldKaT.links}>
                        Lihat Detail
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))} */}
          </Swiper>
        </Container>
      </div>
    </>
  );
};

export default SliderKategori;
