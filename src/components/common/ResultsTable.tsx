import "./ResultsTable.scss";
import { useState } from "react";
import Button from "./Button";
import Coin from "./Coin";

const ResultsTable = function () {
  const [win, setWin] = useState<boolean | null>(true);
  const [finished, setFinished] = useState<string>("");

  setTimeout(() => setFinished("finished"), 500);

  return (
    <div className="results-container">
      <div className="plays-container">
        <div className={`you-picked ${finished}`}>
          <Coin rps="rock" />
        </div>
        <div className={`house-picked ${finished}`}>
          <Coin rps="paper" />
        </div>
      </div>
      <div className={`results ${finished}`}>
        <h2>You {win ? "win" : "lose"}</h2>
        <Button alt={true}>Play Again</Button>
      </div>
    </div>
  );
};

export default ResultsTable;
