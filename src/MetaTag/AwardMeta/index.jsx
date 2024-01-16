import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { getAwards } from "../../store/product/action";

const MetaAward = ({ title, description, url }) => {
  const { entities } = useSelector((state) => state.award);
  const dispatch = useDispatch();
  const baseUrl = "www.bintangsempurna.co.id/";

  useEffect(() => {
    const fetchApi = async () => {
      dispatch(getAwards());
    };

    fetchApi();
  }, [dispatch]);

  const renderMetaAward = () => {
    return entities.map(() => {
      const metaTitle = title || "";
      const metaDesc = description || "";
      const imgUrl = url || "";

      return (
        <Helmet>
          <title>{metaTitle}</title>
          <meta name="title" content={metaTitle} />
          <meta name="description" content={metaDesc} />
          <meta property="og:title" content={metaTitle} />
          <meta property="og:description" content={metaDesc} />
          <meta property="og:image" content={imgUrl} />
          <meta name="robots" content="index, follow" />
          <meta name="og:url" content={`${baseUrl}insight/blog`} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:site_name" content="Blog" />
          <meta property="og:type" content="Website" />
          <meta name="google" content="nositelinkssearchbox" />
          <meta name="google" content="nopagereadaloud" />
          <meta name="robots" content="notranslate" />
          <meta name="googlebot" content="notranslate" />
          <meta
            content="Printing Terlengkap, Cepat dan Berkualitas | Bintang Sempurna"
            property="twitter:title"
          ></meta>
          <meta
            content="Printing Terlengkap, Cepat dan Berkualitas | Bintang Sempurna"
            property="twitter:description"
          ></meta>
        </Helmet>
      );
    });
  };

  return <>{renderMetaAward()}</>;
};

export default MetaAward;
