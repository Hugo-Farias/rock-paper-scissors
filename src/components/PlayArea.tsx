import "./PlayArea.scss";
import Choose from "./Choose";
import ResultsTable from "./common/ResultsTable";

const PlayArea = function () {
  return (
    <div className="play-area">
      <ResultsTable />
      {/*<Choose />*/}
    </div>
  );
};

export default PlayArea;
