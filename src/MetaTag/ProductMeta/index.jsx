import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../store/product/action";

const MetaProduct = ({ title, description, url }) => {
  const { entities } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const baseUrl = "www.bintangsempurna.co.id/";
  const urlFisrt = import.meta.env.VITE_APP_BASEURL;

  useEffect(() => {
    const fetchApi = async () => {
      dispatch(getProduct());
    };

    fetchApi();
  }, [dispatch]);

  const renderMetaProduct = () => {
    return entities.map((data) => {
      const metaTitle = title || "";
      const metaDesc = description || "";
      const imgUrl = url.substring(1) || "";

      return (
        <Helmet key={data.id} prioritizeSeoTags>
          <title>{metaTitle}</title>
          <meta name="title" content={metaTitle} />
          <meta name="description" content={metaDesc} />

          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content={`${baseUrl}insight/blog/${data.id}?populate=`}
          />
          <meta property="og:title" content={metaTitle} />
          <meta property="og:description" content={metaDesc} />
          <meta property="og:image" content={urlFisrt + imgUrl} />
          <meta property="og:image:width" content="500" />
          <meta property="og:image:height" content="252" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={`${baseUrl}insight/blog`} />
          <meta property="twitter:title" content={metaTitle} />
          <meta property="twitter:description" content={metaDesc} />
          <meta property="twitter:image" content={urlFisrt + imgUrl} />
        </Helmet>
      );
    });
  };

  return <>{renderMetaProduct()}</>;
};

export default MetaProduct;
