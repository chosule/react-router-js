import { createContext } from "react";

const RouterContext = createContext({
  path: "",
  changePath: path,
});

export default RouterContext;
