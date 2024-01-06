import React from "react";
import SliderHero from "../../components/allslider/SliderHero";

import TemukanSec from "../../components/statik/TemukanSec";
import LebihCepat from "../../components/statik/LebihCepatSec";
import StoreBisnis from "../../components/statik/StoreBinis";
import SliderPrestasi from "../../components/allslider/SliderPrestasi";
import Memberpage from "../../components/statik/memberpage";
import ApaKataMereka from "../../components/ApaKataMereka";
import SliderArtikel from "../../components/allslider/SliderArtikel";
import SliderBlog from "../../components/allslider/SliderBlog";
import ScrollToTop from "../../components/ScrollTop";
import ContentKaumDinamis from "../../components/statik/ContentKaumDinamis";
import ContentService from "../../components/statik/ContentService";
import FooterContent from "../../components/statik/FooterContentEvents";

function MainPage() {
  return (
    <>
      <ScrollToTop />
      <SliderHero />
      <TemukanSec />
      <LebihCepat />
      <StoreBisnis />
      <ContentKaumDinamis />
      <ContentService />
      <SliderPrestasi />
      <Memberpage />
      <ApaKataMereka />
      <SliderArtikel />
      <SliderBlog />
      <FooterContent />
    </>
  );
}

export default MainPage;
