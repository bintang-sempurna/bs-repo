import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getDetail } from "../../../store/product/action";
import FooterContentOp from "../../../components/statik/FooterContentOp";
import ReactMarkdown from "react-markdown";
import SliderBlog from "../../../components/allslider/SliderBlog";

import "./styles.css";
// skelton
import ScrollToTop from "../../../components/ScrollTop";
import SkelBanner from "../../../components/skelton/banner/image";
import SkelParagraf from "../../../components/skelton/paragraf";

const BlogDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.blog);
  const { entities } = useSelector((state) => state.blog);

  const fectDetailBlog = async (data) => {
    await dispatch(getDetail(data));
  };

  useEffect(() => {
    fectDetailBlog(id);
  }, [id]);

  const baseUrl = import.meta.env.VITE_APP_BASEURL;

  // const renderTag = () => {
  //   return entities.map((data) => {
  //     return (
  //       <span key={data.id} className="tag_categories">
  //         {data.attributes.categories.data[0].attributes.title}
  //       </span>
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
                    insight /&nbsp;
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
                      <span className="all__detail_tag">Blog</span>
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
              </div>
              <div className="col-lg-2"></div>
            </div>
          </div>
        </div>
      </section>

      <SliderBlog />
      <FooterContentOp />
    </>
  );
};

export default BlogDetails;
