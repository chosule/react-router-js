import "./App.css";

function App() {
  return (
    <>
      <Route path="/" component={<Root />} />
      <Route path="/about" component={<About />} />
    </>
  );
}

export default App;
