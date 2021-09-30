import { createContext, useReducer } from "react";
import calculatorReducer, {
  DELETE,
  CLEARALL,
  EQUAL,
} from "../reducers/calculator_reducer";

export const StateContext = createContext({
  state: null,
  handleClick: () => {},
});

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(calculatorReducer, {
    expression: "",
    result: "",
  });

  const handleClick = (event) => {
    let value = event.target.value;
    switch (value) {
      case "AC":
        dispatch({ type: CLEARALL });
        break;

      case "C":
        dispatch({ type: DELETE });
        break;

      case "=": {
        dispatch({ type: EQUAL });
        break;
      }

      default: {
        dispatch({ type: "OTHER", payload: { value } });
      }
    }
  };
  return (
    <StateContext.Provider
      value={{
        state,
        handleClick,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
