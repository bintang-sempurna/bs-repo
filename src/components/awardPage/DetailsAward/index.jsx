import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAwardsDetails } from "../../../store/product/action";

import ReactMarkdown from "react-markdown";
import SkelParagraf from "../../skelton/paragraf";
import SkelBanner from "../../skelton/banner/image";
import ScrollToTop from "../../ScrollTop";
import MetaAward from "../../../MetaTag/AwardMeta";

const DetailsAward = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data, loading } = useSelector((state) => state.award);

  const fetchDetail = async (data) => {
    await dispatch(getAwardsDetails(data));
  };

  useEffect(() => {
    fetchDetail(id);
  }, [id]);

  const baseUrl = import.meta.env.VITE_APP_BASEURL;

  return (
    <>
      <ScrollToTop />
      <MetaAward
        title={data.attributes.SEO?.title || ""}
        description={data.attributes.SEO?.description || ""}
        url={
          baseUrl +
          data.attributes.image.data.attributes.formats.thumbnail?.url.substring(
            1
          )
        }
      />
      <section className="up-top mt-25">
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <div className="the_breadcrumb_conatiner_page">
                <div className="the_breadcrumb">
                  <div className="breadcrumbs">
                    insight /
                    <a
                      onClick={() => navigate("/insight/blog")}
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      Blog{" "}
                    </a>
                    / {data.attributes.title}
                  </div>
                </div>
              </div>

              {loading ? (
                <>
                  <SkelParagraf />
                  <SkelBanner />
                </>
              ) : (
                <>
                  <h2 className="artikel-detail_tittle coodiv-text-4 mt-10 mb-10">
                    {data.attributes.title}
                  </h2>

                  <div className="tabel__border">
                    <p>
                      <span className="all__detail_tag">Award</span>
                      &nbsp; | &nbsp;
                      {new Date(data.attributes.publishedAt).toLocaleDateString(
                        "id-ID",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </p>
                  </div>

                  <div className="artikel-detail_hero">
                    <img
                      className="content-img-detail"
                      src={
                        baseUrl +
                        data.attributes.image.data.attributes.formats.large.url.substring(
                          1
                        )
                      }
                      loading="lazy"
                      alt={data.attributes.slug}
                    />
                  </div>
                </>
              )}
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
                <h3>Tag</h3>
                <p>
                  <a
                    href="#"
                    type="button"
                    className="btn text-decoration-none font-weight-normal text-danger"
                  >
                    Lihat Teknologi yang Terpakai
                    <i
                      className=" fas
                        fa-chevron-circle-right"
                    ></i>
                  </a>
                </p>
                <div className="row justify-content-center mt-10">
                  <div className="col">
                    <a
                      href="https://onlineprint.co.id/id/label-dan-kemasan/products/"
                      className="btn coodiv-text-11 mt-5 rounded-pill mr-5 "
                    >
                      <i className="far fa-shopping-bag" />
                      Order sekarang
                    </a>
                    <a href="#" className="btn coodiv-text-11 mt-5">
                      <i className="fas fa-tags" /> Minta Penawaran
                    </a>
                  </div>
                </div>
                <div className="share-product mt-5">
                  <p className="">Bagikan Blog ini :</p>
                  <div className="share-icon-product">
                    <a className="icon-share" href="#">
                      <i className="fab fa-facebook" />
                    </a>
                    <a className="icon-share" href="#">
                      <i className="fas fa-comment-dots" />
                    </a>
                    <a className="icon-share" href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a className="icon-share" href="#">
                      <i className="fas fa-share-alt" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsAward;
