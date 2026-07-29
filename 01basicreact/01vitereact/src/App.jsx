import Chai from "./chai";
import Welcome from "./welcome";

function App() {
  const username = "chai or code";
  const course = "React";

  return (
    <>
      <h1>React series | AK {username}</h1>
      <h2>I am learning {course}</h2>
      <Chai />
      <Welcome />
    </>
  );
}

export default App;
