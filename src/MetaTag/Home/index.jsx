import React from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>
          Printing Terlengkap, Cepat dan Berkualitas | Bintang Sempurna
        </title>
        <meta property="og:title" content="Your Page Title"></meta>
        <meta property="og:description" content="Your page description"></meta>
        <meta property="og:url" content="https://www.yourwebsite.com"></meta>
        <meta property="og:image" content="https://www.yourwebsite.com/your-image.jpg"></meta>
        <meta property="og:image:alt" content="Alternate text for your image"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:locale" content="en_US"></meta>
        <meta property="og:site_name" content="Your Site Name"></meta>

        {/* Twitter Card Tags (Optional, for Twitter): */}
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" content="@YourTwitterHandle"></meta>
        <meta name="twitter:title" content="Your Page Title"></meta>
        <meta name="twitter:description" content="Your page description"></meta>
        <meta name="twitter:image" content="https://www.yourwebsite.com/your-image.jpg"></meta>

        {/* Facebook App ID (Optional): */}
        <meta property="fb:app_id" content="Your Facebook App ID"></meta>
      </Helmet>
    </div>
  );
};

export default Home;
