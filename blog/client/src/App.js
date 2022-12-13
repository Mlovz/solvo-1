import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Login, Home, Register } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alert from "./components/Alert/Alert";
import Loading from "./components/Loading/Loading";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Alert />
      <Loading />

      <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
