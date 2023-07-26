import { useCallback } from "react";
import RouterContext from "./context/RouterContext";

const Router = ({ children }) => {
  const [path, setPath] = useState(window.location.pathname);
  const changePath = useCallback((path) => {
    window.history.pushState("", "", path);
    setPath(path);
  }, []);
  return (
    <RouterContext.Provider value={{ path, changePath }}>
      {children}
    </RouterContext.Provider>
  );
};

export default Router;
