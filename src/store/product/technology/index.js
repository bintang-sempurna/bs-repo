import { createSlice } from "@reduxjs/toolkit";
import * as slicetechnologies from "../action";

export const sliceTechnology = createSlice({
  name: "technology",
  initialState: {
    loading: false,
    entities: [],
    data: {
      attributes: {
        title: "",
        tag: "",
        description: "",
        content: "",
        slug: "",
        image: {
          data: {
            attributes: {
              formats: {
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

  extraReducers: (builder) => {
    builder
      .addCase(slicetechnologies.getTechnology.pending, (state) => {
        state.loading = true;
      })
      .addCase(slicetechnologies.getTechnology.fulfilled, (state, action) => {
        state.entities = action.payload;
        state.loading = false;
      })
      .addCase(slicetechnologies.getTechnology.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      })

      // details technology details
      .addCase(slicetechnologies.getDetailsTec.pending, (state) => {
        state.loading = true;
      })
      .addCase(slicetechnologies.getDetailsTec.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(slicetechnologies.getDetailsTec.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default sliceTechnology.reducer;
