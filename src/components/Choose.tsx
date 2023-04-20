import "./Choose.scss";
import triangle from "../assets/images/bg-triangle.svg";
import Coin from "./common/Coin";
import Button from "./common/Button";
import { useAppDispatch } from "../helper";
import { openRulesModal } from "../store/slice";

const Choose = function () {
  const dispatch = useAppDispatch();

  const handleButtonClick = function () {
    dispatch(openRulesModal(true));
  };

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
        <Button onClick={handleButtonClick}>Rules</Button>
      </div>
    </>
  );
};

export default Choose;
