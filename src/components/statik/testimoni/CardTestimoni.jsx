import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTestimonial } from "../../../store/product/action";

const CardTestimoni = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { entities, loading } = useSelector((state) => state.testimonial);

  const fetchApi = async () => {
    dispatch(getTestimonial());
  };

  const getDetails = (id, category) => {
    navigate(`/profile/testimoni/${id}?populate=${category}`);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const baseUrl = import.meta.env.VITE_APP_BASEURL;

  const renderTestimoni = () => {
    return entities.map((data) => {
      return (
        <Col
          key={data.id.toString()}
          lg={3}
          md={4}
          className="mb-3 col-6"
          onClick={() => getDetails(data.id, data.attributes.slug)}
        >
          <div className="box" style={{ cursor: "pointer" }}>
            <img
              className="recapArtic"
              src={
                baseUrl +
                data.attributes.gambar.data.attributes.formats.thumbnail.url.substring(
                  1
                )
              }
            />
            <h2 className="paragraf-recap">{data.attributes.description}</h2>

            <span className="category-icon-recap ">
              {data.attributes.Company}
            </span>
          </div>
        </Col>
      );
    });
  };

  return (
    <Container>
      <Row>{renderTestimoni()}</Row>
    </Container>
  );
};

export default CardTestimoni;
