import React, { useEffect, useState } from "react";
import "./todo.css";

const Todo = () => {
  //Создать state для хранения задач
  //Создать state для хранения значения инпута
  //Создать функцию, которая сохраняет значения инпута в стате
  //Создать функцию, которая сохраняет задачу внутри нашего массива todos

  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const change = (e) => {
    setInputValue(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();

    const newTask = {
      id: Math.random(),
      text: inputValue,
      isComplete: false,
    };

    setTodos([...todos, newTask]);
    setInputValue("");
  };

  const deleteItem = (id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  const finish = (id) => {
    console.log(id);
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        return { ...item, isComplete: !item.isComplete };
      }

      return item;
    });

    setTodos(newTodos);
  };

  return (
    <div className="todo">
      <form className="todo-form">
        <input type="text" onChange={change} />
        <button type="submit" onClick={handleClick}>
          Добавить
        </button>
      </form>
      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className={`${todo.isComplete ? "disabled" : ""}`}>
            <p>{todo.text}</p>
            <button onClick={() => deleteItem(todo.id)}>&times;</button>
            <button onClick={() => finish(todo.id)}>Завершить</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
