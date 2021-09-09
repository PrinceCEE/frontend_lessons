import { useState } from 'react';
import "./App.css";
import DisplayContainer from "./components/DisplayContainer";
import Buttons from "./components/Buttons";
import StateContext from "./providers/StateProvider";

const operators = ["*", "%", "+", "/", "-"];

const Calculator = () => {
  const [state, setState] = useState({
    expression: "",
    result: ""
  });

  const handleClick = (event) => {
    let value = event.target.value;
    switch(value) {
      case "AC": {
        setState({ ...state, expression: "" });
        break;
      }

      case "C": {
        let prev = state.expression;
        prev = prev.slice(0, prev.length - 1);
        setState({ ...state, expression: prev });
        break;
      }

      case "=": {
        if(state.expression !== "") {
          try {
            // eslint-disable-next-line no-eval
            let ans = eval(state.expression);
            setState({ expression: "", result: ans });
            break;
          } catch(err) {
            setState({ ...state, result: err.message });
          }
        }
        break;
      }

      default: {
        const { expression } = state;
        let newExp;

        if(value === "x") value = "*";

        if(operators.includes(value)) {
          const lastInput = expression[expression.length - 1];
          if(operators.includes(lastInput)) {
            let prev = expression;
            prev = prev.slice(0, prev.length - 1);
            newExp = prev + value;
          }
        }

        setState({ ...state, expression: newExp ?? expression + value });
      }
    }
  };

  return (
    <StateContext.Provider
      value={{
        state,
        handleClick 
      }}
    >
      <div className="app-container">
        <div className="app">
          <DisplayContainer />
          <hr />
          <Buttons />
        </div>
      </div>
    </StateContext.Provider>
  )
};

export default Calculator;