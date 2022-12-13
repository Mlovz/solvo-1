import React from "react";
import { useSelector } from "react-redux";
import "./alert.scss";

const Alert = () => {
  // const { error, success } = useSelector((state) => state.alert);

  return (
    <>
      {/* {(success || error) && (
        <div className={`alert ${success ? "success" : "error"}`}>
          {success ? success : error}
        </div>
      )} */}
    </>
  );
};

export default Alert;
