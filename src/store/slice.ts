import { createSlice } from "@reduxjs/toolkit";
import { rpsT } from "../typeDef";

interface init {
  isRulesModal: boolean;
  gameState: "result" | "choose";
  playerScore: number;
  houseScore: number;
  playerPick: rpsT;
  housePick: rpsT;
  finalResult: "win" | "lose" | "draw" | "";
}

const initialState: init = {
  isRulesModal: false,
  gameState: "choose",
  playerScore: 0,
  houseScore: 0,
  playerPick: "",
  housePick: "",
  finalResult: "",
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    openRulesModal: (state, action: { payload: boolean }) => {
      state.isRulesModal = action.payload;
    },
    pick: (state, action: { payload: rpsT }) => {
      state.playerPick = action.payload;

      const options: ("rock" | "paper" | "scissors")[] = [
        "rock",
        "paper",
        "scissors",
      ];

      state.housePick = options[Math.floor(Math.random() * 3)];

      console.log(state.playerPick);
      console.log(state.housePick);
      state.gameState = "result";
    },
    resetState: (state) => {
      state.gameState = "choose";
    },
  },
});

export const { openRulesModal, pick, resetState } = mainSlice.actions;

export const { reducer: mainReducer } = mainSlice;
