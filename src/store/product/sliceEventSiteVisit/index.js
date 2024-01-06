import { createSlice } from "@reduxjs/toolkit";
import * as eventSiteVisit from "../action";

export const eventsSlice = createSlice({
  name: "event",
  initialState: {
    loading: false,
    entities: [],
    data: {
      attributes: {
        url: "",
        tanggal_event: "",
        title: "",
        name_icon: "",
        image: {
          data: {
            attributes: {
              formats: {
                large: {
                  url: "",
                },
                small: {
                  url: "",
                },
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

  extraReducers: (builder) =>
    builder
      .addCase(eventSiteVisit.getSiteVisit.pending, (state) => {
        state.loading = true;
      })
      .addCase(eventSiteVisit.getSiteVisit.fulfilled, (state, action) => {
        state.entities = action.payload;
        state.loading = false;
      })
      .addCase(eventSiteVisit.getSiteVisit.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      }),

  //   // details blogs handle
  //   .addCase(eventSiteVisit.getDetail.pending, (state) => {
  //     state.loading = true;
  //   })
  //   .addCase(eventSiteVisit.getDetail.fulfilled, (state, action) => {
  //     state.data = action.payload;
  //     state.loading = false;
  //   })
  //   .addCase(eventSiteVisit.getDetail.rejected, (state, action) => {
  //     state.loading = false;
  //     state.error = action.payload;
  //   }),
});

export default eventsSlice.reducer;
