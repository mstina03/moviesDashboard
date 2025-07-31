import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import NoPage from "./pages/NoPage";
export default function App() {
  var uname = "";
  //if (!uname)
  //  handleNotLoggedIn();
  return (
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
  );
}