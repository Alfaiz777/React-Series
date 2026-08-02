// import { useState, useCallback } from "react";

// function App() {
//   const [length, setLength] = useState(8);
//   const [numberAllowed, setNumberAllowed] = useState(false);
//   const [charAllowed, setCharAllowed] = useState(false);
//   const [upperCaseAllowed, setUpperCaseAllowed] = useState(false);
//   const [lowerCaseAllowed, setLowerCaseAllowed] = useState(false);
//   const [password, setPassword] = useState("");

//   const passwordGenerator = useCallback(() => {
//     let pass = "";
//     let str = "";

//     if (numberAllowed) str += "0123456789";
//     if (charAllowed) str += "!@#$%^&*-_+[]~";
//     if (upperCaseAllowed) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     if (lowerCaseAllowed) str += "abcdefghijklmnopqrstuvwxyz";

//     for (let i = 0; i < length; i++) {
//       let index = Math.floor(Math.random() * str.length);
//       pass += str.charAt(index);
//     }

//     setPassword(pass);
//   }, [length, numberAllowed, charAllowed, upperCaseAllowed, lowerCaseAllowed]);

//   // generate password automatically when any of the dependencies change
//   // useEffect(() => {
//   //   passwordGenerator();
//   // }, [passwordGenerator]);

//   const copy = () => {
//     navigator.clipboard.writeText(password);
//   };

//   const reset = () => {
//     setLength(8);
//     setNumberAllowed(false);
//     setCharAllowed(false);
//     setUpperCaseAllowed(false);
//     setLowerCaseAllowed(false);
//     setPassword("");
//   };

//   return (
//     <>
//       <h2>Password Generator</h2>
//       {/* Password Display */}
//       <input type="text" value={password} readOnly />
//       <br />
//       <br />
//       {/* Generate Button */}
//       <button onClick={passwordGenerator}>Generate Password</button>
//       <br />
//       <br />
//       <button onClick={copy}>Copy to Clipboard</button>
//       <br />
//       <br />
//       <button onClick={reset}>Reset</button>
//       <br />
//       <br />
//       {/* Length Slider */}
//       <label>Password Length: {length}</label>
//       <input
//         type="range"
//         min={6}
//         max={100}
//         value={length}
//         onChange={(e) => setLength(Number(e.target.value))}
//       />
//       <br />
//       <label>
//         <input
//           type="checkbox"
//           checked={upperCaseAllowed}
//           onChange={() => setUpperCaseAllowed((prev) => !prev)}
//         />
//         Include uppercase
//       </label>
//       <label>
//         <input
//           type="checkbox"
//           checked={lowerCaseAllowed}
//           onChange={() => setLowerCaseAllowed((prev) => !prev)}
//         />
//         Include lowercase
//       </label>
//       {/* Numbers Checkbox */}
//       <label>
//         <input
//           type="checkbox"
//           checked={numberAllowed}
//           onChange={() => setNumberAllowed((prev) => !prev)}
//         />
//         Include Numbers
//       </label>
//       <br />
//       {/* Characters Checkbox */}
//       <label>
//         <input
//           type="checkbox"
//           checked={charAllowed}
//           onChange={() => setCharAllowed((prev) => !prev)}
//         />
//         Include Special Characters
//       </label>
//       <span>password length: {length}</span> <br />
//       <span>Numbers: {numberAllowed ? "yes" : "no"}</span> <br />
//       <span>Special characters: {charAllowed ? "yes" : "no"}</span> <br />
//     </>
//   );
// }

// export default App;

//-----------------------

import React from "react";
import { useState, useCallback } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [lowerCaseAllowed, setLowerCaseAllowed] = useState(false);
  const [upperCaseAllowed, setUpperCaseAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = " ";
    let str = " ";

    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*()_+";
    if (lowerCaseAllowed) str += "abcdefghijklmnopqrstuvwxyz";
    if (upperCaseAllowed) str += "ABCDEFGHIJKLMONPQRSTUVWXYZ";

    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, lowerCaseAllowed, upperCaseAllowed]);

  const copy = () => {
    navigator.clipboard.writeText(password);
  };

  const reset = () => {
    setLength(8);
    setNumberAllowed(false);
    setCharAllowed(false);
    setLowerCaseAllowed(false);
    setUpperCaseAllowed(false);
    setPassword("");
  };

  return (
    <>
      <h2>Generate Password</h2>

      <input type="text" value={password} readOnly />

      <button onClick={copy}>Copy Password</button>
      <br />
      <br />
      <button onClick={reset}>Reset</button>

      <label>
        <input
          type="range"
          min={6}
          max={100}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
        Length
      </label>

      <br />
      <br />

      <button onClick={generatePassword}>Generate Password</button>

      <label>
        <input
          type="checkBox"
          checked={numberAllowed}
          onChange={() => setNumberAllowed((prev) => !prev)}
        />
        Number Allowed
      </label>

      <label>
        <input
          type="checkbox"
          checked={charAllowed}
          onChange={() => setCharAllowed((prev) => !prev)}
        />
        Char Allowed
      </label>

      <label>
        <input
          type="checkbox"
          checked={lowerCaseAllowed}
          onChange={() => setLowerCaseAllowed((prev) => !prev)}
        />
        lowercase Allowed
      </label>
      <label>
        <input
          type="checkbox"
          checked={upperCaseAllowed}
          onChange={() => setUpperCaseAllowed((prev) => !prev)}
        />
        uppercase Allowed
      </label>

      <br />
      <br />
      <br />

      <span>total length : {length}</span>
      <span>Number Allowed : {numberAllowed ? "yes" : "no"}</span>
      <span>char Allowed : {charAllowed ? "yes" : "no"}</span>
      <span>uppercase Allowed : {upperCaseAllowed ? "yes" : "no"}</span>
      <span>lowercase Allowed : {lowerCaseAllowed ? "yes" : "no"}</span>
    </>
  );
}

export default App;
