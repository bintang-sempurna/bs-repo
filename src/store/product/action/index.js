import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../api/ApiStrapi";

// blog
export const getAll = createAsyncThunk("blog/getAll", async () => {
  try {
    const response = await api.get("/blogs?populate=*");
    // console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    throw error;
  }
});

// blogs detail
export const getDetail = createAsyncThunk(
  "blog/getDetailBlogs",
  async (data) => {
    try {
      const response = await api.get(`/blogs/${data}?populate=*`);
      // console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);

export const getRecap = createAsyncThunk("recap/getRecap", async () => {
  try {
    const response = await api.get(`/recaps/?populate=*`);
    // console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    throw error;
  }
});

// Event Recap Details
export const getRecapDetails = createAsyncThunk(
  "recap/getRecapDetails",
  async (data) => {
    try {
      const response = await api.get(`/recaps/${data}?populate=*`);
      // console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);

// slider hero
export const getSlider = createAsyncThunk("slider/getSlider", async () => {
  try {
    const response = await api.get(`/sliders?populate=*`);
    // console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    throw error;
  }
});

// Product Service
export const getProduct = createAsyncThunk("product/getProduct", async () => {
  try {
    const response = await api.get(`/products?populate=*`);
    // console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    throw error;
  }
});

// Product Service details
export const getProductDetail = createAsyncThunk(
  "product/getProductDetail",
  async (data) => {
    try {
      const response = await api.get(`/products/${data}?populate=*`);
      // console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);

// Technology
export const getTechnology = createAsyncThunk(
  "technology/getTechnology",
  async () => {
    try {
      const response = await api.get(`/technologies?populate=*`);
      // console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);

// Technology details
export const getDetailsTec = createAsyncThunk(
  "technology/getDetailsTec",
  async (data) => {
    try {
      const response = await api.get(`/technologies/${data}?populate=*`);
      // console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);

// Awards
export const getAwards = createAsyncThunk("award/getAwards", async () => {
  try {
    const response = await api.get(`/awards?populate=*`);
    // console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    throw error;
  }
});

// Awards Details
export const getAwardsDetails = createAsyncThunk(
  "award/getAwardsDetails",
  async (data) => {
    try {
      const response = await api.get(`/awards/${data}?populate=*`);
      // console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);

// testimonial
export const getTestimonial = createAsyncThunk(
  "award/getTestimonial",
  async () => {
    try {
      const response = await api.get(`/testimonials?populate=*`);
      // console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);

export const getTestimonialDetails = createAsyncThunk(
  "award/getTestimonialDetails",
  async (data) => {
    try {
      const response = await api.get(`/testimonials/${data}?populate=*`);
      // console.log(response.data.data);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);

// video https://testrapi.bintangsempurna.co.id/api/videos?populate=*
export const getVideo = createAsyncThunk("video/getAll", async () => {
  try {
    const response = await api.get("/videos?populate=*");
    // console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    throw error;
  }
});

// link product
export const getLinkProduct = createAsyncThunk("link/getLink", async () => {
  try {
    const response = await api.get("/services?populate=*");
    // console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    throw error;
  }
});

// siteVisit
export const getSiteVisit = createAsyncThunk("link/getAll", async () => {
  try {
    const response = await api.get("/events?populate=*");
    // console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    throw error;
  }
});
