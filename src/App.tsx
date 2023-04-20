import "./App.scss";
import Title from "./components/Title";
import PlayArea from "./components/PlayArea";
import rulesImg from "./assets/images/image-rules.svg";
import Modal from "./components/common/Modal";

function App() {
  return (
    <div className="app">
      <Title />
      <PlayArea />
      <Modal>
        <img src={rulesImg} alt="" />
      </Modal>
    </div>
  );
}

export default App;
