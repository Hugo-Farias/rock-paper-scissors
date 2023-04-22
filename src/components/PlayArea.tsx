import "./PlayArea.scss";
import Choose from "./Choose";
import ResultsTable from "./common/ResultsTable";
import { useAppSelector } from "../helper";

const PlayArea = function () {
  const state = useAppSelector((state) => state.main.gameState);

  return (
    <div className="play-area">
      {state === "choose" && <Choose />}
      {state === "result" && <ResultsTable />}
    </div>
  );
};

export default PlayArea;
