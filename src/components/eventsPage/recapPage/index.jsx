import React from "react";
import "./stylesRecap.css";
import SliderKategori from "../../allslider/SliderKategori";
import sldKaT from "../../../dataMock/kategoriLink.json";
import SliderVideo from "../../allslider/SliderVideo";
import FooterContentOp from "../../statik/FooterContentOp";
import AllRecap from "../../AllEvent";
import {Helmet} from "react-helmet";

function RecapPage() {
  return (
    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Event Recap </title>
                <link rel="canonical" href="#" />
            </Helmet>
      <section className="py-25 position-relative bg-red-bs mt-20">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6 col-12">
              <h2 className="coodiv-text-4 font-weight-bold text-white">
                Events Recap
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

      <AllRecap />
      <SliderKategori />
      <SliderVideo />
      <FooterContentOp />
    </>
  );
}

export default RecapPage;
