import "./Title.scss";
import SiteLogo from "../assets/images/logo.svg";
import { useAppDispatch, useAppSelector } from "../helper";
import { resetScore } from "../store/slice";

const Title = function () {
  const playerScore = useAppSelector((state) => state.main.playerScore);
  const houseScore = useAppSelector((state) => state.main.houseScore);
  const dispatch = useAppDispatch();

  const handleClick = function () {
    const conf = window.confirm("Are you sure?");

    if (!conf) return;

    dispatch(resetScore());
  };

  return (
    <div className="title">
      <img src={SiteLogo} alt="" />
      <div className="score-container" onClick={handleClick}>
        <span>score</span>
        <div className="score">
          <div className="player-score">{playerScore}</div>/
          <div className="house-score">{houseScore}</div>
        </div>
      </div>
    </div>
  );
};

export default Title;
