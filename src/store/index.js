import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product/slice";
import sliderHero from "./product/sliderHero";
import sliderRecap from "./product/sliceRecap";
import productService from "./product/productService";
import technology from "./product/technology";
import productAwards from "./product/sliceAwards";
import testimonial from "./product/sliceTestimoni";
import allVideo from "./product/allVideo";
import productLink from "./product/sliceLinkProduct";
import siteVisit from "./product/sliceEventSiteVisit";

export default configureStore({
  reducer: {
    blog: productReducer,
    recap: sliderRecap,
    slider: sliderHero,
    product: productService,
    technology: technology,
    award: productAwards,
    testimonial: testimonial,
    video: allVideo,
    link: productLink,
    event: siteVisit,
  },
});
