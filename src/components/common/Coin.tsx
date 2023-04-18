import "./Coin.scss";
import React from "react";
import { LightenColor } from "../../helper";
import useImportSvg from "../../hook/useImportSvg";

interface prop {
  rps: "rock" | "paper" | "scissors";
}

const optionsColor = {
  rock: "#DB2E4D",
  paper: "#4664F4",
  scissors: "#EB9F0E",
};

const Coin = function ({ rps }: prop) {
  const { SvgIcon } = useImportSvg(`icon-${rps}`);

  if (!SvgIcon) return null;

  const mainColor = LightenColor(optionsColor[rps], -17);

  return (
    <div className="coin" style={{ backgroundColor: optionsColor[rps] }}>
      <div className="circle">
        {/*@ts-ignore*/}
        <SvgIcon />
      </div>
      <span className="bottom-shadow" style={{ backgroundColor: mainColor }} />
    </div>
  );
};

export default Coin;
