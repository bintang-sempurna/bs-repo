import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../store/product/action";

const BlogMeta = () => {
  const { entities } = useSelector((state) => state.blog);
  const dispatch = useDispatch();

  const fectApi = async () => {
    dispatch(getAll());
  };

  useEffect(() => {
    fectApi();
  }, []);

  const baseUrl = import.meta.env.VITE_APP_BASEURL;

  const renderMetaBlog = () => {
    return entities.map((data) => {
      const metaTitle = data.attributes.blogMeta
        ? data.attributes.blogMeta.metaTitle
        : "";

      const metaDesc = data.attributes.blogMeta
        ? data.attributes.blogMeta.metaDescription
        : "";

      const keywords = data.attributes.blogMeta
        ? data.attributes.blogMeta.keywords
        : "";

      const imageUrl = data.attributes.image
        ? data.attributes.image.data.attributes.formats.thumbnail.url
        : "";

      return (
        <Helmet key={data.id}>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>{metaTitle}</title>
          <meta name="title" content={metaTitle} />
          <meta name="description" content={metaDesc} />
          <meta name="keywords" content={keywords} />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Bintang Sempurna" />
          <link rel="canonical" href={baseUrl} />
          <meta property="og:title" content={metaTitle} />
          <meta property="og:image" content={baseUrl + imageUrl.substring(1)} />
          <meta property="og:url" content={baseUrl} />
          <meta property="og:type" content="blog" />
          <meta property="og:site_name" content={baseUrl} />
        </Helmet>
      );
    });
  };

  return <>{renderMetaBlog()}</>;
};

export default BlogMeta;
