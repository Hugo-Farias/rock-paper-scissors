import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isRulesModal: false,
  gameState: "picking",
  playerScore: 0,
  houseScore: 0,
  playerPick: "",
  housePick: "",
};

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
