import "./Choose.scss";
import triangle from "../assets/images/bg-triangle.svg";
import Coin from "./common/Coin";
import { useAppDispatch } from "../helper";

const Choose = function () {
  const dispatch = useAppDispatch();

  const handleClick = function () {};

  return (
    <>
      <div className="choose">
        <img src={triangle} alt="background image" />
        <div className="icon top-left" onClick={handleClick}>
          <Coin rps="paper" />
        </div>
        <div className="icon top-right" onClick={handleClick}>
          <Coin rps="scissors" />
        </div>
        <div className="icon bottom" onClick={handleClick}>
          <Coin rps="rock" />
        </div>
      </div>
    </>
  );
};

export default Choose;
