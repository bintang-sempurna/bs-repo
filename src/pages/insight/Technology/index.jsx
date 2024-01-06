import React, { useEffect, useState } from "react";
import { GoChevronRight } from "react-icons/go";
import imgMech from "./../../../assets/img/contentStatic/Support_mechine.png";
import "./styles.css";

import { Col, Row } from "react-bootstrap";
import SliderBlog from "../../../components/allslider/SliderBlog";
import ScrollToTop from "../../../components/ScrollTop";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTechnology } from "../../../store/product/action";
import SliderVideo from "../../../components/allslider/SliderVideo";

const TechnologyPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { entities, loading } = useSelector((state) => state.technology);

  const fetchAPI = async () => {
    dispatch(getTechnology());
  };

  const getDetails = (id, category) => {
    navigate(`/insight/technology/${id}?populate=${category}`);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const baseUrl = import.meta.env.VITE_APP_BASEURL;

  const renderTechnology = () => {
    return entities.slice(0, 7).map((data) => {
      return (
        <div key={data.id} className="col-md-4 mb-3">
          <div className="modpack-box">
            <div className="modpack-box-header">
              {/* <div className="add-btn" onClick={() => getDetails(data.id)}> */}
              <div
                className="add-btn"
                onClick={() => getDetails(data.id, data.attributes.slug)}
              >
                <GoChevronRight />
              </div>
              <Row xs md lg>
                <Col>
                  <img
                    src={
                      baseUrl +
                      data.attributes.image.data.attributes.formats.thumbnail.url.substring(
                        1
                      )
                    }
                    alt=""
                  />
                </Col>
              </Row>
              <div className="text">
                <h5 className="coodiv-text-8 font-weight-bold mb-0">
                  {data.attributes.title}
                </h5>
                <div className="modpack-box-tags">
                  <span>{data.attributes.hastag}</span>
                </div>
                <p className="coodiv-text-12 mb-0 mt-3 tittle__span">
                  {data.attributes.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <ScrollToTop />
      <section className="py-25 position-relative bg-red-bs mt-20">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6 col-12">
              <h2 className="coodiv-text-4 font-weight-bold text-white">
                Technology
              </h2>
              <p className="coodiv-text-9 white-font">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* teknologi start */}
      <section className="py-10 position-relative how-it-work-section">
        <div className="rounded-view" />
        <div className="container">
          <div className="row ">{renderTechnology()}</div>
        </div>
      </section>

      <section className="position-relative view-full">
        <div className="pt-20 bg-section-color ">
          <div className=" container ">
            <h3 className="coodiv-text-4 font-weight-bold text-center">
              Support
            </h3>
            <div className="line-color-100%-2grid mx-auto" />
            <p className=" side f-size16 text-center ">
              Beberapa perusahaan terkemuka mempercayai PT. Bintang Sempurna
              membantu berusaha untuk <br />
              meningkatkan pengalaman pengguna dan efisiensi kerja Anda.
            </p>
            <div className=" row justify-content-between ">
              <p className=" text-center ">
                <img className="support-img" src={imgMech} alt=" " />
              </p>
            </div>
          </div>
        </div>
      </section>
      <SliderVideo />
      <SliderBlog />
      {/* teknologi end */}
    </>
  );
};

export default TechnologyPage;
