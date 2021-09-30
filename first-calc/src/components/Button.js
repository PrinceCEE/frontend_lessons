import { useContext } from "react";
import StateContext from "../providers/StateProvider";

const Button = ({ value }) => {
  const { handleClick } = useContext(StateContext);
  return (
    <input
      value={value}
      type="button"
      onClick={handleClick}
      style={{ width: value === "=" ? "50%" : "" }}
    />
  );
};

export default Button;
