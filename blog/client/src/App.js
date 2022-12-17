import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Login, Home, Register } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alert from "./components/Alert/Alert";
import Loading from "./components/Loading/Loading";
import { useDispatch } from "react-redux";
import { getUser } from "./redux/actions/authActions";
import AuthLayout from "./components/Layout/AuthLayout";
import AppLayout from "./components/Layout/AppLayout";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Alert />
      <Loading />

      <div className="container">
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
