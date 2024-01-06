import { createSlice } from "@reduxjs/toolkit";
import { getSlider } from "../action"; // Import specific action creator(s)

export const sliceSlider = createSlice({
  name: "slider",
  initialState: {
    loading: false,
    entities: [],
    data: {
      attributes: {
        alt: "",
        image: {
          createdAt: "",
          updatedAt: "",
          publishedAt: "",
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
        },
      },
    },
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getSlider.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSlider.fulfilled, (state, action) => {
        state.entities = action.payload;
        state.loading = false;
      })
      .addCase(getSlider.rejected, (state, action) => {
        state.loading = false; // Set loading to false on rejection
        state.error = action.payload;
      });
  },
});

export default sliceSlider.reducer;
