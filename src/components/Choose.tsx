import "./Choose.scss";
import triangle from "../assets/images/bg-triangle.svg";
import Coin from "./common/Coin";

const Choose = function () {
  return (
    <>
      <div className="choose">
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
    </>
  );
};

export default Choose;
