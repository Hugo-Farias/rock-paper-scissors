import { createSlice } from "@reduxjs/toolkit";

interface init {
  isRulesModal: boolean;
  gameState: "result" | "choose";
  playerScore: number;
  houseScore: number;
  playerPick: "rock" | "paper" | "scissors" | "";
  housePick: "rock" | "paper" | "scissors" | "";
}

const initialState: init = {
  isRulesModal: false,
  gameState: "choose",
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
