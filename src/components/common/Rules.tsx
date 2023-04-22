import "./Rules.scss";
import rulesImg from "../../assets/images/image-rules.svg";

const Rules = function () {
  return (
    <div className="rules">
      <div className="rules-title">Rules</div>
      <img src={rulesImg} alt="" />
    </div>
  );
};

export default Rules;
