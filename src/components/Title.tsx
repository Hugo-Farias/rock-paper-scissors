import "./Title.scss";
import SiteLogo from "../assets/images/logo.svg";

const Title = function () {
  return (
    <div className="title">
      <img src={SiteLogo} alt="" />
      <div className="score-container">
        <span>score</span>
        <div className="score">12</div>
      </div>
    </div>
  );
};

export default Title;
