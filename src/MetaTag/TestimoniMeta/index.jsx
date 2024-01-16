import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { getTestimonial } from "../../store/product/action";

const MetaTestimonial = ({ title, description, url }) => {
  const { entities } = useSelector((state) => state.testimonial);
  const dispatch = useDispatch();
  const baseUrl = "www.bintangsempurna.co.id/";
  const urlFisrt = import.meta.env.VITE_APP_BASEURL;

  useEffect(() => {
    const fetchApi = async () => {
      dispatch(getTestimonial());
    };

    fetchApi();
  }, [dispatch]);

  const renderMetaTestimonial = () => {
    return entities.map((data) => {
      const metaTitle = title || "";
      const metaDesc = description || "";
      const imgUrl = url.substring(1) || "";

      return (
        <Helmet key={data.id}>
          <title>{metaTitle}</title>
          <meta name="title" content={metaTitle} />
          <meta name="description" content={metaDesc} />
          <meta name="robots" content="index, follow" />
          <meta name="og:url" content={`${baseUrl}insight/blog`} />
          <meta property="og:image" content={urlFisrt + imgUrl} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:title" content={metaTitle} />
          <meta property="og:description" content={metaDesc} />
          <meta property="og:site_name" content="Blog" />
          <meta property="og:type" content="Website" />
          <meta name="google" content="nositelinkssearchbox" />
          <meta name="google" content="nopagereadaloud" />
          <meta name="robots" content="notranslate" />
          <meta name="googlebot" content="notranslate" />
        </Helmet>
      );
    });
  };

  return <>{renderMetaTestimonial()}</>;
};

export default MetaTestimonial;
