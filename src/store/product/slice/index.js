import { createSlice } from "@reduxjs/toolkit";
import * as productAct from "../action";

export const productSlice = createSlice({
  name: "blog",
  initialState: {
    loading: false,
    entities: [],
    data: {
      attributes: {
        title: "",
        description: "",
        slug: "",
        featured: "",
        createdAt: "",
        updatedAt: "",
        publishedAt: "",
        id_categories: "",
        alt: "",
        image: {
          data: {
            attributes: {
              formats: {
                large: {
                  url: "",
                },
              },
            },
          },
        },
        categories: {
          data: {
            attributes: {
              title: "",
              slug: "",
            },
          },
        },
        mode: {
          data: {
            attributes: {
              title: "",
            },
          },
        },
        blogMeta: {
          metaTitle: "",
          metaDescription: "",
          keywords: "",
          preventIndexing: "",
        },
      },
    },
    error: null,
  },

  extraReducers: (builder) =>
    builder
      .addCase(productAct.getAll.pending, (state) => {
        state.loading = true;
      })
      .addCase(productAct.getAll.fulfilled, (state, action) => {
        state.entities = action.payload;
        state.loading = false;
      })
      .addCase(productAct.getAll.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      })

      // details blogs handle
      .addCase(productAct.getDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(productAct.getDetail.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(productAct.getDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export default productSlice.reducer;
