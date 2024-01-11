import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../store/product/action";

const BlogMeta = () => {
  const { entities } = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const baseUrl = import.meta.env.VITE_APP_BASEURL;

  useEffect(() => {
    const fetchApi = async () => {
      dispatch(getAll());
    };

    fetchApi();
  }, [dispatch]);

  const renderMetaBlog = () => {
    return entities.map((data) => {
      const metaTitle = data.attributes.blogMeta?.metaTitle || "";
      const metaDesc = data.attributes.blogMeta?.metaDescription || "";

      return (
        <Helmet key={data.id}>
          <title>{metaTitle}</title>
          <meta name="description" content={metaDesc} />
          <meta name="og:url" content={`${baseUrl}api/blogs/${data.id}`} />
          {/* <meta name="page-type" content={metaTitle} data-rh="true" />
          <meta name="title" content={metaTitle} data-rh="true" />
          <meta name="description" content={metaDesc} data-rh="true" />
          <meta name="robots" content="index, follow" data-rh="true" />
          <meta property="og:title" content={metaTitle} data-rh="true" />
          <meta property="og:description" content={metaDesc} data-rh="true" />
          <meta
            property="og:image"
            content={baseUrl + imageUrl.substring(1)}
            data-rh="true"
          />
          <meta property="og:type" content="Website" data-rh="true" />
          <meta property="og:site_name" content="Blog" data-rh="true" />
          <meta property="og:url" content={postUrl} data-rh="true" />
          <meta property="og:image:width" content="1200" data-rh="true" />
          <meta property="og:image:height" content="630" data-rh="true" />

          <meta name="google" content="nositelinkssearchbox" />
          <meta name="google" content="nopagereadaloud" />
          <meta name="robots" content="notranslate" />
          <meta name="googlebot" content="notranslate" />
          <meta http-equiv="refresh" content="...;url=..." />
          <meta name="viewport" content="..." /> */}
        </Helmet>
      );
    });
  };

  return <>{renderMetaBlog()}</>;
};

export default BlogMeta;
