import "./Title.scss";
import SiteLogo from "../assets/images/logo.svg";
import { useAppSelector } from "../helper";

const Title = function () {
  const playerScore = useAppSelector((state) => state.main.playerScore);
  const houseScore = useAppSelector((state) => state.main.houseScore);

  return (
    <div className="title">
      <img src={SiteLogo} alt="" />
      <div className="score-container">
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
