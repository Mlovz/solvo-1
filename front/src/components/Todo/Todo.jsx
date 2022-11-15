import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([{ text: "123", id: Math.random() }]);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: text, id: Math.random() }]);
  };

  return (
    <div className="todo">
      <form>
        <input type="text" value={text} onChange={handleChange} />
        <button type="submit" onClick={handleClick}>
          Добавить
        </button>
        <div>
          {todos.map((item, index) => (
            <p key={index}>{item.text}</p>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Todo;
