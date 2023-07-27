import { createContext } from "react";

const RouterContext = createContext({
  path: "",
  changePath: () => {},
});

export default RouterContext;
