import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { useState, useRef } from "react";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import NoPage from "./pages/NoPage";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";

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
        if (!u || u.length === 0) {
          console.log("Username does not exist..");
          alert("Username does not exist");
        } else if (u[0].pword !== user.pword) {
          console.log("Invalid password");
          alert("Invalid password");
        } else {
          console.log("Login successful");
          setUname(user.uname);
        }
      });
  };

  const handleRegister = (uname, pword) => {
    const user = { uname, pword };

    fetch('http://localhost:5050/users/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => {
        console.log("Server response:", data);

        if (data.userId) {
          
          console.log('✅ User registered successfully:', data);
          alert('✅ User registered successfully');
        } else {
          console.error('⚠️ Registration failed:', data.message);
          alert('⚠️ Registration failed.');
        }
      })
      .catch(err => {
        console.error('❌ Error during registration:', err);
        alert('❌ Error during registration.');
      });
  };

  const handleLogout = () => {
    setUname('');
  };

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout uname={uname} />}>
          <Route index element={<Home uname={uname} />} />
          <Route path="/login" element={<Login uname={uname} unameRef={unameRef} pwordRef={pwordRef} handleLogin={handleLogin} />} />
          <Route path="/logout" element={<Logout uname={uname} handleLogout={handleLogout} />} />
          <Route path="/register" element={<Register handleRegister={handleRegister} />} />
          <Route path="/dashboard" element={<Dashboard uname={uname} />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
