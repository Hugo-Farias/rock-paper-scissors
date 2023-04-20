import "./PlayArea.scss";
import triangle from "../assets/images/bg-triangle.svg";
import Coin from "./common/Coin";
import Button from "./common/Button";
import rulesImg from "../assets/images/image-rules.svg";
import Modal from "./common/Modal";
import { useAppDispatch } from "../helper";
import { openRulesModal } from "../store/slice";

const PlayArea = function () {
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
      <Modal isOpen={false}>
        <img src={rulesImg} alt="" />
      </Modal>
    </>
  );
};

export default PlayArea;
