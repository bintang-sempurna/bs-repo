import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getRecapDetails } from "../../../store/product/action";
import SliderArtikel from "../../../components/allslider/SliderArtikel";

import FooterContentOp from "../../../components/statik/FooterContentOp";
import ReactMarkdown from "react-markdown";
import ScrollToTop from "../../../components/ScrollTop";
import SkelBanner from "../../../components/skelton/banner/image";
import SkelParagraf from "../../../components/skelton/paragraf";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const RecapDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.recap);
  const { entities } = useSelector((state) => state.recap);

  const fetchDetailRecap = async (data) => {
    await dispatch(getRecapDetails(data));
  };

  useEffect(() => {
    fetchDetailRecap(id);
  }, [id]);

  const baseUrl = import.meta.env.VITE_APP_BASEURL;

  // const renderTag = () => {
  //   return entities.map((data) => {
  //     return (
  //       <>
  //         <span key={data.id} className="tag_categories ">
  //           {data.attributes.categories.data[2].attributes.title}
  //         </span>
  //       </>
  //     );
  //   });
  // };

  // const renderTagRecap = () => {
  //   return entities.map((data) => {
  //     return (
  //       <span className="tag_categories">{data.attributes.id_categories}</span>
  //     );
  //   });
  // };

  return (
    <>
      <ScrollToTop />

      <section className="up-top mt-25">
        <div className="container">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <div className="the_breadcrumb_conatiner_page">
                <div className="the_breadcrumb">
                  <div className="breadcrumbs">
                    Event / &nbsp;
                    <a
                      onClick={() => navigate("/events/recap")}
                      style={{
                        cursor: "pointer",
                      }}
                      className=".the_breadcrumb"
                    >
                      Recap{" "}
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
                  <h2 className="artikel-detail_tittle coodiv-text-4 mt-3 mb-10">
                    {data.attributes.title}
                  </h2>

                  <div className="tabel__border">
                    <p>
                      <span className="all__detail_tag">
                        {data.attributes.mode.data.attributes.title}
                      </span>
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
              </div>
              <div className="col-lg-2"></div>
            </div>
          </div>
        </div>
      </section>

      <SliderArtikel />
      <FooterContentOp />
    </>
  );
};

export default RecapDetails;
