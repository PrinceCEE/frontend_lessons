import { createContext } from 'react';

const StateContext = createContext({
  state: null,
  handleClick: () => {}
});

export default StateContext;