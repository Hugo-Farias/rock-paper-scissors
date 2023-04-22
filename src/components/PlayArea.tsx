import "./PlayArea.scss";
import Choose from "./Choose";
import ResultsTable from "./common/ResultsTable";
import { rpsGame, useAppSelector } from "../helper";

const PlayArea = function () {
  const state = useAppSelector((state) => state.main.gameState);

  console.log(rpsGame("paper", "rock"));

  return (
    <div className="play-area">
      {state === "choose" && <Choose />}
      {state === "result" && <ResultsTable />}
    </div>
  );
};

export default PlayArea;
