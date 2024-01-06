import { createSlice } from "@reduxjs/toolkit";
import * as productLinkAction from "../action";

export const productLink = createSlice({
  name: "link",
  initialState: {
    loading: false,
    entities: [],
    data: {
      attributes: {
        title: "",
        image: {
          data: {
            attributes: {
              formats: {
                small: {
                  url: "",
                },
                medium: {
                  url: "",
                },
                thumbnail: {
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

  extraReducers: (builder) =>
    builder
      .addCase(productLinkAction.getLinkProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(productLinkAction.getLinkProduct.fulfilled, (state, action) => {
        state.entities = action.payload;
        state.loading = false;
      })
      .addCase(productLinkAction.getLinkProduct.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      }),
});

export default productLink.reducer;
