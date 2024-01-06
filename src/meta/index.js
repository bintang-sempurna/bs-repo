import React from "react";
import { Helmet } from "react-helmet-async";

const metaInformation = {
  metaTitle: "Default Title",
  metaDescription: "Default Description",
  metaKeywords: "React, JavaScript, SEO",
  metaAuthor: "Your Name",
  metaImageUrl: "URL_TO_YOUR_IMAGE",
};

const SEO = (props) => {
  return (
    <Helmet>
      <title>
        {props.title
          ? `${props.title} | ${metaInformation.metaTitle}`
          : metaInformation.metaTitle}
      </title>
      {props.title ? (
        <meta
          property="og:title"
          content={props.title + "|" + metaInformation.metaTitle}
        />
      ) : (
        <meta property="og:title" content={metaInformation.metaTitle} />
      )}

      {props.description ? (
        <>
          <meta property="og:description" content={props.description} />
          <meta name="description" content={props.description} />
        </>
      ) : (
        <>
          <meta
            property="og:description"
            content={metaInformation.metaDescription}
          />
          <meta name="description" content={metaInformation.metaDescription} />
        </>
      )}
      <meta
        name="description"
        content={props.description || metaInformation.metaDescription}
      />
      <meta name="keywords" content={metaInformation.metaKeywords} />
      <meta name="author" content={metaInformation.metaAuthor} />
      <meta
        property="og:title"
        content={props.title || metaInformation.metaTitle}
      />
      <meta
        property="og:description"
        content={props.description || metaInformation.metaDescription}
      />
      <meta property="og:image" content={metaInformation.metaImageUrl} />
      <meta property="og:url" content={props.url || "URL_TO_YOUR_PAGE"} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="icon" href={metaInformation.metaImageUrl} />
    </Helmet>
  );
};

export default SEO;
