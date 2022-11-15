import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([
    { text: "123", id: 1 },
    { text: "2222222222222", id: 10 },
  ]);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (text === "") return;

    setTodos([...todos, { text: text, id: Math.random() }]);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    console.log(id);

    // const newData = todos.filter((item) => item.id !== id);
    // setTodos(newData);
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
            <p key={index}>
              {item.text}
              <button onClick={(e) => handleDelete(e, item.id)}>Delete</button>
            </p>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Todo;
