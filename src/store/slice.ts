import { createSlice } from "@reduxjs/toolkit";

const initialState = { isRulesModal: false };

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    openRulesModal: (state, action) => {
      state.isRulesModal = action.payload;
    },
  },
});

export const { openRulesModal } = mainSlice.actions;

export const { reducer: mainReducer } = mainSlice;
