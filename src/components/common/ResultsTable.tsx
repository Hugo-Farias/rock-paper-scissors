import "./ResultsTable.scss";
import { useState } from "react";
import Button from "./Button";
import Coin from "./Coin";
import { useAppDispatch, useAppSelector } from "../../helper";
import { resetState } from "../../store/slice";

const ResultsTable = function () {
  const [win, setWin] = useState<boolean | null>(true);
  const [finished, setFinished] = useState<string>("");
  const dispatch = useAppDispatch();
  const housePick = useAppSelector((state) => state.main.housePick);
  const playerPick = useAppSelector((state) => state.main.playerPick);

  setTimeout(() => setFinished("finished"), 500);

  return (
    <div className="results-container">
      <div className="plays-container">
        <div className={`you-picked ${finished}`}>
          <Coin rps={playerPick} />
        </div>
        <div className={`house-picked ${finished}`}>
          <Coin rps={housePick} />
        </div>
      </div>
      <div className={`results ${finished}`}>
        <h2>You {win ? "win" : "lose"}</h2>
        <Button alt={true} onClick={() => dispatch(resetState())}>
          Play Again
        </Button>
      </div>
    </div>
  );
};

export default ResultsTable;
