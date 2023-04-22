import { createSlice } from "@reduxjs/toolkit";
import { rpsT } from "../typeDef";
import { rpsGame } from "../helper";

interface init {
  isRulesModal: boolean;
  gameState: "result" | "choose";
  playerScore: number;
  houseScore: number;
  playerPick: rpsT;
  housePick: rpsT;
  finalResult: boolean | null;
}

const initialState: init = {
  isRulesModal: false,
  gameState: "choose",
  playerScore: +localStorage.getItem("playerScore")! || 0,
  houseScore: +localStorage.getItem("houseScore")! || 0,
  playerPick: "",
  housePick: "",
  finalResult: null,
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

      state.housePick = options.filter((v) => v !== action.payload)[
        Math.floor(Math.random() * 2)
      ];

      if (state.playerPick === "") return;

      state.finalResult = rpsGame(state.playerPick, state.housePick);

      if (state.finalResult) {
        state.playerScore++;
        localStorage.setItem("playerScore", state.playerScore + "");
      }

      if (state.finalResult === false) {
        state.houseScore++;
        localStorage.setItem("houseScore", state.houseScore + "");
      }

      state.gameState = "result";
    },
    resetState: (state) => {
      state.gameState = "choose";
    },
    resetScore: (state) => {
      state.playerScore = 0;
      state.houseScore = 0;

      localStorage.removeItem("playerScore");
      localStorage.removeItem("houseScore");
      state.gameState = "choose";
    },
  },
});

export const { openRulesModal, pick, resetState, resetScore } =
  mainSlice.actions;

export const { reducer: mainReducer } = mainSlice;
