import { createSlice } from "@reduxjs/toolkit";
import * as allVideos from "../action";

export const videoPrint = createSlice({
  name: "video",
  initialState: {
    loading: false,
    entities: [],
    data: {
      attributes: {
        url: "",
        alt: "",
      },
    },
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(allVideos.getVideo.pending, (state) => {
        state.loading = true;
      })
      .addCase(allVideos.getVideo.fulfilled, (state, action) => {
        state.entities = action.payload;
        state.loading = false;
      })
      .addCase(allVideos.getVideo.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      });
  },
});

export default videoPrint.reducer;
