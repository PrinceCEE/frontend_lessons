import "./App.css";
import DisplayContainer from "./components/DisplayContainer";
import Buttons from "./components/Buttons";
import StateProvider from "./providers/StateProvider";

const Calculator = () => {
  return (
    <StateProvider>
      <div className="app-container">
        <div className="app">
          <DisplayContainer />
          <hr />
          <Buttons />
        </div>
      </div>
    </StateProvider>
  );
};

export default Calculator;
