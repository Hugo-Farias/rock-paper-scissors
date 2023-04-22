import "./Coin.scss";
import React from "react";
import { LightenColor } from "../../helper";
import useImage from "../../hook/useImage";
import { rpsT } from "../../typeDef";

const optionsColor = {
  rock: "#DB2E4D",
  paper: "#4664F4",
  scissors: "#EB9F0E",
};

const Coin = function ({ rps }: rpsT) {
  if (!rps) return null;

  const { path } = useImage(`icon-${rps}`, "svg");

  if (!path) return null;

  const darkColor = LightenColor(optionsColor[rps], -17);

  return (
    <>
      <span className="bottom-shadow" style={{ backgroundColor: darkColor }} />
      <div className="coin" style={{ backgroundColor: optionsColor[rps] }}>
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
