import "./PlayArea.scss";
import triangle from "../assets/images/bg-triangle.svg";
import Coin from "./common/Coin";

const PlayArea = function () {
  return (
    <div className="play-area">
      <img src={triangle} alt="" />
      <div className="icons-container">
        <div className="top-left">
          <Coin rps="paper" />
        </div>
        <div className="top-right">
          <Coin rps="scissors" />
        </div>
        <div className="bottom">
          <Coin rps="rock" />
        </div>
      </div>
    </div>
  );
};

export default PlayArea;
