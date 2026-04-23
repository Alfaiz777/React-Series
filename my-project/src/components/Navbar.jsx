import React, { useState } from "react";
import useAuth from "../contexts/authContext";

function Navbar() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const [setUser] = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    setUser(username, password);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        placeholder="username"
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="password"
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Navbar;
