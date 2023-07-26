const Route = ({ path, component }) => {
  if (path === window.location.pathname) {
    return component;
  } else {
    return null;
  }
};

export default Route;
