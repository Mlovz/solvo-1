import React, { useEffect, useState } from "react";
import "./todo.css";

const Todo = () => {
  return (
    <div className="todo">
      <form className="todo-form">
        <input type="text" />
        <button type="submit">Добавить</button>
      </form>
      <div className="todo-list"></div>
    </div>
  );
};

export default Todo;
