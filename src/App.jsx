import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home.jsx";
import Doctors from "./Doctors.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Navbar from "./Navbar.jsx";

export default function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

