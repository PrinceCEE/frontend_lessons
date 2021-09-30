import { useContext } from "react";
import Display from "./Display";
import { StateContext } from "../providers/StateProvider";

const DisplayContainer = () => {
  const { state } = useContext(StateContext);

  return (
    <div className="display-container">
      <Display value={state.expression} />
      <Display value={state.result} />
    </div>
  );
};

export default DisplayContainer;
