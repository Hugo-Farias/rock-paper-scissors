import "./ResultsTable.scss";
import { useState } from "react";
import Button from "./Button";

const ResultsTable = function () {
  const [win, setWin] = useState<boolean | null>(true);

  return (
    <div className="results-container">
      <div className="plays-container">
        <div className="you-picked"></div>
        <div className="house-picked"></div>
      </div>
      <div className={`results ${win === null ? "hidden" : "show"}`}>
        <h2>You {win ? "win" : "lose"}</h2>
        <Button alt={true}>Play Again</Button>
      </div>
    </div>
  );
};

export default ResultsTable;
