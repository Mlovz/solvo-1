import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthLayout = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const logged = localStorage.getItem("token");

  if (isAuth && logged) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
