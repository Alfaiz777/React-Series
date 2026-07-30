import Card from "./components/Card";
import reactimg from "./assets/react.svg";

function App() {
  // let myObj = {
  //   username: "Alfaiz",
  //   age: 21
  // }

  let newArr = [1, 2, 3];

  let user = {
    name: "Alfaiz",
    role: "React learner",
  };
  return (
    <>
      <h1 className="text-3xl font-bold underline bg-amber-600 mb-5">
        Hello world!
      </h1>
      <Card
        channel="chaiaurcode"
        someobj={newArr}
        btntext="click me"
        views={234}
      />
      <Card channel="hitesh" btntext="visit me" views={150} anotherobj={user} />
      <Card channel="alfaiz" btntext="follow me" img={reactimg} views={300} />
      <Card />
    </>
  );
}

export default App;
