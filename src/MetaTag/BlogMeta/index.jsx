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

  const renderMetaBlog = () => {
    return entities.map((data) => {
      // Check if data.attributes.blogMeta is present before accessing metaTitle
      const metaTitle = data.attributes.blogMeta
        ? data.attributes.blogMeta.metaTitle
        : "";

      const metaDesc = data.attributes.blogMeta
        ? data.attributes.blogMeta.metaDescription
        : "";

      const keywords = data.attributes.blogMeta
        ? data.attributes.blogMeta.keywords
        : "";

      return (
        <Helmet key={data.id}>
          <title>{data.attributes.title}</title>
          <meta name="description" content={metaTitle}></meta>
          <meta name="title" content=""></meta>
          <meta name="robots" content="index, follow"></meta>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <meta name="author" content="PT Bintang Sempurna"></meta>
        </Helmet>
      );
    });
  };

  return <>{renderMetaBlog()}</>;
};

export default BlogMeta;
