import { useContext } from "react";
import RouterContext from "../context/RouterContext";
/**
 * @description
 * 현재 url이 path와 일치하면 component 렌더링
 */

const Route = ({ path, component }) => {
  const { path: currentPath } = useContext(RouterContext);
  // const _path = path ? path : "/";
  if (path === currentPath) {
    return component;
  } else {
    return null;
  }
};

export default Route;
