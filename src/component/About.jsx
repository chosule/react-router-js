import useRouter from "../hooks/useRouter";
const About = () => {
  const { push } = useRouter();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>About Page</h1>
      <button onClick={() => push("/")}>go main</button>
    </div>
  );
};

export default About;
