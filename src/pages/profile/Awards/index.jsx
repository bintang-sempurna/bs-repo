import React from "react";
import AwardHeader from "../../../components/awardPage/HeaderAward";
import ArtikelAward from "../../../components/awardPage/ArtikelAward";
import ScrollToTop from "../../../components/ScrollTop";
import FooterContentOp from "../../../components/statik/FooterContentOp";

const AwardPage = () => {
  return (
    <>
      <ScrollToTop />
      <AwardHeader />
      <ArtikelAward />
      <FooterContentOp />
    </>
  );
};

export default AwardPage;
