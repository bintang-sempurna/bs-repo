import React from "react";

import HeaderTestimoni from "../../../components/statik/testimoni/Header";
import CardTestimoni from "../../../components/statik/testimoni/CardTestimoni";
import SliderBlog from "../../../components/allslider/SliderBlog";
import ScrollToTop from "../../../components/ScrollTop";
import FooterContentOp from "../../../components/statik/FooterContentOp";

const TestimoniPage = () => {
  return (
    <>
      <ScrollToTop />
      <HeaderTestimoni />
      <CardTestimoni />
      <SliderBlog />
      <FooterContentOp />
    </>
  );
};

export default TestimoniPage;
