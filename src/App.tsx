import "./App.scss";
import Title from "./components/Title";
import PlayArea from "./components/PlayArea";
import Modal from "./components/common/Modal";
import Rules from "./components/common/Rules";
import Button from "./components/common/Button";
import { useAppDispatch } from "./helper";
import { openRulesModal } from "./store/slice";

function App() {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="app">
        <Title />
        <PlayArea />
        <Modal>
          <Rules />
        </Modal>
      </div>
      <div className="button-rules">
        <Button onClick={() => dispatch(openRulesModal(true))}>Rules</Button>
      </div>
    </>
  );
}

export default App;
