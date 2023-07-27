import { useCallback, useEffect, useState } from "react";
import RouterContext from "../context/RouterContext";

/**
 * @description
 * history.pushState 는 리로드 하지않고 페이지 주소만 변경할때 사용
 * 페이지 이동없이 주소만 바꿔준다.
 * history.pushState(state,title,url)
 * state : 브라우저 이동 시 넘겨줄 데이터
 * title : 변경할 브라우저 타이틀
 * url : 변경할 브라우저 주소
 */
const Router = ({ children }) => {
  const [path, setPath] = useState(window.location.pathname);

  const changePath = useCallback((path) => {
    window.history.pushState({ path }, "", path);
    setPath(path);
    console.log("ppp", path);
  }, []);

  useEffect(() => {
    const popStateHandler = (e) => {
      if (!e.state) return;
      console.log("test", e.state.path); // url 값이 나옴
      setPath(e.state.path);
    };

    window.addEventListener("popstate", popStateHandler);

    return () => window.removeEventListener("popstate", popStateHandler);
  }, []);

  return (
    <RouterContext.Provider value={{ path, changePath }}>
      {children}
    </RouterContext.Provider>
  );
};

export default Router;
