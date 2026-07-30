import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  // const resetColor = () => {
  //   setColor(" ");
  // };

  const colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "black",
    "orange",
  ];

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <h1>Current Color: {color}</h1>
        <div className="fixed flex flex-wrap justify-center inset-x-0 bottom-12 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
            {colors.map((c) => (
              <button
                key={c}
                onClick={() => setColor(c)}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
                style={{ backgroundColor: c }}
              >
                {c.charAt(0).toUpperCase() + c.slice(1)}
              </button>
            ))}
            {/* <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("purple")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>
            <button
              onClick={() => setColor("black")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
            <button
              onClick={() => setColor("orange")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg cursor-pointer"
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
            <button
              onClick={resetColor}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg cursor-pointer"
            >
              Reset
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
