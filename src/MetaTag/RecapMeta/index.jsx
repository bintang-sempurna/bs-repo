import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { getRecap } from "../../store/product/action";

const RecapMeta = ({ title, description, url }) => {
  const { entities } = useSelector((state) => state.recap);
  const dispatch = useDispatch();
  const baseUrl = "www.bintangsempurna.co.id/";

  useEffect(() => {
    const fetchApi = async () => {
      dispatch(getRecap());
    };

    fetchApi();
  }, [dispatch]);

  const renderMetaRecap = () => {
    return entities.map((data) => {
      // const data = entities[0] || {};
      const metaTitle = title || "";
      const metaDesc = description || "";
      const imgUrl = url || "";

      return (
        <Helmet key={data.id}>
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

  return <>{renderMetaRecap()}</>;
};

export default RecapMeta;
