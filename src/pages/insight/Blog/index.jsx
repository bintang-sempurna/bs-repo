import React from "react";
import SliderKategori from "../../../components/allslider/SliderKategori";
import sldKaT from "../../../dataMock/kategoriLink.json";
import ScrollToTop from "../../../components/ScrollTop";
import FooterContentOp from "../../../components/statik/FooterContentOp";

import AllBlog from "../../../components/Blog";

const BlogPage = () => {
  return (
    <>
      <ScrollToTop />
      <AllBlog />
      <SliderKategori sldKaT={sldKaT} />
      <FooterContentOp />
    </>
  );
};

export default BlogPage;
