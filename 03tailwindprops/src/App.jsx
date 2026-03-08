import Card from './components/Card'

function App() {

  // let myObj = {
  //   username: "Alfaiz",
  //   age: 21
  // }

  let newArr = [1,2,3]
  return (
    <>
      <h1 className="text-3xl font-bold underline bg-amber-600 mb-5">
        Hello world!
      </h1>
      <Card channel='chaiaurcode' someobj={newArr} btntext='click me' />
      <Card channel='hitesh'btntext='visit me' />

       
    </>
  );
}

export default App;
