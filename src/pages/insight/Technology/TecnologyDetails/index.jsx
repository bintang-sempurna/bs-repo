import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import ScrollToTop from "../../../../components/ScrollTop";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailsTec } from "../../../../store/product/action";

const TechnologyDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.technology);

  const fetcTechnologyDetails = async (data) => {
    await dispatch(getDetailsTec(data));
  };

  useEffect(() => {
    fetcTechnologyDetails(id);
  }, [id]);

  const baseUrl = import.meta.env.VITE_APP_BASEURL;

  return (
    <>
      <ScrollToTop />
      <section className="up-top mt-20">
        <div className="container">
          <div className="row">
            <div className="the_breadcrumb_conatiner_page">
              <div className="the_breadcrumb">
                <div className="breadcrumbs">
                  <a
                    onClick={() => navigate("/insight/technology")}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    Technology
                  </a>{" "}
                  / {data.attributes.title}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="artikel-detail_hero">
                <img
                  className="content-img-detail"
                  src={
                    baseUrl +
                    data.attributes.image.data.attributes.formats.thumbnail.url.substring(
                      1
                    )
                  }
                  alt={data.attributes.slug}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="coodiv-text-4 mt-10 ">{data.attributes.title}</h2>
              <p>
                Digital Printing, a Quick Solution for the Best Printing
                Results. Digital printing is a solution for those of you who
                need the option to print in small amounts and fast time. This
                method is increasingly being used.
              </p>
              <a
                href={data.attributes.link}
                className="btn coodiv-text-11  rounded-pill mr-5 "
              >
                <i className="far fa-shopping-bag" />
                Lihat produk
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-content-new mt-10 mb-10">
        <div className="article-body size-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <ReactMarkdown className="title___details">
                  {data.attributes.description}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnologyDetails;
