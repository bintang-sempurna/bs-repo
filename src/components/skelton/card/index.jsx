import React from "react";
import { Row, Col } from "react-bootstrap";

import "./styles.css";

const SkelCard = () => {
  return (
    <>
      <Row xs={2} md={4} lg={5} className="g-3">
        {Array.from({ length: 5 }).map((_, data) => (
          <Col key={data}>
            <div className="card__Skelton">
              <div className="header">
                <div className="title">
                  <div className="skeleton skeleton-Image"></div>
                </div>
              </div>
              <div data-body>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-Button mt-2"></div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default SkelCard;
