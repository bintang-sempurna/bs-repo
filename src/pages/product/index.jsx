import React from "react";
import "./styles.css";
import ScrollToTop from "../../components/ScrollTop";
import FooterContentOp from "../../components/statik/FooterContentOp";
import ProductService from "../../components/ProductAndService";

// ===========

const Product = () => {
  return (
    <>
      <ScrollToTop />

      <section className="py-25 mt-20 position-relative bg-red-bs">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6 col-12">
              <h2 className="coodiv-text-4 font-weight-bold text-white">
                Product & Service
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

      <ProductService />

      <FooterContentOp />
    </>
  );
};

export default Product;
