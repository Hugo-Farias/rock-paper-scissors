import "./Coin.scss";
import React from "react";
import { LightenColor, useAppDispatch, useAppSelector } from "../../helper";
import useImage from "../../hook/useImage";
import { rpsT } from "../../typeDef";
import { pick } from "../../store/slice";

interface prop {
  rps: rpsT;
}

const optionsColor = {
  rock: "#DB2E4D",
  paper: "#4664F4",
  scissors: "#EB9F0E",
};

const Coin = function ({ rps }: prop) {
  if (!rps) return null;

  const gameState = useAppSelector((state) => state.main.gameState);
  const dispatch = useAppDispatch();

  const handleClick = function () {
    if (gameState === "result") return;

    dispatch(pick(rps));
  };

  const { path } = useImage(`icon-${rps}`, "svg");

  if (!path) return null;

  const darkColor = LightenColor(optionsColor[rps], -17);

  return (
    <>
      <span className="bottom-shadow" style={{ backgroundColor: darkColor }} />
      <div
        className="coin"
        style={{ backgroundColor: optionsColor[rps] }}
        onClick={handleClick}
      >
        <div className="circle">
          <img
            src={path}
            alt="RPS icon"
            style={{ scale: rps === "rock" ? "0.85" : "1" }}
          />
        </div>
      </div>
    </>
  );
};

export default Coin;
