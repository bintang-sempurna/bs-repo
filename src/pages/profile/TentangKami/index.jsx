import React from "react";
import HeaderProfile from "../../../components/statik/AboutProfile/HeaderProfile";
import AboutProfile from "../../../components/statik/AboutProfile/AboutProfile";
import SliderBlog from "../../../components/allslider/SliderBlog";
import ScrollToTop from "../../../components/ScrollTop";
import FooterContent from "../../../components/statik/FooterContentEvents";

const TentangKami = () => {
  return (
    <>
      <ScrollToTop />
      <HeaderProfile />
      <AboutProfile />
      <SliderBlog />+
      <FooterContent />
    </>
  );
};

export default TentangKami;
