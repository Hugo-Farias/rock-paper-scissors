import "./PlayArea.scss";
import triangle from "../assets/images/bg-triangle.svg";
import Coin from "./common/Coin";
import Button from "./common/Button";

const PlayArea = function () {
  return (
    <>
      <div className="play-area">
        <img src={triangle} alt="" />
        <div className="icon top-left">
          <Coin rps="paper" />
        </div>
        <div className="icon top-right">
          <Coin rps="scissors" />
        </div>
        <div className="icon bottom">
          <Coin rps="rock" />
        </div>
      </div>
      <div className="button-rules">
        <Button>Rules</Button>
      </div>
    </>
  );
};

export default PlayArea;
