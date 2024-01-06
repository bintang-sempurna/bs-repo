import React, { useEffect } from "react";
import ScrollToTop from "../../../components/ScrollTop";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "../../../store/product/action";
import ReactMarkdown from "react-markdown";
import SliderVideo from "../../../components/allslider/SliderVideo";
import SliderBlog from "../../../components/allslider/SliderBlog";
import VideoProduct from "../../../components/ProductAndService/VideoProduct";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.product);
  const location = useLocation();

  const fetchProductDetail = async (data) => {
    await dispatch(getProductDetail(data));
  };

  useEffect(() => {
    fetchProductDetail(id);
  }, [id]);

  const baseUrl = import.meta.env.VITE_APP_BASEURL;

  const currentDomain = window.location.origin;

  const productUrl = `${currentDomain}/product/${id}?populate=${data.attributes.slug}`;

  return (
    <>
      <ScrollToTop />

      <section className="up-top mt-20">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 mt-2 ">
              <span>Share :</span>
              <FacebookShareButton
                className="p-2"
                hashtag="#BintangSempurna"
                quote="terimakasih ya"
                url={productUrl}
              >
                <FacebookIcon size={32} round={true} />
              </FacebookShareButton>
              <WhatsappShareButton
                className="p-2"
                size={32}
                round={true}
                title="Aku udah baca artikel ini di Blog Bintang Sempurna, lho! Baca juga deh, ada tips buat print online, teknologi print terkini, dan info promo terbaru. "
                hashtag="#BintangSempurna"
                url={productUrl}
                image={
                  currentDomain +
                  data.attributes.image.data.attributes.formats.medium.url.substring(
                    1
                  )
                } // Set the image for the share
              >
                <WhatsappIcon size={32} round={true} />
              </WhatsappShareButton>
            </div>
            <div className="col-lg-8">
              <div className="the_breadcrumb_conatiner_page">
                <div className="the_breadcrumb">
                  <div className="breadcrumbs">
                    <a
                      onClick={() => navigate("/product")}
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      Product{" "}
                    </a>
                    / {data.attributes.title}
                  </div>
                </div>
              </div>

              <h2 className="artikel-detail_tittle coodiv-text-4 mt-10 mb-10">
                {data.attributes.title}
              </h2>

              <p>
                Product / &nbsp;
                {new Date(data.attributes.publishedAt).toLocaleDateString(
                  "id-ID",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </p>

              <div className="artikel-detail_hero">
                <img
                  className="content-img-detail"
                  src={
                    baseUrl +
                    data.attributes.image.data.attributes.formats.medium.url.substring(
                      1
                    )
                  }
                  alt={data.attributes.alt}
                />
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </section>

      <section className="blog-content-new mt-10 mb-10">
        <div className="article-body size-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-8">
                <ReactMarkdown className="title___details">
                  {data.attributes.description}
                </ReactMarkdown>
                <p>
                  <a
                    href="#"
                    type="button"
                    className="btn text-decoration-none font-weight-normal text-danger"
                  >
                    Rekomendasi terbaik untuk Anda
                    <i
                      className=" fas
                        fa-chevron-circle-right"
                    ></i>
                  </a>
                </p>

                {/* rekomendasi produk */}
                <section className="py-1">
                  <div className="container">
                    <div className="detail-vidio-product">
                      <div className="row justify-content-between">
                        <div className="col-lg-5 col-12">
                          <img
                            className="video-img"
                            src={
                              baseUrl +
                              data.attributes.image.data.attributes.formats.medium.url.substring(
                                1
                              )
                            }
                            alt={data.attributes.alt}
                          />
                        </div>
                        <div className="col-lg-7 col-12">
                          <h2 className="coodiv-text-4 font-weight-bold mt-6">
                            {data.attributes.title}
                          </h2>
                          <p className="content_text_author_description_p">
                            Kami sangat antusias untuk memberikan rekomendasi
                            terbaik kepada Anda. Tunggu apa lagi? Pesan sekarang
                            dan sempurnakan kebutuhan anda
                          </p>

                          <div class="d-flex bd-highlight">
                            <div class="p-2 flex-fill bd-highlight">
                              <a
                                href={data.attributes.link}
                                className="btn coodiv-text-11 m-2  rounded-pill "
                              >
                                <i className="far fa-shopping-bag" />
                                Order sekarang
                              </a>
                            </div>
                            <div class="p-2 flex-fill bd-highlight">
                              <a href="#" className="btn coodiv-text-11 m-2 ">
                                <i className="fas fa-tags" /> Minta Penawaran
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* batas */}

                {/* <VideoProduct /> */}
              </div>
              <div className="col-lg-2"></div>
            </div>
          </div>
        </div>
      </section>

      <SliderVideo />
      <SliderBlog />
    </>
  );
};

export default ProductDetails;
