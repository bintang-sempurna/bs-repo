import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAwards } from "../../../store/product/action";

const ArtikelAward = () => {
  const { entities, loading } = useSelector((state) => state.award);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchAPI = async () => {
    dispatch(getAwards());
  };

  const awardDetails = (id, category) => {
    navigate(`/profile/award/${id}?populate=${category}`);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  const baseUrl = import.meta.env.VITE_APP_BASEURL;

  const renderAward = () => {
    return entities.map((data) => {
      return (
        <Col key={data.id} lg={3} md={4} className="mb-3 col-6">
          <div
            className="box"
            onClick={() => awardDetails(data.id, data.attributes.slug)}
            style={{ cursor: "pointer" }}
          >
            <img
              className="recapArtic"
              src={
                baseUrl +
                data.attributes.image.data.attributes.formats.small.url.substring(
                  1
                )
              }
            />
            <h2 className="paragraf-recap">{data.attributes.title}</h2>
            <span className="category-icon-name__award">
              {data.attributes.mode.data.attributes.title}
            </span>
          </div>
        </Col>
      );
    });
  };

  return (
    <>
      <section className="py-10">
        <Container>
          <Row>{renderAward()}</Row>
        </Container>
      </section>
    </>
  );
};

export default ArtikelAward;
