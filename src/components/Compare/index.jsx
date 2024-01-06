import React from "react";
import "./style.css";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const Compare = () => {
  return (
    <>
      <section>
        <h3 className="text-center drag-title">
          Drag the cursor for <span className="ux_title">Best Experience</span>
        </h3>
        <ReactCompareSlider
          className="coba mb-4"
          itemOne={
            <ReactCompareSliderImage
              src="https://testrapi.bintangsempurna.co.id/uploads/cmyk_91b7270bd4.jpg"
              srcSet="https://testrapi.bintangsempurna.co.id/uploads/cmyk_91b7270bd4.jpg"
              alt="Image one"
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src="https://testrapi.bintangsempurna.co.id/uploads/UV_fadc6eceac.jpg"
              srcSet="https://testrapi.bintangsempurna.co.id/uploads/UV_fadc6eceac.jpg"
              alt="Image two"
            />
          }
        />
        <div className="arrow-target">
          <div className="arrow-title">Lihat ini !!!</div>
          <img
            src="https://testrapi.bintangsempurna.co.id/uploads/arrow_top_right_ba52f4d369.svg"
            alt=""
          />
        </div>
        <div className="arrow-left">
          <img
            src="https://testrapi.bintangsempurna.co.id/uploads/arrow_left_486017d41c.svg"
            alt=""
          />
          <div className="arrow-title">Cmyk</div>
        </div>
        <div className="arrow-right">
          <img
            src="https://testrapi.bintangsempurna.co.id/uploads/arrow_right_1d697407f5.svg"
            alt=""
          />
          <div className="arrow-title">Invisibile Ink</div>
        </div>
      </section>
    </>
  );
};

export default Compare;
