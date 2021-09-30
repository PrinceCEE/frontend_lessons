export const DELETE = "DELETE";
export const CLEARALL = "CLEARALL";
export const EQUAL = "EQUAL";

const operators = ["*", "%", "+", "/", "-"];

const reducer = (state, action) => {
  switch (action.type) {
    case DELETE:
      let prev = state.expression;
      prev = prev.slice(0, prev.length - 1);
      return {
        ...state,
        expression: prev,
      };
    case CLEARALL:
      return {
        ...state,
        expression: "",
      };
    case EQUAL:
      if (state.expression !== "") {
        try {
          // eslint-disable-next-line no-eval
          let ans = eval(state.expression);
          return {
            expression: "",
            result: ans,
          };
        } catch (err) {
          return {
            ...state,
            result: err.message,
          };
        }
      }
      break;
    default:
      const { expression } = state;
      let newExp;

      let {
        payload: { value },
      } = action;
      if (value === "x") value = "*";

      if (operators.includes(value)) {
        const lastInput = expression[expression.length - 1];
        if (operators.includes(lastInput)) {
          let prev = expression;
          prev = prev.slice(0, prev.length - 1);
          newExp = prev + value;
        }
      }

      return {
        ...state,
        expression: newExp ?? expression + value,
      };
  }
};

export default reducer;
