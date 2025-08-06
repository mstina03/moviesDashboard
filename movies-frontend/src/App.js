import React, { useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import NoPage from "./pages/NoPage";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [uname, setUname] = useState(null);

  const unameRef = useRef();
  const pwordRef = useRef();

  const handleLogin = () => {
    let user = {
      uname: unameRef.current.value,
      pword: pwordRef.current.value
    };

    let parameters = {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    };

    fetch("http://localhost:5050/users", parameters)
      .then(res => res.json())
      .then(json => {
        const u = json.users;
        if (!u) {
          console.log("Invalid username");
        } else if (u[0].pword !== user.pword) {
          console.log("Invalid password");
        } else {
          console.log("Login successful");
          setUname(user.uname);
        }
      });
  };

  const handleRegister = (uname, pword, email) => {
    console.log("Registering:", uname, pword, email);
  };

  const handleLogout = () => {
    setUname('');
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home uname={uname} />} /> 
          <Route path="login" element={<Login uname={uname} unameRef={unameRef} pwordRef={pwordRef} handleLogin={handleLogin} />} />
          <Route path="logout" element={<Logout uname={uname} handleLogout={handleLogout} />} />
          <Route path="register" element={<Register handleRegister={handleRegister} />} />
          <Route path="dashboard" element={<Dashboard uname={uname} />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
