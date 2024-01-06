import { createSlice } from "@reduxjs/toolkit";
import * as productService from "../action";

export const productSrv = createSlice({
  name: "product",
  initialState: {
    loading: false,
    entities: [],
    data: {
      attributes: {
        title: "",
        description: "",
        slug: "",
        createdAt: "",
        updatedAt: "",
        publishedAt: "",
        image: {
          data: {
            attributes: {
              formats: {
                medium: {
                  url: "",
                },
              },
            },
          },
        },
      },
    },
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(productService.getProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(productService.getProduct.fulfilled, (state, action) => {
        state.entities = action.payload;
        state.loading = false;
      })
      .addCase(productService.getProduct.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      })

      // details product
      .addCase(productService.getProductDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(productService.getProductDetail.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(productService.getProductDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productSrv.reducer;
