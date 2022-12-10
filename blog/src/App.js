import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Login, Home } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alert from "./components/Alert/Alert";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Alert />

      <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
