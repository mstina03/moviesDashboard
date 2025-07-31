import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import NoPage from "./pages/NoPage";

function App() {
  var uname = "";
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/message') // Don't use localhost or port here
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => {
        console.error('Fetch error:', err);
      });
  }, []);

  return (
    <div>
      <h1>Movies Dashboard</h1>
      <p>{message}</p>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home uname={uname} />} />
            <Route path="login" element={<Login
              uname={uname} />} />
            <Route path="logout" element={<Logout uname={uname} />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
