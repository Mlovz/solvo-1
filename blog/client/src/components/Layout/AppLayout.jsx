import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AppLayout = () => {
  const { isAuth } = useSelector((state) => state.auth);
  const logged = localStorage.getItem("token");

  if (!isAuth && !logged) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AppLayout;
