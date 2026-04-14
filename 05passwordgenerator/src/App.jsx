import { useState, useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+[]~";

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  return (
    <>
      <h2>Password Generator</h2>

      {/* Password Display */}
      <input type="text" value={password} readOnly />

      {/* Generate Button */}
      <button onClick={passwordGenerator}>Generate Password</button>

      <br />
      <br />

      {/* Length Slider */}
      <label>Password Length: {length}</label>
      <input
        type="range"
        min={6}
        max={100}
        value={length}
        onChange={(e) => setLength(Number(e.target.value))}
      />

      <br />

      {/* Numbers Checkbox */}
      <label>
        <input
          type="checkbox"
          checked={numberAllowed}
          onChange={() => setNumberAllowed((prev) => !prev)}
        />
        Include Numbers
      </label>

      <br />

      {/* Characters Checkbox */}
      <label>
        <input
          type="checkbox"
          checked={charAllowed}
          onChange={() => setCharAllowed((prev) => !prev)}
        />
        Include Special Characters
      </label>
    </>
  );
}

export default App;
