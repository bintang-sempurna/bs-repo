import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import { Container, Button } from "react-bootstrap";
import AllProduct from "../../../assets/img/contentStatic/all_Product.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import { FaShoppingCart } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { getLinkProduct } from "../../../store/product/action";

const SliderProduct = () => {
  const { entities, loading } = useSelector((state) => state.link);
  const dispatch = useDispatch();

  const fetchApi = async () => {
    dispatch(getLinkProduct());
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const baseUrl = import.meta.env.VITE_APP_BASEURL;

  const renderLink = () => {
    return entities.map((data) => {
      return (
        <SwiperSlide key={data.id}>
          <div className="modpack-box-header ">
            <div className="modpack-box ">
              {/* <a className="add-btn" href="#">
                <FaShoppingCart />
              </a> */}
              <img
                className="img_product-all"
                src={
                  baseUrl +
                  data.attributes.image.data.attributes.formats.small.url.substring(
                    1
                  )
                }
              />
              <div className="title_product">
                <h2 className="coodiv-text-8 font-weight-bold mb-0">
                  {data.attributes.title}
                </h2>
                <p className="modpack-box-footer mb-0 coodiv-text-12 ">
                  Powered by :
                </p>
                <div className="d-flex align-items-start">
                  {/* <img src={IconOp} className="icon-small" /> */}

                  <p
                    style={{ color: "#ee9823" }}
                    className="modpack-box-footer mb-0 coodiv-text-12 "
                  >
                    onlineprint
                  </p>
                </div>
                <Button
                  href={data.attributes.link}
                  className="btn-detail-produk btn  btn-sm rounded-pill "
                >
                  Lebih Detail
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      );
    });
  };

  return (
    <Container>
      <Swiper
        slidesPerView={1}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        breakpoints={{
          360: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4.5,
            spaceBetween: 5,
          },
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="modpack-box-header ">
            <div className="modpack-product">
              <a href="https://onlineprint.co.id/">
                <img className="img__all" src={AllProduct} />
              </a>
            </div>
          </div>
        </SwiperSlide>
        {renderLink()}
      </Swiper>
    </Container>
  );
};

export default SliderProduct;
