import React from "react";
import { Helmet } from "react-helmet";

const index = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Blog</title>
        <link rel="canonical" href="#" />
        <meta name="description" content="__META_DESCRIPTION__" />
        <meta name="og:title" content="__META_OG_TITLE__" />
        <meta name="og:description" content="__META_OG_DESCRIPTION__" />
        <meta name="og:image" content="__META_OG_IMAGE__" />
      </Helmet>
    </>
  );
};

export default index;
