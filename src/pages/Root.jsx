import useRouter from "../hooks/useRouter";
const Root = () => {
  const { push } = useRouter();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Root Page</h1>
      <button onClick={() => push("/about")}>about</button>
    </div>
  );
};

export default Root;
